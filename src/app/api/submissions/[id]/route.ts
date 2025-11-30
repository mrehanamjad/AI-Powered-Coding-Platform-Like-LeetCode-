import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth";
import { connectionToDatabase } from "@/lib/db";
import Submission, { SubmissionI } from "@/models/submission.model";
import mongoose from "mongoose";

/**
 * @method GET
 * @desc Fetch a single submission by ID.
 * @security Ensures users can only view their own submissions.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(AuthOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const submissionId = params.id;
    if (!mongoose.Types.ObjectId.isValid(submissionId)) {
        return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    await connectionToDatabase();

    // Cast the result to SubmissionI | null to resolve the 'userId does not exist' error
    // Populate 'problemId' (the slug field in Problem model), 'title', and 'difficulty'
    const submission = await Submission.findById(submissionId)
        .populate("problemId", "title problemId difficulty") 
        .lean() as SubmissionI | null;

    if (!submission) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    // Authorization Check:
    // Ensure the logged-in user owns this submission
    if (submission.userId.toString() !== session.user.id) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json(submission, { status: 200 });

  } catch (error: any) {
    console.error("GET /api/submissions/[id] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch submission details", details: error.message },
      { status: 500 }
    );
  }
}

