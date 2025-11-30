import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth";
import { connectionToDatabase } from "@/lib/db";
import Submission, { SubmissionI } from "@/models/submission.model";
import mongoose from "mongoose";

/**
 * @method POST
 * @desc Create a new submission record.
 * @note Usually called after the code execution engine returns a result.
 */
// export async function POST(req: NextRequest) {
//   try {
//     const session = await getServerSession(AuthOptions);
//     if (!session || !session.user) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     await connectionToDatabase();
    
//     // Parse body
//     const body = await req.json();
    
//     // Validate required fields (basic validation)
//     // In a production app, use Zod for strict schema validation here
//     const { 
//       problemId, 
//       code, 
//       language, 
//       totalTestCases, 
//       passedTestCases, 
//       status, 
//       lastFailedTestCase,
//       note
//     } = body;

//     if (!problemId || !code || !language || !status) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }


//     // Create the submission linked to the authenticated user
//     const newSubmission:SubmissionI = await Submission.create({
//       userId: new mongoose.Types.ObjectId(session.user.id),
//       problemId: new mongoose.Types.ObjectId(problemId),
//       code,
//       language,
//       totalTestCases,
//       passedTestCases,
//       status,
//       lastFailedTestCase,
//       note
//     });

//     return NextResponse.json(newSubmission, { status: 201 });

//   } catch (error: any) {
//     console.error("POST /api/submissions Error:", error);
//     return NextResponse.json(
//       { error: "Failed to save submission", details: error.message },
//       { status: 500 }
//     );
//   }
// }
export async function POST(req: NextRequest) {
  try {
    // --- 1. Authenticate user ---
    const session = await getServerSession(AuthOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // --- 2. Connect to DB ---
    await connectionToDatabase();

    // --- 3. Parse and validate body ---
    const body = await req.json();

    const {
      problemId,
      code,
      language,
      totalTestCases = 0,
      passedTestCases = 0,
      status,
      lastFailedTestCase = null,
      note = "",
    } = body;

    if (!problemId || !code || !language || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // --- 4. Validate ObjectId fields ---
    if (!mongoose.Types.ObjectId.isValid(problemId)) {
      return NextResponse.json(
        { error: "Invalid problemId format" },
        { status: 400 }
      );
    }

    // --- 5. Prevent duplicate submissions ---
    // Duplicate = same userId, problemId, code, language, status
    const existing = await Submission.findOne({
      userId: session.user.id,
      problemId,
      code,
      language,
      status,
    }).lean();

    if (existing ) {
      return NextResponse.json(
        { error: "Already submitted", submission: existing },
        { status: 409 } // Conflict
      );
    }

    // --- 6. Create submission ---
    const newSubmission: SubmissionI = await Submission.create({
      userId: new mongoose.Types.ObjectId(session.user.id),
      problemId: new mongoose.Types.ObjectId(problemId),
      code,
      language,
      totalTestCases,
      passedTestCases,
      status,
      lastFailedTestCase,
      note,
    });

    return NextResponse.json(newSubmission, { status: 201 });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("POST /api/submissions Error:", error);

    return NextResponse.json(
      { error: "Failed to save submission", details: message },
      { status: 500 }
    );
  }
}

/**
 * @method GET
 * @desc Fetch submissions with pagination.
 * @filters problemId (optional) - to see history for a specific problem
 */
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(AuthOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectionToDatabase();

    const { searchParams } = new URL(req.url);
    const problemId = searchParams.get("problemId");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const userId = session.user.id;

    // Build Query
    const query: any = { userId: new mongoose.Types.ObjectId(userId) };
    
    if (problemId) {
      query.problemId = new mongoose.Types.ObjectId(problemId);
    }

    // Efficient Querying:
    // 1. lean(): Return plain JS objects instead of Mongoose Documents (faster)
    // 2. select(): Exclude heavy fields like 'lastFailedTestCase' for the list view if not needed
    // 3. sort(): Newest first
    const [submissions, total] = await Promise.all([
      Submission.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("problemId", "title difficulty problemId")
        .lean(),
      Submission.countDocuments(query)
    ]);

    return NextResponse.json({
      data: submissions,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }, { status: 200 });

  } catch (error: any) {
    console.error("GET /api/submissions Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions", details: error.message },
      { status: 500 }
    );
  }
}