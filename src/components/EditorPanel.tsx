"use client";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Problem } from "@/types/problem";
import { problems } from "@/data/problems";
import {
  CppWrapper,
  JavaScriptWrapper,
  JavaWrapper,
  PythonWrapper,
} from "@/lib/wrappers";

interface EditorPanelProps {
  problem: Problem;
  theme: string;
}

interface ExecutionResult {
  output?: string;
  error?: string;
  executionTime?: number;
}

const languageMap: Record<string, string> = {
  javascript: "javascript",
  typescript: "typescript",
  python: "python",
  java: "java",
  // cpp: "cpp",
  // c: "c",
  // csharp: "csharp",
  // go: "go",
  // rust: "rust",
  // ruby: "ruby",
  // php: "php",
  // swift: "swift",
  // kotlin: "kotlin",
};

const wrapperMap: Record<string, Function> = {
  javascript: JavaScriptWrapper,
  python: PythonWrapper,
  java: JavaWrapper,
  cpp: CppWrapper,
};

export function EditorPanel({ problem, theme }: EditorPanelProps) {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(problem.starterCode[language] || "");
  const [output, setOutput] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedCode = localStorage.getItem(`code-${problem.id}-${language}`);
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(problem.starterCode[language] || "");
    }
  }, [problem.id, language, problem.starterCode]);

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
      localStorage.setItem(`code-${problem.id}-${language}`, value);
    }
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const handleReset = () => {
    setCode(problem.starterCode[language] || "");
    localStorage.removeItem(`code-${problem.id}-${language}`);
    toast({
      title: "Code Reset",
      description: "Code has been reset to starter template.",
    });
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput(null);
    const pids = ["two-sum", "move-zeroes"];
    const selectedProblem = problems.find((p) => p.id === pids[0]) as Problem;

    try {
      // console.log("Executing code:", code);
      const wrapperFunction = wrapperMap[language];

      if (!wrapperFunction) {
        throw new Error(`No wrapper found for language: ${language}`);
      }

      const fullCode = wrapperFunction(
        code,
        selectedProblem.function.name,
        selectedProblem.testCases!
      );
      
      console.log("Full code sent for execution:", fullCode);
      const startTime = performance.now();
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: languageMap[language],
          version: "*",
          files: [
            {
              content: fullCode,
            },
          ],
        }),
      });

      const result = await response.json();
      console.log("Execution result:", result);
      const endTime = performance.now();
      const executionTime = Math.round(endTime - startTime);

      if (result.run) {
        setOutput({
          output: result.run.stdout || result.run.output,
          error: result.run.stderr,
          executionTime,
        });

        if (result.run.stderr) {
          toast({
            title: "Execution Error",
            description: "Check the output panel for details.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Code Executed",
            description: `Completed in ${executionTime}ms`,
          });
        }
      }
    } catch (error) {
      setOutput({
        error: "Failed to execute code. Please try again.",
      });
      toast({
        title: "Execution Failed",
        description: "Could not connect to execution service.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Submitted",
      description: "Your solution has been submitted!",
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-3 border-b border-border gap-2">
        <Select value={language} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="javascript">JavaScript</SelectItem>
            {/* <SelectItem value="typescript">TypeScript</SelectItem> */}
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="cpp">C++</SelectItem>
            {/* <SelectItem value="c">C</SelectItem>
            <SelectItem value="csharp">C#</SelectItem>
            <SelectItem value="go">Go</SelectItem>
            <SelectItem value="rust">Rust</SelectItem>
            <SelectItem value="ruby">Ruby</SelectItem>
            <SelectItem value="php">PHP</SelectItem>
            <SelectItem value="swift">Swift</SelectItem>
            <SelectItem value="kotlin">Kotlin</SelectItem> */}
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRun}
            disabled={isRunning}
            className="gap-2"
          >
            <Play className="h-4 w-4" />
            {isRunning ? "Running..." : "Run"}
          </Button>
          <Button size="sm" onClick={handleSubmit} className="gap-2">
            <Send className="h-4 w-4" />
            Submit
          </Button>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={handleCodeChange}
          theme={theme === "dark" ? "vs-dark" : "light"}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
          }}
        />
      </div>

      {output && (
        <Card className="m-3 p-3 bg-card max-h-[200px] overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-foreground">Output</h3>
            {output.executionTime && (
              <span className="text-xs text-muted-foreground">
                {output.executionTime}ms
              </span>
            )}
          </div>
          <pre className="text-xs whitespace-pre-wrap font-mono">
            {output.error ? (
              <span className="text-error">{output.error}</span>
            ) : (
              <span className="text-foreground">{output.output}</span>
            )}
          </pre>
        </Card>
      )}
    </div>
  );
}

