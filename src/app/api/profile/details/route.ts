import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth";
import { connectionToDatabase } from "@/lib/db";
import User from "@/models/user.model";
import { z } from "zod";
import { Types } from "mongoose";

// Match constraints from your Mongoose Schema
const detailsSchema = z.object({
  name: z.string().min(3).max(50).optional(),
  phone: z
    .string()
    .regex(/^\+?[0-9 ]{10,17}$/, "Invalid phone format")
    .optional()
    .or(z.literal("")),
  bio: z.string().max(150).optional().or(z.literal("")),
});

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(AuthOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectionToDatabase();

    const body = await request.json();
    const parseResult = detailsSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { name, phone, bio } = parseResult.data;

    // Update using email from session
    const updatedUser = await User.findOneAndUpdate(
      { _id: new Types.ObjectId(session.user.id) },
      {
        $set: {
          ...(name && { name }),
          ...(phone !== undefined && { phone }),
          ...(bio !== undefined && { bio }),
        },
      },
      { new: true, runValidators: true } // runValidators ensures Mongoose checks regex
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Profile details updated successfully",
      user: {
        name: updatedUser.name,
        phone: updatedUser.phone,
        bio: updatedUser.bio,
      },
    });
  } catch (error: any) {
    console.error("Details Update Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
