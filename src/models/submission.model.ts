import mongoose, { Schema, Document, models } from "mongoose";

export interface SubmissionI extends Document {
  _id: mongoose.Types.ObjectId;
  problemId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  code: string;
  language: string;
  totalTestCases: number;
  passedTestCases: number;
  status: "accepted" | "wrongAnswer" | "runtimeError" | "compileError" | "tle";
  lastFailedTestCase?: {
    input: string;
    expectedOutput: string;
    actualOutput: string;
    error?: string; // optional, e.g., runtime error
  } | null;
  note?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const SubmissionSchema: Schema<SubmissionI> = new Schema(
  {
    problemId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Problem",
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
      enum: [
        "javascript",
        "typescript",
        "python",
        "java",
        "cpp",
        "c",
        "csharp",
        "go",
        "rust",
        "ruby",
        "php",
        "swift",
        "kotlin",
      ],
    },
    totalTestCases: {
      type: Number,
      required: true,
    },
    passedTestCases: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["accepted", "wrongAnswer", "runtimeError", "compileError", "tle"],
    },
    lastFailedTestCase: {
      type: {
        input: String,
        expectedOutput: String,
        actualOutput: String,
        error: { type: String, default: null },
      },
      default: null,
    },
    note: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Submission =
  models.Submission ||
  mongoose.model<SubmissionI>("Submission", SubmissionSchema);

export default Submission;