// "use client"

// import { useState, useEffect } from "react";
// import Editor from "@monaco-editor/react";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card } from "@/components/ui/card";
// import { Play, RotateCcw, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { Problem } from "@/types/problem";
// import { problems } from "@/data/problems";
// import {
//   PythonWrapper,
//   JavaScriptWrapper,
//   TypeScriptWrapper,
//   JavaWrapper,
//   CppWrapper,
//   // CWrapper,
//   // CSharpWrapper,
//   // GoWrapper,
//   // RustWrapper,
//   // RubyWrapper,
//   // PhpWrapper,
//   // SwiftWrapper,
//   // KotlinWrapper,
// } from "@/lib/codeLangWrappersPre";

// interface EditorPanelProps {
//   problem: Problem;
//   theme: string;
// }

// interface ExecutionResult {
//   output?: string;
//   error?: string;
//   executionTime?: number;
// }

// const languageMap: Record<string, string> = {
//   javascript: "javascript",
//   typescript: "typescript",
//   python: "python",
//   java: "java",
//   cpp: "cpp",
//   // c: "c",
//   // csharp: "csharp",
//   // go: "go",
//   // rust: "rust",
//   // ruby: "ruby",
//   // php: "php",
//   // swift: "swift",
//   // kotlin: "kotlin",
// };

// // Map languages to their wrapper functions
// const wrapperMap: Record<string, Function> = {
//   javascript: JavaScriptWrapper,
//   typescript: TypeScriptWrapper,
//   python: PythonWrapper,
//   java: JavaWrapper,
//   cpp: CppWrapper,
//   // c: CWrapper,
//   // csharp: CSharpWrapper,
//   // go: GoWrapper,
//   // rust: RustWrapper,
//   // ruby: RubyWrapper,
//   // php: PhpWrapper,
//   // swift: SwiftWrapper,
//   // kotlin: KotlinWrapper,
// };

// export function EditorPanel({ problem, theme }: EditorPanelProps) {
//   const [language, setLanguage] = useState("javascript");
//   const [code, setCode] = useState(problem.starterCode[language] || "");
//   const [output, setOutput] = useState<ExecutionResult | null>(null);
//   const [isRunning, setIsRunning] = useState(false);
//   const { toast } = useToast();

//   useEffect(() => {
//     const savedCode = localStorage.getItem(
//       `code-${problem.id}-${language}`
//     );
//     if (savedCode) {
//       setCode(savedCode);
//     } else {
//       setCode(problem.starterCode[language] || "");
//     }
//   }, [problem.id, language, problem.starterCode]);

//   const handleCodeChange = (value: string | undefined) => {
//     if (value !== undefined) {
//       setCode(value);
//       localStorage.setItem(`code-${problem.id}-${language}`, value);
//     }
//   };

//   const handleLanguageChange = (newLanguage: string) => {
//     setLanguage(newLanguage);
//   };

//   const handleReset = () => {
//     setCode(problem.starterCode[language] || "");
//     localStorage.removeItem(`code-${problem.id}-${language}`);
//     toast({
//       title: "Code Reset",
//       description: "Code has been reset to starter template.",
//     });
//   };

//   const handleRun = async () => {
//     setIsRunning(true);
//     setOutput(null);

//     try {
//       // Get the appropriate wrapper function for the selected language
//       const wrapperFunction = wrapperMap[language];

//       if (!wrapperFunction) {
//         throw new Error(`No wrapper found for language: ${language}`);
//       }

