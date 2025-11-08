"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { ProblemPanel } from "@/components/ProblemPanel";
import { EditorPanel } from "@/components/EditorPanel";
import { ChatPanel } from "@/components/ChatPanel";
import { ThemeToggle } from "@/components/ThemeToggle";
import { problems } from "@/data/problems";
import { Code2, ArrowLeft, ChevronLeft, ChevronRight, Timer, Play, Pause } from "lucide-react";import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ProblemPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const isMobile = useIsMobile();
    const problemId = params.id;
  const [selectedProblemId, setSelectedProblemId] = useState(
    problemId || problems[0].id
  );
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState<"problem" | "editor" | "chat">(
    "problem"
  );

const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const selectedProblem =
    problems.find((p) => p.id === selectedProblemId) || problems[0];

  const currentIndex = problems.findIndex((p) => p.id === selectedProblemId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < problems.length - 1;

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      const prevProblem = problems[currentIndex - 1];
      setSelectedProblemId(prevProblem.id);
      router.push(`/problems/${prevProblem.id}`);
      setElapsedTime(0);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      const nextProblem = problems[currentIndex + 1];
      setSelectedProblemId(nextProblem.id);
      router.push(`/problems/${nextProblem.id}`);
      setElapsedTime(0);
    }
  };

  useEffect(() => {
    if (problemId) {
      setSelectedProblemId(problemId);
      setElapsedTime(0);
      setIsTimerRunning(true);
    }
  }, [problemId]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark")
          ? "dark"
          : "light"
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background">
            <header className="border-b border-border px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/problems")}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Code2 className="h-6 w-6 text-primary" />
             <h1 className="text-lg sm:text-xl font-bold text-foreground hidden sm:block">
            CodeMaster
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted">
            <Timer className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-mono text-foreground">
              {formatTime(elapsedTime)}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setIsTimerRunning(!isTimerRunning)}
            >
              {isTimerRunning ? (
                <Pause className="h-3 w-3" />
              ) : (
                <Play className="h-3 w-3" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={!hasPrevious}
              className="h-8"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Prev</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={!hasNext}
              className="h-8"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <ThemeToggle />
        </div>
      </header>

      {isMobile ? (
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("problem")}
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "problem"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              Problem
            </button>
            <button
              onClick={() => setActiveTab("editor")}
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "editor"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              Editor
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "chat"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              Chat
            </button>
          </div>

          <div className="flex-1 min-h-0">
            {activeTab === "problem" && (
              <ProblemPanel
                problems={problems}
                selectedProblem={selectedProblem}
                onProblemChange={setSelectedProblemId}
              />
            )}
            {activeTab === "editor" && (
              <EditorPanel problem={selectedProblem} theme={theme} />
            )}
            {activeTab === "chat" && <ChatPanel />}
          </div>
        </div>
      ) : (
        <div className="flex-1 min-h-0">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={25} minSize={20}>
              <ProblemPanel
                problems={problems}
                selectedProblem={selectedProblem}
                onProblemChange={setSelectedProblemId}
              />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={50} minSize={30}>
              <EditorPanel problem={selectedProblem} theme={theme} />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={25} minSize={20}>
              <ChatPanel />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      )}
    </div>
  );
}