export const JavaScriptWrapper = (
  userCode: string,
  functionName: string,
  testCases: Array<{ input: any[]; expected: any }>
) => {
  return `
${userCode}

const testCases = ${JSON.stringify(testCases)};

for (let i = 0; i < testCases.length; i++) {
  const { input, expected } = testCases[i];
  try {
    const result = ${functionName}(...input);
    console.log("Output:", result, "| Expected:", expected);
  } catch (err) {
    console.error("Error in test case", i + 1, ":", err);
  }
}
`;
};


export const PythonWrapper = (
  userCode: string,
  functionName: string,
  testCases: Array<{ input: any[]; expected: any }>
) => {
  const testCode = testCases
    .map((tc, i) => {
      const args = tc.input.map((inp) => JSON.stringify(inp)).join(", ");
      return `
# Test ${i + 1}
try:
    result = ${functionName}(${args})
    print("Test ${i + 1}:", result, "| Expected:", ${JSON.stringify(tc.expected)})
except Exception as e:
    print("Error in Test ${i + 1}:", e)
`;
    })
    .join("\n");

  return `
${userCode}

if __name__ == "__main__":
${testCode
  .split("\n")
  .map((line) => "    " + line)
  .join("\n")}
`;
};


export const JavaWrapper = (
  userCode: string,
  functionName: string,
  testCases: Array<{ input: any[]; expected: any }>
) => {
  const finalUserCode = userCode
    .replace(/^\s*class\s+Solution\s*{\s*\n?/, "") // removes the class declaration line
    .replace(/}\s*$/, ""); // removes the last closing brace

  const testCode = testCases
    .map(
      (tc, i) => `
        try {
            Object result = new Solution().${functionName}(${tc.input
        .map((v) =>
          typeof v === "string"
            ? `"${v}"`
            : Array.isArray(v)
            ? "new int[]{" + v.join(",") + "}"
            : v
        )
        .join(", ")});
            if (result instanceof int[]) {
                System.out.println("Test ${
                  i + 1
                }: " + java.util.Arrays.toString((int[])result) + " | Expected: ${
        tc.expected
      }");
            } else {
                System.out.println("Test ${i + 1}: " + result + " | Expected: ${
        tc.expected
      }");
            }
        } catch (Exception e) {
            System.out.println("Error in Test ${i + 1}: " + e);
        }
    `
    )
    .join("\n");

  return `
import java.util.*;
import java.io.*;
import java.math.*;
import java.util.stream.*;

public class Solution {
    ${finalUserCode}

    public static void main(String[] args) {
        ${testCode}
    }
}
`;
};


export const CppWrapper = (
  userCode: string,
  functionName: string,
  testCases: Array<{ input: any[]; expected: any }>
) => {
  const finalUserCode = userCode
    .replace(/class\s+Solution\s*{\s*public:\s*/m, "") // remove the start
    .replace(/};?\s*$/m, ""); // remove last } or };
  const testCode = testCases
    .map((tc, i) => {
      const inputVars = tc.input
        .map((v, idx) => {
          if (Array.isArray(v)) {
            return `vector<int> arg${idx}_${i} = {${v.join(",")}};`;
          } else if (typeof v === "string") {
            return `string arg${idx}_${i} = "${v}";`;
          } else {
            return `auto arg${idx}_${i} = ${v};`;
          }
        })
        .join("\n    ");

      const args = tc.input.map((_, idx) => `arg${idx}_${i}`).join(", ");

      return `
    // Test ${i + 1}
    ${inputVars}
    try {
        auto result = obj.${functionName}(${args});
        printResult(result, ${i + 1}, "${tc.expected}");
    } catch (exception& e) {
        cout << "Error in Test ${i + 1}: " << e.what() << endl;
    } catch (...) {
        cout << "Unknown error in Test ${i + 1}" << endl;
    }`;
    })
    .join("\n");

  return `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
${userCode}
};

// --- Helper functions ---
template <typename T>
void printResult(const T& result, int testNum, const string& expected) {
    cout << "Test " << testNum << ": " << result
         << " | Expected: " << expected << endl;
}

template <typename T>
void printResult(const vector<T>& result, int testNum, const string& expected) {
    cout << "Test " << testNum << ": [";
    for (size_t i = 0; i < result.size(); ++i) {
        cout << result[i];
        if (i + 1 < result.size()) cout << ",";
    }
    cout << "] | Expected: " << expected << endl;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    Solution obj;
${testCode}

    return 0;
}
`;
};