//       // Use the selected language's wrapper
//       const fullCode = wrapperFunction(
//         code,
//         problem.function.name,
//         problem.function.params,
//         problem.testCases!
//       );

//       console.log("Full code sent for execution:", fullCode);

//       const startTime = performance.now();
//       const response = await fetch(
//         "https://emkc.org/api/v2/piston/execute",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             language: languageMap[language],
//             version: "*",
//             files: [
//               {
//                 content: fullCode,
//               },
//             ],
//           }),
//         }
//       );

//       const result = await response.json();
//       console.log("Execution result:", result);
//       const endTime = performance.now();
//       const executionTime = Math.round(endTime - startTime);

//       if (result.run) {
//         setOutput({
//           output: result.run.stdout || result.run.output,
//           error: result.run.stderr,
//           executionTime,
//         });

//         if (result.run.stderr) {
//           toast({
//             title: "Execution Error",
//             description: "Check the output panel for details.",
//             variant: "destructive",
//           });
//         } else {
//           toast({
//             title: "Code Executed",
//             description: `Completed in ${executionTime}ms`,
//           });
//         }
//       }
//     } catch (error) {
//       setOutput({
//         error: `Failed to execute code: ${error instanceof Error ? error.message : 'Please try again.'}`,
//       });
//       toast({
//         title: "Execution Failed",
//         description: "Could not connect to execution service.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsRunning(false);
//     }
//   };

//   const handleSubmit = () => {
//     toast({
//       title: "Submitted",
//       description: "Your solution has been submitted!",
//     });
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex items-center justify-between p-3 border-b border-border gap-2">
//         <Select value={language} onValueChange={handleLanguageChange}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select language" />
//           </SelectTrigger>
//           <SelectContent className="bg-popover">
//             <SelectItem value="javascript">JavaScript</SelectItem>
//             <SelectItem value="typescript">TypeScript</SelectItem>
//             <SelectItem value="python">Python</SelectItem>
//             <SelectItem value="java">Java</SelectItem>
//             <SelectItem value="cpp">C++</SelectItem>
//             <SelectItem value="c">C</SelectItem>
//             <SelectItem value="csharp">C#</SelectItem>
//             <SelectItem value="go">Go</SelectItem>
//             <SelectItem value="rust">Rust</SelectItem>
//             <SelectItem value="ruby">Ruby</SelectItem>
//             <SelectItem value="php">PHP</SelectItem>
//             <SelectItem value="swift">Swift</SelectItem>
//             <SelectItem value="kotlin">Kotlin</SelectItem>
//           </SelectContent>
//         </Select>

//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={handleReset}
//             className="gap-2"
//           >
//             <RotateCcw className="h-4 w-4" />
//             Reset
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={handleRun}
//             disabled={isRunning}
//             className="gap-2"
//           >
//             <Play className="h-4 w-4" />
//             {isRunning ? "Running..." : "Run"}
//           </Button>
//           <Button size="sm" onClick={handleSubmit} className="gap-2">
//             <Send className="h-4 w-4" />
//             Submit
//           </Button>
//         </div>
//       </div>

//       <div className="flex-1 min-h-0">
//         <Editor
//           height="100%"
//           language={language}
//           value={code}
//           onChange={handleCodeChange}
//           theme={theme === "dark" ? "vs-dark" : "light"}
//           options={{
//             minimap: { enabled: false },
//             fontSize: 14,
//             lineNumbers: "on",
//             scrollBeyondLastLine: false,
//             automaticLayout: true,
//             tabSize: 2,
//           }}
//         />
//       </div>

//       {output && (
//         <Card className="m-3 p-3 bg-card max-h-[200px] overflow-y-auto">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-sm font-semibold text-foreground">
//               Output
//             </h3>
//             {output.executionTime && (
//               <span className="text-xs text-muted-foreground">
//                 {output.executionTime}ms
//               </span>
//             )}
//           </div>
//           <pre className="text-xs whitespace-pre-wrap font-mono">
//             {output.error ? (
//               <span className="text-error">{output.error}</span>
//             ) : (
//               <span className="text-foreground">{output.output}</span>
//             )}
//           </pre>
//         </Card>
//       )}
//     </div>
//   );
// }
