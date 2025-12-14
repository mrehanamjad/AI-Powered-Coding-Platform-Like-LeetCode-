import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth";
import { connectionToDatabase } from "@/lib/db";
import User from "@/models/user.model";
import { z } from "zod";
import mongoose from "mongoose";

const usernameSchema = z.object({
  userName: z
    .string()
    .min(3)
    .max(30)
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain letters, numbers, _, and -"
    ),
});

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(AuthOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectionToDatabase();

    const body = await request.json();
    const parseResult = usernameSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { userName } = parseResult.data;
    const lowerCaseUserName = userName.toLowerCase();

    // 1. Check if username is taken by SOMEONE ELSE
    const existingUser = await User.findOne({ userName: lowerCaseUserName });

    // If user exists and it's NOT the current user
    if (existingUser && existingUser._id.toString() !== session.user.id) {
      return NextResponse.json(
        { error: "Username is already taken" },
        { status: 409 }
      );
    }

    // 2. Update the user
    const updatedUser = await User.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(session.user.id) },
      { userName: lowerCaseUserName },
      { new: true }
    );

    return NextResponse.json({
      message: "Username updated successfully",
      userName: updatedUser?.userName,
    });
  } catch (error) {
    console.error("Username Update Error:", error);
        const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { error: "Internal Server Error" + message },
      { status: 500 }
    );
  }
}
