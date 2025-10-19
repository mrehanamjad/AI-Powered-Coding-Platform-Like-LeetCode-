export function JSWrapper(code: string, functionName: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 2).replace(/\n/g, '\n    ');

    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE (Standard Node.js Modules) ---
// Note: Piston/Node.js environment automatically provides access to many modules.
// We explicitly import common tools here for user clarity and immediate access.
const assert = require('assert');
const crypto = require('crypto'); // Commonly used for hashing, uniqueness, etc.
const path = require('path');
// Add other safe, widely used modules here (e.g., axios for network, but only if allowed)

// --- BEGIN USER CODE ---
${code}
// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---
const TESTS = ${testCasesString};
let passed = true;

/**
 * Robust deep comparison function for arrays, objects, and nested structures.
 * Handles float precision and unordered arrays.
 * @param {any} a - Actual result
 * @param {any} b - Expected result
 * @returns {boolean} True if they are considered equal
 */
function deepEqual(a, b) {
    // 1. Direct equality check for primitives (null, undefined, string, number, boolean)
    if (a === b) {
        return true;
    }

    // 2. Handle common float/integer precision issues
    if (typeof a === 'number' && typeof b === 'number') {
        // Use a small epsilon (1e-9) for comparison
        return Math.abs(a - b) < 1e-9;
    }

    // 3. Handle arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        
        // For unordered comparison (typical LeetCode result), we sort based on JSON string.
        // If order IS required, remove the sort and use a simple index loop.
        try {
            const sortedA = [...a].sort((x, y) => JSON.stringify(x).localeCompare(JSON.stringify(y)));
            const sortedB = [...b].sort((x, y) => JSON.stringify(x).localeCompare(JSON.stringify(y)));
            
            for (let i = 0; i < sortedA.length; i++) {
                if (!deepEqual(sortedA[i], sortedB[i])) {
                    return false;
                }
            }
            return true;
        } catch (e) {
            // Fallback for non-sortable/complex array elements
            return JSON.stringify(a) === JSON.stringify(b);
        }
    }

    // 4. Handle objects (recursive deep check)
    if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) return false;

        for (const key of keysA) {
            if (!Object.prototype.hasOwnProperty.call(b, key) || !deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }

    // Default to strict equality for unhandled cases
    return false;
}

function runTests() {
    // Get the user's function from the global scope
    const userFunction = globalThis.${functionName} || ${functionName};

    if (typeof userFunction !== 'function') {
        console.log(\`[VERDICT] Runtime Error: Function \${'${functionName}'} is not defined or is not a function.\`);
        return;
    }

    TESTS.forEach((test, index) => {
        let actualResult;
        // Clone input to prevent user code from accidentally modifying the original test case data
        const input = JSON.parse(JSON.stringify(test.input || [])); 
        const expected = test.expected;
        
        try {
            // Call the user's function using the spread operator for arguments
            actualResult = userFunction(...input);
            
            if (deepEqual(actualResult, expected)) {
                console.log(\`[PASS] Test \${index + 1}\`);
            } else {
                // Use JSON.stringify for clean display of complex data
                console.error(\`[FAIL] Test \${index + 1}: Expected \${JSON.stringify(expected)}, Got \${JSON.stringify(actualResult)}\`);
                passed = false;
            }

        } catch (error) {
            // Catches and reports a Runtime Error (RE)
            console.error(\`[ERROR] Test \${index + 1} failed with Runtime Error: \${error.name || 'Error'}: \${error.message}\`);
            passed = false;
        }
    });

    if (passed) {
        console.log("[VERDICT] Accepted");
    } else {
        console.log("[VERDICT] Wrong Answer or Runtime Error");
    }
}

// Execute the tests
runTests();
// --- END TEST HARNESS ---
`;
}

export function TSWrapper(code: string, functionName: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 2).replace(/\n/g, '\n    ');

    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
import * as assert from 'assert';
// Common utility imports available in Node.js
import * as crypto from 'crypto'; 
import { URLSearchParams } from 'url';
// Standard type imports
type AnyArray = any[];
type TestCase = { input: AnyArray, expected: any };


// --- BEGIN USER CODE ---
${code}
// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---
const TESTS: TestCase[] = ${testCasesString};
let passed: boolean = true;

/**
 * Robust deep comparison function for arrays, objects, and nested structures.
 * Handles float precision and unordered arrays.
 * @param a - Actual result
 * @param b - Expected result
 * @returns True if they are considered equal
 */
function deepEqual(a: any, b: any): boolean {
    // 1. Direct equality check for primitives
    if (a === b) {
        return true;
    }

    // 2. Handle common float/integer precision issues
    if (typeof a === 'number' && typeof b === 'number') {
        // Use a small epsilon (1e-9) for comparison
        return Math.abs(a - b) < 1e-9;
    }

    // 3. Handle arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        
        // Unordered comparison: Sort and then deep check (common in LeetCode)
        try {
            // Sorting based on JSON string is a common workaround for deeply nested comparison
            const sortedA = [...a].sort((x, y) => JSON.stringify(x).localeCompare(JSON.stringify(y)));
            const sortedB = [...b].sort((x, y) => JSON.stringify(x).localeCompare(JSON.stringify(y)));
            
            for (let i = 0; i < sortedA.length; i++) {
                if (!deepEqual(sortedA[i], sortedB[i])) {
                    return false;
                }
            }
            return true;
        } catch (e) {
            // Fallback for non-sortable/complex array elements
            return JSON.stringify(a) === JSON.stringify(b);
        }
    }

    // 4. Handle objects (recursive deep check)
    if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) return false;

        for (const key of keysA) {
            if (!Object.prototype.hasOwnProperty.call(b, key) || !deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }

    return false;
}

function runTests() {
    // Access the user's function from the global object (Node.js global or 'this' in a module)
    // The user's function is expected to be exported or globally accessible after compilation.
    const userFunction: Function | undefined = (globalThis as any).${functionName};

    if (typeof userFunction !== 'function') {
        console.log(\`[VERDICT] Runtime Error: Function \${'${functionName}'} is not defined or is not a function.\`);
        return;
    }

    TESTS.forEach((test, index) => {
        let actualResult: any;
        // Deep clone input to prevent user code from modifying the original test case data
        const input: AnyArray = JSON.parse(JSON.stringify(test.input || [])); 
        const expected: any = test.expected;
        
        try {
            // Call the user's function using the spread operator for arguments
            actualResult = userFunction(...input);
            
            if (deepEqual(actualResult, expected)) {
                console.log(\`[PASS] Test \${index + 1}\`);
            } else {
                console.error(\`[FAIL] Test \${index + 1}: Expected \${JSON.stringify(expected)}, Got \${JSON.stringify(actualResult)}\`);
                passed = false;
            }

        } catch (error: any) {
            // Catches and reports a Runtime Error (RE)
            console.error(\`[ERROR] Test \${index + 1} failed with Runtime Error: \${error.name || 'Error'}: \${error.message}\`);
            passed = false;
        }
    });

    if (passed) {
        console.log("[VERDICT] Accepted");
    } else {
        console.log("[VERDICT] Wrong Answer or Runtime Error");
    }
}

// Execute the tests
runTests();
// --- END TEST HARNESS ---
`;
}

export function PYWrapper(code: string, functionName: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 4).replace(/\n/g, '\n    ');
    
    return `
# --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE (Whitelisted CP Modules) ---
import collections
import math
import itertools
import functools
import heapq
import bisect
import random
import re
import decimal # For high precision arithmetic
from typing import List, Dict, Set, Tuple, Any # For type hinting (if user uses it)

# --- BEGIN USER CODE ---
${code}
# --- END USER CODE ---

# --- BEGIN TEST HARNESS ---

TESTS = ${testCasesString}

def deep_equal(a: Any, b: Any) -> bool:
    # Handle the most basic edge case: direct equality
    if a == b:
        return True

    # Handle lists/arrays (assuming unordered output is permitted)
    if isinstance(a, list) and isinstance(b, list):
        try:
            # Check if contents are identical using Counter (handles duplicates, ignores order)
            return collections.Counter(a) == collections.Counter(b)
        except TypeError:
            # Fallback for lists containing unhashable objects (like lists of lists/dicts)
            # This requires sorting, which may fail if elements are not comparable.
            try:
                return sorted(a, key=repr) == sorted(b, key=repr)
            except TypeError:
                # Last resort: simple repr comparison
                return repr(a) == repr(b)
                

    # Handle dictionaries/objects
    if isinstance(a, dict) and isinstance(b, dict):
        if set(a.keys()) != set(b.keys()):
            return False
        for key in a:
            if not deep_equal(a[key], b[key]):
                return False
        return True

    # Handle floats and mixed int/float comparison for precision
    if isinstance(a, (int, float, decimal.Decimal)) and isinstance(b, (int, float, decimal.Decimal)):
        # Use math.isclose() for robust floating-point comparison
        return math.isclose(float(a), float(b), rel_tol=1e-9, abs_tol=1e-9)

    return False

def run_tests():
    passed = True
    user_func = globals().get('${functionName}')
    
    if not user_func:
        print("[VERDICT] Runtime Error: Function '${functionName}' not found.")
        return

    for index, test in enumerate(TESTS):
        input_args = test.get("input", [])
        expected = test.get("expected")
        
        try:
            # Use tuple for immutable arguments to prevent user code from modifying the test input
            actual = user_func(*tuple(input_args))
            
            if deep_equal(actual, expected):
                print(f"[PASS] Test {index + 1}")
            else:
                print(f"[FAIL] Test {index + 1}: Expected {repr(expected)}, Got {repr(actual)}")
                passed = False
                
        except Exception as e:
            print(f"[ERROR] Test {index + 1} failed with Runtime Error: {e.__class__.__name__}: {e}")
            passed = False
            
    if passed:
        print("[VERDICT] Accepted")
    else:
        print("[VERDICT] Wrong Answer or Runtime Error")

if __name__ == "__main__":
    run_tests()

# --- END TEST HARNESS ---
`;
}

export function JavaWrapper(code: string, functionName: string, className: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 2).replace(/\n/g, '\n    ');

    // Determine the user's function signature return type (assuming int for a LeetCode-like scenario)
    // NOTE: In a real platform, you must dynamically infer or explicitly pass the user's function signature.
    const assumedReturnType = 'int[]'; 
    
    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE (Whitelisted Standard Java Modules) ---
import java.util.*;
import java.lang.Math;
import java.io.*;
import java.text.*;

// The main class that will be compiled and executed
public class Solution {

    // --- BEGIN USER CODE ---
    // The user's submitted class definition (usually with their function inside)
    // The class name is provided by the 'className' variable (e.g., 'UserCode')
    ${code}
    // --- END USER CODE ---

    // Test Harness logic
    private static final String TESTS_JSON = "${testCasesString.replace(/"/g, '\\"')}";

    // Simple deep equality checker for common types
    private static boolean deepEqual(Object a, Object b) {
        if (a == b) return true;
        if (a == null || b == null) return false;

        // Handle Arrays (Crucial for return values like int[], String[])
        if (a.getClass().isArray() && b.getClass().isArray()) {
            if (a.getClass().getComponentType().isPrimitive() || b.getClass().getComponentType().isPrimitive()) {
                // Use Arrays.equals for primitive arrays (int[], long[], etc.)
                if (a instanceof int[] && b instanceof int[]) return Arrays.equals((int[])a, (int[])b);
                if (a instanceof long[] && b instanceof long[]) return Arrays.equals((long[])a, (long[])b);
                // NOTE: Add checks for all primitive array types (char[], float[], etc.)
                return false; // Fallback for unmatched primitive types
            }
            // Use Arrays.deepEquals for non-primitive arrays (Object[], Integer[])
            return Arrays.deepEquals(new Object[] {a}, new Object[] {b});
        }
        
        // Handle common collections (assuming unordered output for List, Set)
        if (a instanceof List && b instanceof List) {
            // Unordered check: convert to strings and compare size/content
            if (((List) a).size() != ((List) b).size()) return false;
            return ((List) a).containsAll((List) b);
        }

        // Handle Floating Point (using epsilon for tolerance)
        if (a instanceof Number && b instanceof Number) {
            double da = ((Number) a).doubleValue();
            double db = ((Number) b).doubleValue();
            return Math.abs(da - db) < 1e-9;
        }

        // Final Object check (e.g., String, Boxed Primitives)
        return a.equals(b);
    }
    
    // Helper to print array contents for failure messages
    private static String arrayToString(Object array) {
        if (array == null) return "null";
        if (array instanceof int[]) return Arrays.toString((int[]) array);
        if (array instanceof long[]) return Arrays.toString((long[]) array);
        if (array instanceof Object[]) return Arrays.deepToString((Object[]) array);
        return array.toString();
    }


    public static void main(String[] args) {
        boolean passed = true;
        
        try {
            // Use Gson or a simple parser to read the test cases JSON (or manually parse simple cases)
            // For simplicity, we assume the testCases JSON format is simple enough to process manually, 
            // but in a real system, you'd use a JSON library (e.g., Gson/Jackson) to parse TESTS_JSON.
            
            // Example of a minimal test case structure (must be hard-coded for the specific problem)
            // For a problem: public int[] twoSum(int[] nums, int target)
            int[][] testInputs_nums = {{2, 7, 11, 15}, {3, 2, 4}};
            int[] testInputs_target = {9, 6};
            int[][] expectedOutputs = {{0, 1}, {1, 2}};

            // Instantiate the user's class containing the target function (if not static)
            // NOTE: This assumes the user's class is named 'UserCode'
            ${className} userSolution = new ${className}();

            for (int i = 0; i < testInputs_nums.length; i++) {
                int[] nums = testInputs_nums[i];
                int target = testInputs_target[i];
                int[] expected = expectedOutputs[i];
                
                // --- PREVENT INPUT MUTATION ---
                // Deep copy arrays before passing to the user's function
                int[] inputCopy = Arrays.copyOf(nums, nums.length);

                try {
                    // CALL USER FUNCTION: Assuming 'twoSum' signature is used here
                    ${assumedReturnType} actual = userSolution.${functionName}(inputCopy, target);

                    if (deepEqual(actual, expected)) {
                        System.out.println("[PASS] Test " + (i + 1));
                    } else {
                        System.out.println("[FAIL] Test " + (i + 1) + ": Expected " + arrayToString(expected) + ", Got " + arrayToString(actual));
                        passed = false;
                    }
                } catch (Exception e) {
                    // Catches and reports a Runtime Error (RE)
                    System.err.println("[ERROR] Test " + (i + 1) + " failed with Runtime Error: " + e.getClass().getName() + ": " + e.getMessage());
                    passed = false;
                }
            }

        } catch (Exception e) {
            // Catches any error during test setup (should not happen in production)
            System.err.println("[ERROR] Test Setup Failed: " + e.getMessage());
            passed = false;
        }

        if (passed) {
            System.out.println("[VERDICT] Accepted");
        } else {
            System.out.println("[VERDICT] Wrong Answer or Runtime Error");
        }
    }
}
// --- END TEST HARNESS ---
`;
}

export function CppWrapper(code: string, functionName: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 2).replace(/\n/g, '\n    ');

    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <cmath>
#include <map>
#include <sstream>
#include <iomanip>
#include <stdexcept>

using namespace std; // <-- Includes all standard library components

// Alias the user's function/class name
// We assume the user submits a class named 'Solution' with the function inside.
class Solution {
    // --- BEGIN USER CODE ---
    public:
    ${code}
    // --- END USER CODE ---
};

// --- BEGIN TEST HARNESS ---

// IMPORTANT: Replace this hardcoded structure with your JSON parser's output for production.
// Example for a function like: vector<int> twoSum(vector<int>& nums, int target)
struct TestCase {
    vector<int> nums;
    int target;
    vector<int> expected;
};

// NOTE: This must be generated dynamically from your 'testCases' array!
vector<TestCase> get_tests() {
    return {
        // Example Test 1: (Generated from your testCases input)
        {{2, 7, 11, 15}, 9, {0, 1}},
        // Example Test 2: (Generated from your testCases input)
        {{3, 2, 4}, 6, {1, 2}},
        // Example Test 3: (Generated from your testCases input)
        {{3, 3}, 6, {0, 1}}
    };
}

// Helper to convert C++ containers to string for error output
template <typename T>
string container_to_string(const T& container) {
    stringstream ss;
    ss << "[";
    bool first = true;
    for (const auto& item : container) {
        if (!first) ss << ", ";
        if constexpr (is_convertible_v<decltype(item), string>) {
            ss << "\\"" << item << "\\"";
        } else {
            ss << item;
        }
        first = false;
    }
    ss << "]";
    return ss.str();
}

// Robust deep equality checker for vector<int> (assuming unordered output)
bool deep_equal(const vector<int>& a, const vector<int>& b) {
    if (a.size() != b.size()) return false;

    // Unordered comparison (for problems like 'Two Sum' indices)
    vector<int> sorted_a = a;
    vector<int> sorted_b = b;
    sort(sorted_a.begin(), sorted_a.end());
    sort(sorted_b.begin(), sorted_b.end());

    return sorted_a == sorted_b;
}

// Overload for floating-point values
template <typename T>
bool deep_equal(const T& a, const T& b) {
    if constexpr (is_floating_point_v<T>) {
        return abs(a - b) < 1e-9; // 1e-9 tolerance for floats
    }
    return a == b;
}


void run_tests() {
    bool passed = true;
    Solution userSolution;
    vector<TestCase> tests = get_tests(); 

    for (size_t i = 0; i < tests.size(); ++i) {
        const auto& test = tests[i];
        
        // --- PREVENT INPUT MUTATION ---
        // Create copies of mutable input containers before passing
        vector<int> nums_copy = test.nums;
        int target_copy = test.target; 

        try {
            // CALL USER FUNCTION: Assume function is member of 'Solution' class
            // Signature assumed: vector<int> twoSum(vector<int>& nums, int target)
            vector<int> actual = userSolution.${functionName}(nums_copy, target_copy); 

            if (deep_equal(actual, test.expected)) {
                cout << "[PASS] Test " << (i + 1) << endl;
            } else {
                cerr << "[FAIL] Test " << (i + 1) 
                          << ": Expected " << container_to_string(test.expected) 
                          << ", Got " << container_to_string(actual) << endl;
                passed = false;
            }
        } catch (const exception& e) {
            // Catches standard exceptions (e.g., out_of_range)
            cerr << "[ERROR] Test " << (i + 1) << " failed with Runtime Error: " << e.what() << endl;
            passed = false;
        } catch (...) {
            // Catches all other exceptions (including raw throws)
            cerr << "[ERROR] Test " << (i + 1) << " failed with unknown Runtime Error." << endl;
            passed = false;
        }
    }

    if (passed) {
        cout << "[VERDICT] Accepted" << endl;
    } else {
        cout << "[VERDICT] Wrong Answer or Runtime Error" << endl;
    }
}

int main() {
    // Set fixed precision for floating point output
    cout << fixed << setprecision(9);
    
    run_tests();
    return 0;
}
// --- END TEST HARNESS ---
`;
}


export function CWrapper(code: string, functionName: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 2).replace(/\n/g, '\n    ');
    
    // NOTE: This assumes the user's function signature for a problem like "Two Sum" is:
    // int* twoSum(int* nums, int numsSize, int target, int* returnSize)
    const assumedSignature = `int* ${functionName}(int* nums, int numsSize, int target, int* returnSize)`;

    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

// --- BEGIN USER CODE ---
// Function prototype to make the user's function available to the harness
${assumedSignature};

${code}
// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---

// IMPORTANT: Test data structure must be manually generated from the JSON array.
// This structure is hard-coded for a specific LeetCode-style problem (e.g., Two Sum: returns int*).
typedef struct {
    int* nums;
    int numsSize;
    int target;
    int* expected;
    int expectedSize;
} TestCase;

// NOTE: This must be generated dynamically from your 'testCases' array!
TestCase* get_tests(int* count) {
    // Dynamically allocate memory for all test cases
    *count = 3;
    TestCase* tests = (TestCase*)malloc(*count * sizeof(TestCase));

    // Test Case 1: [2, 7, 11, 15], target 9 -> [0, 1]
    tests[0].nums = (int[]){2, 7, 11, 15};
    tests[0].numsSize = 4;
    tests[0].target = 9;
    tests[0].expected = (int[]){0, 1};
    tests[0].expectedSize = 2;
    
    // Test Case 2: [3, 2, 4], target 6 -> [1, 2]
    tests[1].nums = (int[]){3, 2, 4};
    tests[1].numsSize = 3;
    tests[1].target = 6;
    tests[1].expected = (int[]){1, 2};
    tests[1].expectedSize = 2;
    
    // Test Case 3: [3, 3], target 6 -> [0, 1]
    tests[2].nums = (int[]){3, 3};
    tests[2].numsSize = 2;
    tests[2].target = 6;
    tests[2].expected = (int[]){0, 1};
    tests[2].expectedSize = 2;

    return tests;
}

// Helper to print array contents for failure messages
void print_array(int* arr, int size) {
    if (arr == NULL) {
        printf("NULL");
        return;
    }
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%d%s", arr[i], (i == size - 1) ? "" : ", ");
    }
    printf("]");
}

// Robust deep equality checker for integer arrays (assuming unordered output)
int deep_equal(int* a, int sizeA, int* b, int sizeB) {
    if (sizeA != sizeB) return 0;
    if (a == NULL && b == NULL) return 1;
    if (a == NULL || b == NULL) return 0;

    // C doesn't have easy sorting for arrays, so we must manually implement or 
    // rely on a simple memcmp/direct check if order is mandatory.
    // Assuming UNORDERED comparison (common for LeetCode results like indices):
    
    // 1. Create temporary copies to sort (to not mutate user's output)
    int *tempA = (int*)malloc(sizeA * sizeof(int));
    int *tempB = (int*)malloc(sizeB * sizeof(int));
    memcpy(tempA, a, sizeA * sizeof(int));
    memcpy(tempB, b, sizeB * sizeof(int));

    // Simple Bubble Sort for comparison - a production harness would use qsort()
    for (int i = 0; i < sizeA - 1; i++) {
        for (int j = 0; j < sizeA - i - 1; j++) {
            if (tempA[j] > tempA[j+1]) { int temp = tempA[j]; tempA[j] = tempA[j+1]; tempA[j+1] = temp; }
            if (tempB[j] > tempB[j+1]) { int temp = tempB[j]; tempB[j] = tempB[j+1]; tempB[j+1] = temp; }
        }
    }

    // 2. Compare the sorted arrays
    int result = memcmp(tempA, tempB, sizeA * sizeof(int)) == 0;
    
    free(tempA);
    free(tempB);
    return result;
}


void run_tests() {
    int testCount = 0;
    TestCase* tests = get_tests(&testCount);
    int passed = 1; // True
    
    for (int i = 0; i < testCount; i++) {
        TestCase test = tests[i];
        
        // --- PREVENT INPUT MUTATION ---
        // Create a copy of the input array before passing it to the user's function
        int* numsCopy = (int*)malloc(test.numsSize * sizeof(int));
        memcpy(numsCopy, test.nums, test.numsSize * sizeof(int));

        // Variable where the user's function will store the size of the returned array
        int actualSize = 0;
        int* actual = NULL;

        // C does not have try-catch; we rely on the sandbox to catch segfaults/crashes

        // CALL USER FUNCTION: Assumed signature
        actual = ${functionName}(numsCopy, test.numsSize, test.target, &actualSize);

        // Check for basic safety (user must free memory they allocate)
        if (actual == NULL && test.expected != NULL) {
             fprintf(stderr, "[FAIL] Test %d: Expected non-NULL result, Got NULL.\\n", i + 1);
             passed = 0;
             goto cleanup; // Use goto to jump to cleanup without calling free on NULL
        }

        // Check if the returned size matches the expected size
        if (actualSize != test.expectedSize) {
             fprintf(stderr, "[FAIL] Test %d: Expected size %d, Got size %d.\\n", i + 1, test.expectedSize, actualSize);
             passed = 0;
             goto cleanup;
        }

        if (deep_equal(actual, actualSize, test.expected, test.expectedSize)) {
            printf("[PASS] Test %d\\n", i + 1);
        } else {
            fprintf(stderr, "[FAIL] Test %d: Expected ", i + 1);
            print_array(test.expected, test.expectedSize);
            fprintf(stderr, ", Got ");
            print_array(actual, actualSize);
            fprintf(stderr, "\\n");
            passed = 0;
        }

        cleanup:
        // Crucial: The user's function is responsible for allocating memory (via malloc) 
        // for the return array, and the harness must free it.
        if (actual != NULL) {
            free(actual); 
        }
        // Free the input copy used for this test run
        free(numsCopy);
    }
    
    // Free the test case structure itself
    free(tests);

    if (passed) {
        printf("[VERDICT] Accepted\\n");
    } else {
        printf("[VERDICT] Wrong Answer or Runtime Error\\n");
    }
}

int main() {
    run_tests();
    return 0;
}
// --- END TEST HARNESS ---
`;
}

export function CSharpWrapper(code: string, functionName: string, className: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 2).replace(/\n/g, '\n    ');

    // Assumed return type for a common problem like Two Sum (adjust as needed)
    const assumedReturnType = 'int[]'; 
    
    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json; // Used for parsing test cases and object comparison
using System.Reflection; // Used for reflection (if needed)

// The user's code will define a class, typically named 'Solution'.
// --- BEGIN USER CODE ---
${code}
// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---

public class TestHarness
{
    private static readonly string TESTS_JSON = @"""${testCasesString}""";
    
    // Helper for robust deep comparison
    private static bool DeepEqual(object a, object b)
    {
        if (a == null && b == null) return true;
        if (a == null || b == null) return false;

        // 1. Handle common types with direct equality
        if (a.Equals(b)) return true;

        // 2. Handle Floating Point Numbers (using epsilon for tolerance)
        if (a is double da && b is double db)
        {
            return Math.Abs(da - db) < 1e-9;
        }
        if (a is float fa && b is float fb)
        {
            return Math.Abs(fa - fb) < 1e-9f;
        }

        // 3. Handle Collections (Lists, Arrays, etc.)
        if (a is System.Collections.IEnumerable enumerableA && b is System.Collections.IEnumerable enumerableB)
        {
            var listA = enumerableA.Cast<object>().ToList();
            var listB = enumerableB.Cast<object>().ToList();

            if (listA.Count != listB.Count) return false;
            
            // Assuming UNORDERED output for common CP problems (like array elements)
            // Sorting based on string representation for deep comparison
            try
            {
                var sortedA = listA.OrderBy(o => o.ToString()).ToList();
                var sortedB = listB.OrderBy(o => o.ToString()).ToList();

                for (int i = 0; i < sortedA.Count; i++)
                {
                    if (!DeepEqual(sortedA[i], sortedB[i])) return false;
                }
                return true;
            }
            catch 
            {
                // Fallback to JSON comparison for un-sortable complex objects
                return JsonSerializer.Serialize(listA) == JsonSerializer.Serialize(listB);
            }
        }
        
        // 4. Default to serializing and comparing for complex types (e.g., Dictionary)
        try
        {
            return JsonSerializer.Serialize(a) == JsonSerializer.Serialize(b);
        }
        catch 
        {
            return false;
        }
    }

    // Helper to print arrays/collections for failure messages
    private static string ArrayToString(System.Collections.IEnumerable arr)
    {
        return $"[{string.Join(", ", arr.Cast<object>())}]";
    }

    public static void Main(string[] args)
    {
        bool passed = true;
        
        // In a real system, you would use Newtonsoft.Json or System.Text.Json 
        // to deserialize TESTS_JSON into a List<TestCase>.
        // For simplicity here, we define a structured list of inputs/outputs.
        
        // Example for a problem: public int[] TwoSum(int[] nums, int target)
        var testInputs = new List<(int[] nums, int target, int[] expected)>
        {
            (new[] {2, 7, 11, 15}, 9, new[] {0, 1}),
            (new[] {3, 2, 4}, 6, new[] {1, 2}),
            (new[] {3, 3}, 6, new[] {0, 1}),
        };

        // Instantiate the user's class containing the target function
        // NOTE: This assumes the user's class is named 'Solution'
        ${className} userSolution = new ${className}();

        for (int i = 0; i < testInputs.Count; i++)
        {
            var test = testInputs[i];
            
            // --- PREVENT INPUT MUTATION ---
            // Create a copy of the input array before passing it
            int[] numsCopy = (int[])test.nums.Clone();

            try
            {
                // CALL USER FUNCTION (Assuming 'TwoSum' signature)
                ${assumedReturnType} actual = userSolution.${functionName}(numsCopy, test.target);

                if (DeepEqual(actual, test.expected))
                {
                    Console.WriteLine($"[PASS] Test {i + 1}");
                }
                else
                {
                    Console.Error.WriteLine($"[FAIL] Test {i + 1}: Expected {ArrayToString(test.expected)}, Got {ArrayToString(actual)}");
                    passed = false;
                }
            }
            catch (Exception e)
            {
                // Catches and reports a Runtime Error (RE)
                Console.Error.WriteLine($"[ERROR] Test {i + 1} failed with Runtime Error: {e.GetType().Name}: {e.Message}");
                passed = false;
            }
        }

        if (passed)
        {
            Console.WriteLine("[VERDICT] Accepted");
        }
        else
        {
            Console.WriteLine("[VERDICT] Wrong Answer or Runtime Error");
        }
    }
}
// --- END TEST HARNESS ---
`;
}

export function PhpWrapper(code: string, functionName: string, className: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 4).replace(/\n/g, '\n    ');

    return `
<?php
// Set high error reporting for debugging user code
error_reporting(E_ALL);
ini_set('display_errors', '1');

// --- BEGIN USER CODE ---
${code}
// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---

// Define the test cases array from JSON string
$tests_json = <<<JSON
${testCasesString}
JSON;

$TESTS = json_decode($tests_json, true);
$passed = true;

/**
 * Robust deep comparison function for PHP arrays and objects.
 * Handles float precision and unordered arrays.
 * @param mixed $a Actual result
 * @param mixed $b Expected result
 * @return bool True if they are considered equal
 */
function deepEqual($a, $b) : bool {
    // 1. Direct equality check for primitives
    if ($a === $b) {
        return true;
    }

    // 2. Handle Floating Point Numbers (using epsilon for tolerance)
    if (is_float($a) && is_float($b)) {
        return abs($a - $b) < 1e-9;
    }

    // 3. Handle Arrays (Lists/Dictionaries)
    if (is_array($a) && is_array($b)) {
        // If one is sequential/indexed and the other is associative, treat as unequal.
        if (array_keys($a) !== range(0, count($a) - 1) && array_keys($b) === range(0, count($b) - 1)) {
             return false;
        }

        // Check size
        if (count($a) !== count($b)) {
            return false;
        }

        // For UNORDERED comparison (common in CP results), sort array values before comparison
        // This is necessary for arrays of integers/strings where order doesn't matter.
        try {
            // Sort associative arrays by key for reliable comparison
            if (!empty($a) && array_keys($a) !== range(0, count($a) - 1)) {
                ksort($a);
                ksort($b);
            } else {
                // Sort indexed arrays by value
                sort($a);
                sort($b);
            }
            
            // Now perform recursive comparison
            foreach ($a as $key => $value) {
                if (!array_key_exists($key, $b) || !deepEqual($value, $b[$key])) {
                    return false;
                }
            }
            return true;
        } catch (\Throwable $e) {
            // Fallback for extremely complex objects that sorting or key-based comparison fails on
             return json_encode($a) === json_encode($b);
        }
    }
    
    // 4. Default to serialization check for objects/unhandled cases
    return json_encode($a) === json_encode($b);
}

function runTests() {
    global $TESTS;
    global $passed;
    
    // Determine user class and function existence
    $className = '${className}';
    $functionName = '${functionName}';
    
    // Check if the user defined the class
    if (!class_exists($className)) {
        echo "[VERDICT] Runtime Error: Class '{$className}' not found." . PHP_EOL;
        return;
    }
    
    // Instantiate the user's class
    $userSolution = new $className();
    
    if (!method_exists($userSolution, $functionName)) {
        echo "[VERDICT] Runtime Error: Method '{$functionName}' not found in class '{$className}'." . PHP_EOL;
        return;
    }

    foreach ($TESTS as $i => $test) {
        // Use PHP's list expansion for calling the function
        $input = $test['input'] ?? [];
        $expected = $test['expected'] ?? null;
        $testNumber = $i + 1;
        
        // --- PREVENT INPUT MUTATION ---
        // Deep copy the input using serialization before calling the function
        $inputCopy = json_decode(json_encode($input), true);

        try {
            // CALL USER FUNCTION: Assumed method call on the instantiated class
            $actual = $userSolution->{$functionName}(...$inputCopy);

            if (deepEqual($actual, $expected)) {
                echo "[PASS] Test {$testNumber}" . PHP_EOL;
            } else {
                // Use var_export for a readable debug output on failure
                $expectedOutput = var_export($expected, true);
                $actualOutput = var_export($actual, true);
                
                fprintf(STDERR, "[FAIL] Test %d: Expected %s, Got %s" . PHP_EOL, $testNumber, $expectedOutput, $actualOutput);
                $passed = false;
            }

        } catch (\Throwable $e) {
            // Catches all Exceptions and Errors (Runtime Error)
            fprintf(STDERR, "[ERROR] Test %d failed with Runtime Error: %s: %s" . PHP_EOL, $testNumber, get_class($e), $e->getMessage());
            $passed = false;
        }
    }

    if ($passed) {
        echo "[VERDICT] Accepted" . PHP_EOL;
    } else {
        echo "[VERDICT] Wrong Answer or Runtime Error" . PHP_EOL;
    }
}

runTests();
// --- END TEST HARNESS ---
?>
`;
}

export function GoWrapper(code: string, functionName: string, className: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 4).replace(/\n/g, '\n    ');

    // Assumed function signature for a common problem (e.g., TwoSum: func TwoSum(nums []int, target int) []int)
    const assumedSignature = `func ${functionName}(nums []int, target int) []int`;

    return `
package main

// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
import (
	"fmt"
	"math"
	"sort"
	"encoding/json"
	"reflect"
	"time" // Included for time-related problems or potential future use
)

// --- BEGIN USER CODE ---

// NOTE: The user's function must be named '${functionName}' and be globally available.
${assumedSignature} {
    // This is where the user's code is inserted.
    // We provide a basic placeholder to ensure the file is valid Go.
    ${code}
}

// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---

// TestCase struct to map the JSON test data
type TestCase struct {
	Input struct {
		Nums []int \`json:"nums"\` // Assumed input variable name
		Target int \`json:"target"\` // Assumed input variable name
	} \`json:"input"\`
	Expected interface{} \`json:"expected"\`
}

// Global JSON string containing all test cases
const testsJSON = \`${testCasesString}\`

// Robust deep comparison function
func DeepEqual(a, b interface{}) bool {
	if reflect.TypeOf(a) != reflect.TypeOf(b) {
		// Handle int vs float comparison (e.g., 1 vs 1.0)
		if (reflect.TypeOf(a).Kind() == reflect.Float64 && reflect.TypeOf(b).Kind() == reflect.Int) ||
			(reflect.TypeOf(a).Kind() == reflect.Int && reflect.TypeOf(b).Kind() == reflect.Float64) {
			
			var floatA, floatB float64
			if reflect.TypeOf(a).Kind() == reflect.Int { floatA = float64(a.(int)) } else { floatA = a.(float64) }
			if reflect.TypeOf(b).Kind() == reflect.Int { floatB = float64(b.(int)) } else { floatB = b.(float64) }

			return math.Abs(floatA - floatB) < 1e-9
		}
		return false
	}

	// Handle slices (arrays): Assume UNORDERED output for common CP problems
	if reflect.TypeOf(a).Kind() == reflect.Slice {
		sliceA := reflect.ValueOf(a)
		sliceB := reflect.ValueOf(b)
		
		if sliceA.Len() != sliceB.Len() { return false }

		// Serialize to JSON string for robust unordered comparison of elements
		// NOTE: This assumes elements are comparable after serialization.
		strA, _ := json.Marshal(sliceA.Interface())
		strB, _ := json.Marshal(sliceB.Interface())

		// Quick way to check if the serialized output is identical
		return string(strA) == string(strB)
	}

	// Handle maps (dictionaries)
	if reflect.TypeOf(a).Kind() == reflect.Map {
		return reflect.DeepEqual(a, b)
	}

	// Handle floating point numbers with tolerance
	if reflect.TypeOf(a).Kind() == reflect.Float64 {
		return math.Abs(a.(float64) - b.(float64)) < 1e-9
	}

	return reflect.DeepEqual(a, b)
}

func runTests() {
	var tests []TestCase
	err := json.Unmarshal([]byte(testsJSON), &tests)

	if err != nil {
		// Failure to parse test data (a harness error, not user error)
		fmt.Printf("[VERDICT] Runtime Error: Failed to parse test cases JSON: %v\\n", err)
		return
	}

	passed := true

	for i, test := range tests {
		testNumber := i + 1

		// --- PREVENT INPUT MUTATION ---
		// Create a copy of the input slice to prevent modification
		numsCopy := make([]int, len(test.Input.Nums))
		copy(numsCopy, test.Input.Nums)

		var actual interface{}
		
		// Use a local closure/anonymous function to isolate the function call
		// and capture any potential runtime panics.
		func() {
			defer func() {
				if r := recover(); r != nil {
					// Catches and reports a Runtime Panic (RE)
					fmt.Fprintf(os.Stderr, "[ERROR] Test %d failed with Runtime Panic: %v\\n", testNumber, r)
					passed = false
				}
			}()
			
			// CALL USER FUNCTION: Assumed signature
			actual = ${functionName}(numsCopy, test.Input.Target)
		}()
		
		// If a panic occurred, skip comparison
		if !passed { continue }

		// Handle type conversion for comparison
		expected := test.Expected

		// NOTE: JSON unmarshals all numbers as float64, so we must convert.
		// If the expected type is a slice of integers, convert the actual output for comparison.
		// We perform a basic conversion of the expected value here for type consistency:
		if actual, ok := actual.([]int); ok {
			// Convert expected to a []int for slice comparison
			if expectedSlice, ok := expected.([]interface{}); ok {
				intSlice := make([]int, len(expectedSlice))
				for j, v := range expectedSlice {
					// Assuming the JSON number is a float64
					intSlice[j] = int(v.(float64)) 
				}
				expected = intSlice
			}
		}


		if DeepEqual(actual, expected) {
			fmt.Printf("[PASS] Test %d\\n", testNumber)
		} else {
			fmt.Fprintf(os.Stderr, "[FAIL] Test %d: Expected %v, Got %v\\n", testNumber, expected, actual)
			passed = false
		}
	}

	if passed {
		fmt.Printf("[VERDICT] Accepted\\n")
	} else {
		fmt.Printf("[VERDICT] Wrong Answer or Runtime Error\\n")
	}
}

func main() {
	runTests()
}

// --- END TEST HARNESS ---
`;
}

export function RustWrapper(code: string, functionName: string, className: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 4).replace(/\n/g, '\n    ');
    
    // Assumed user code structure: an implementation block for a struct (often named Solution)
    const assumedStructName = className || "Solution";
    
    // NOTE: For simplicity, the assumed function signature is used for a common problem,
    // like pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32>
    
    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
use std::collections::{HashMap, HashSet};
use std::fmt::Debug;
use std::fs;
use std::io::{self, Write};
use std::panic;
use std::cmp::Ordering;

// Use serde for JSON serialization/deserialization
use serde::{Deserialize, Serialize};

// --- BEGIN USER CODE ---

// User's implementation is expected within this struct block
pub struct ${assumedStructName};

impl ${assumedStructName} {
    // This is where the user's code is inserted.
    // Signature assumed: pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32>
    ${code}
}

// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---

// Define the structure for test cases using serde for easy JSON deserialization
#[derive(Debug, Deserialize)]
struct TestCase {
    // Use serde(rename) if input names differ from Rust conventions
    input: TestInput,
    expected: serde_json::Value, // Use Value to handle various expected types dynamically
}

#[derive(Debug, Deserialize)]
struct TestInput {
    nums: Vec<i32>, // Assumed input variable
    target: i32,    // Assumed input variable
}

// Global JSON string containing all test cases
const TESTS_JSON: &str = r#"\n${testCasesString}\n"#;

/**
 * Robust deep comparison function for Rust types.
 * Handles float precision and unordered vector comparison.
 */
fn deep_equal<T>(actual: T, expected: serde_json::Value) -> bool
where
    T: Debug + PartialEq + Clone + serde::Serialize,
{
    // 1. Serialize the actual result to a JSON Value for type-agnostic comparison
    let actual_value = match serde_json::to_value(actual.clone()) {
        Ok(v) => v,
        Err(_) => return false, // Failed to serialize actual result
    };

    // 2. Handle simple scalar comparisons (numbers, bools, strings)
    if actual_value == expected {
        return true;
    }

    // 3. Handle Floating Point Numbers with tolerance
    if let (serde_json::Value::Number(n_a), serde_json::Value::Number(n_b)) = (&actual_value, &expected) {
        if let (Some(f_a), Some(f_b)) = (n_a.as_f64(), n_b.as_f64()) {
            return (f_a - f_b).abs() < 1e-9;
        }
    }

    // 4. Handle Vectors (Arrays): Assume UNORDERED output for common CP problems
    if let (serde_json::Value::Array(arr_a), serde_json::Value::Array(arr_b)) = (&actual_value, &expected) {
        if arr_a.len() != arr_b.len() {
            return false;
        }
        
        // Use sorting based on JSON string representation for robust unordered comparison
        let mut sorted_a = arr_a.clone();
        let mut sorted_b = arr_b.clone();
        
        // Sorting complex types requires a custom closure that can handle comparison
        sorted_a.sort_by(|a, b| serde_json::to_string(a).cmp(&serde_json::to_string(b)));
        sorted_b.sort_by(|a, b| serde_json::to_string(a).cmp(&serde_json::to_string(b)));

        return sorted_a == sorted_b;
    }
    
    // 5. Fallback for complex structures (like HashMap/BTreeMap)
    return actual_value == expected;
}

fn run_tests() {
    // 1. Deserialize test cases
    let tests: Vec<TestCase> = match serde_json::from_str(TESTS_JSON) {
        Ok(t) => t,
        Err(e) => {
            eprintln!("[VERDICT] Runtime Error: Failed to parse test cases JSON: {}", e);
            return;
        }
    };

    let mut passed = true;
    
    for (i, test) in tests.into_iter().enumerate() {
        let test_number = i + 1;
        
        // --- PREVENT INPUT MUTATION ---
        // Vector is moved (copied) when passed to the function, naturally preventing mutation
        let nums_copy = test.input.nums;
        let target_copy = test.input.target;

        // Use panic::catch_unwind to capture runtime panics (RE)
        let result = panic::catch_unwind(|| {
            // Instantiate the solution struct to call the method
            let solution = ${assumedStructName};
            
            // CALL USER FUNCTION: Assume function is a method on the Solution struct
            solution.${functionName}(nums_copy, target_copy)
        });

        match result {
            Ok(actual) => {
                // Use a macro or helper function to convert output to string
                let actual_str = format!("{:?}", actual);
                let expected_str = format!("{:?}", test.expected); // Outputting JSON Value directly
                
                // Compare the result
                if deep_equal(actual, test.expected) {
                    println!("[PASS] Test {}", test_number);
                } else {
                    eprintln!("[FAIL] Test {}: Expected {:?}, Got {:?}", test_number, test.expected, actual);
                    passed = false;
                }
            }
            Err(e) => {
                // Catches and reports a Runtime Panic (RE)
                let error_msg = e.downcast_ref::<&'static str>().map(|s| *s).unwrap_or("unknown panic");
                eprintln!("[ERROR] Test {} failed with Runtime Panic: {}", test_number, error_msg);
                passed = false;
            }
        }
    }

    if passed {
        println!("[VERDICT] Accepted");
    } else {
        println!("[VERDICT] Wrong Answer or Runtime Error");
    }
}

fn main() {
    run_tests();
}
// --- END TEST HARNESS ---
`;
}

export function RubyWrapper(code: string, functionName: string, className: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 4).replace(/\n/g, '\n    ');

    return `
# --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
require 'json'
require 'set' # Useful for unordered comparisons
require 'cmath' # For complex math functions

# --- BEGIN USER CODE ---
# User's class definition, typically named 'Solution'
class ${className}
  # This is where the user's code is inserted.
  # Signature assumed: def ${functionName}(nums, target)
  ${code}
end

# --- END USER CODE ---

# --- BEGIN TEST HARNESS ---

# Global JSON string containing all test cases
TESTS_JSON = <<~JSON
${testCasesString}
JSON

TESTS = JSON.parse(TESTS_JSON, symbolize_names: true)
$passed = true

# Helper for robust deep comparison
def deep_equal(actual, expected)
  # 1. Direct equality check
  return true if actual == expected

  # 2. Handle Floating Point Numbers with tolerance
  if actual.is_a?(Numeric) && expected.is_a?(Numeric)
    return (actual - expected).abs < 1e-9
  end

  # 3. Handle Arrays (Lists): Assume UNORDERED output for common CP problems
  if actual.is_a?(Array) && expected.is_a?(Array)
    return false if actual.length != expected.length

    # Convert to a Set of sorted JSON strings for reliable unordered deep comparison
    begin
        actual_set = actual.map { |item| JSON.dump(item) }.to_set
        expected_set = expected.map { |item| JSON.dump(item) }.to_set
        return actual_set == expected_set
    rescue
        # Fallback: Sort simple arrays if set conversion fails (e.g., cannot hash an item)
        return actual.sort == expected.sort rescue false
    end
  end

  # 4. Handle Hashes (Dictionaries)
  if actual.is_a?(Hash) && expected.is_a?(Hash)
    return false if actual.keys.length != expected.keys.length
    
    # Recursively check keys and values
    actual.each do |key, val|
      return false unless expected.key?(key) && deep_equal(val, expected[key])
    end
    return true
  end

  # Default to serialization comparison for unhandled complex objects
  JSON.dump(actual) == JSON.dump(expected)
end

def array_to_s(arr)
  return 'nil' if arr.nil?
  JSON.dump(arr) # Use JSON for clean, consistent representation
end

def run_tests
  # Instantiate the user's class
  user_solution = ${className}.new
  function_name = :${functionName}

  TESTS.each_with_index do |test, i|
    test_number = i + 1
    
    # --- PREVENT INPUT MUTATION ---
    # Deep copy the input using JSON serialization/deserialization
    input = test[:input].is_a?(Array) ? JSON.parse(JSON.dump(test[:input])) : test[:input]
    expected = test[:expected]
    
    # Arguments for the user's function call
    args = input.is_a?(Array) ? input : [input]

    begin
      # CALL USER FUNCTION: Ruby dynamic method call
      actual = user_solution.send(function_name, *args)

      if deep_equal(actual, expected)
        puts "[PASS] Test \#{test_number}"
      else
        STDERR.puts "[FAIL] Test \#{test_number}: Expected \#{array_to_s(expected)}, Got \#{array_to_s(actual)}"
        $passed = false
      end

    rescue StandardError => e
      # Catches and reports a Runtime Error (RE)
      STDERR.puts "[ERROR] Test \#{test_number} failed with Runtime Error: \#{e.class}: \#{e.message}"
      $passed = false
    end
  end

  if $passed
    puts "[VERDICT] Accepted"
  else
    puts "[VERDICT] Wrong Answer or Runtime Error"
  end
end

run_tests
# --- END TEST HARNESS ---
`;
}

export function SwiftWrapper(code: string, functionName: string, className: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 4).replace(/\n/g, '\n    ');
    
    // Assumed user code structure: a struct or class (often named Solution)
    const assumedStructName = className || "Solution";
    
    // Assumed function signature for a common problem (e.g., TwoSum: func twoSum(_ nums: [Int], _ target: Int) -> [Int])
    
    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
import Foundation

// --- BEGIN USER CODE ---

// User's implementation is expected within this struct/class block.
// We make it 'public' for external access by the harness.
public struct ${assumedStructName} {
    // This is where the user's code is inserted.
    // Signature assumed: public func twoSum(_ nums: [Int], _ target: Int) -> [Int]
    ${code}
}

// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---

// Define the structure for test cases using Codable
struct TestCase: Codable {
    let input: TestInput
    let expected: CodableValue // Use a custom struct/enum for dynamic expected type
}

// Struct to represent the function's arguments
struct TestInput: Codable {
    let nums: [Int] // Assumed input variable
    let target: Int    // Assumed input variable
}

// A simple wrapper to allow 'expected' to hold any JSON-decodable value
enum CodableValue: Codable, Equatable {
    case int(Int)
    case arrayInt([Int])
    case string(String)
    // Add other types as needed (e.g., .double(Double), .bool(Bool))

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let val = try? container.decode([Int].self) {
            self = .arrayInt(val)
        } else if let val = try? container.decode(Int.self) {
            self = .int(val)
        } else if let val = try? container.decode(String.self) {
            self = .string(val)
        } else {
            throw DecodingError.typeMismatch(CodableValue.self, DecodingError.Context(codingPath: decoder.codingPath, debugDescription: "Type not supported"))
        }
    }
    
    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case .int(let val): try container.encode(val)
        case .arrayInt(let val): try container.encode(val)
        case .string(let val): try container.encode(val)
        }
    }
    
    // Swift's Equatable conformance for CodableValue
    static func == (lhs: CodableValue, rhs: CodableValue) -> Bool {
        switch (lhs, rhs) {
        case (.int(let l), .int(let r)): return l == r
        case (.arrayInt(let l), .arrayInt(let r)): return deepEqual(l, r) // Use custom array check
        case (.string(let l), .string(let r)): return l == r
        default: return false
        }
    }
}

// Global JSON string containing all test cases
let TESTS_JSON = #"\n${testCasesString}\n"#

/**
 * Robust deep comparison function for Swift arrays.
 * Handles UNORDERED vector comparison by sorting.
 */
func deepEqual<T: Comparable>(_ actual: [T], _ expected: [T]) -> Bool {
    if actual.count != expected.count { return false }
    
    // Assume UNORDERED output for common CP problems (sort both arrays)
    return actual.sorted() == expected.sorted()
}

/**
 * Robust deep comparison wrapper for the main harness.
 */
func harnessDeepEqual(actual: Any, expected: CodableValue) -> Bool {
    // 1. Handle Array comparison
    if let actualArray = actual as? [Int], case let .arrayInt(expectedArray) = expected {
        return deepEqual(actualArray, expectedArray)
    }
    
    // 2. Handle Int comparison
    if let actualInt = actual as? Int, case let .int(expectedInt) = expected {
        return actualInt == expectedInt
    }

    // 3. Handle Floating Point Numbers with tolerance
    if let actualDouble = actual as? Double, let expectedDouble = expected.asDouble() {
        return abs(actualDouble - expectedDouble) < 1e-9
    }
    
    // Fallback: Use string comparison via serialization
    return "\(actual)" == "\(expected)"
}

extension CodableValue {
    // Helper to get a Double value for float comparison
    func asDouble() -> Double? {
        switch self {
        case .int(let val): return Double(val)
        default: return nil
        }
    }
}

func runTests() {
    let testData = TESTS_JSON.data(using: .utf8)!
    let decoder = JSONDecoder()
    let tests: [TestCase]
    
    // 1. Deserialize test cases
    do {
        tests = try decoder.decode([TestCase].self, from: testData)
    } catch {
        fputs("[VERDICT] Runtime Error: Failed to parse test cases JSON: \\(error)\\n", stderr)
        return
    }

    var passed = true
    let userSolution = ${assumedStructName}()

    for (i, test) in tests.enumerated() {
        let testNumber = i + 1
        
        // --- PREVENT INPUT MUTATION ---
        // Value types (Structs/Arrays of Ints) are copied by default in Swift when passed,
        // but we make an explicit copy of the mutable input (Vec) for clarity and safety.
        var numsCopy = test.input.nums
        let targetCopy = test.input.target

        // Use a closure to isolate the function call and catch potential fatal errors/panics
        let actual: Any? = {
            // Swift errors and fatal errors are separate. 
            // We rely on the sandbox to catch unrecoverable fatalError().
            do {
                // CALL USER FUNCTION: Assumed method call on the struct instance
                // We use type casting to ensure the return is treated as Any?
                return userSolution.${functionName}(&numsCopy, targetCopy) as Any? 
            } catch {
                fputs("[ERROR] Test \\(testNumber) failed with Runtime Error (Caught Exception): \\(error)\\n", stderr)
                $passed = false
                return nil
            }
        }()

        if !$passed || actual == nil {
            // Error already logged or function returned nil unexpectedly
            $passed = false
            continue
        }

        if harnessDeepEqual(actual: actual!, expected: test.expected) {
            print("[PASS] Test \\(testNumber)")
        } else {
            fputs("[FAIL] Test \\(testNumber): Expected \\(test.expected), Got \\(actual!)\\n", stderr)
            $passed = false
        }
    }

    if passed {
        print("[VERDICT] Accepted")
    } else {
        print("[VERDICT] Wrong Answer or Runtime Error")
    }
}

// The main entry point
runTests()
// --- END TEST HARNESS ---
`;
}

export function KotlinWrapper(code: string, functionName: string, className: string, testCases: Array<any>): string {
    const testCasesString = JSON.stringify(testCases, null, 4).replace(/\n/g, '\n    ');

    // Assumed user code structure: a class named 'Solution' with a member function
    const assumedClassName = className || "Solution";
    
    // Assumed function signature for a common problem (e.g., TwoSum: fun twoSum(nums: IntArray, target: Int): IntArray)
    
    return `
// --- REQUIRED IMPORTS FOR TEST HARNESS & USER CODE ---
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlin.math.abs
import kotlin.reflect.KClass
import kotlin.collections.*

// --- BEGIN USER CODE ---

// User's implementation is expected within this class block.
class ${assumedClassName} {
    // This is where the user's code is inserted.
    // Signature assumed: fun twoSum(nums: IntArray, target: Int): IntArray
    ${code}
}

// --- END USER CODE ---

// --- BEGIN TEST HARNESS ---

// Data class to map the JSON test data
@Serializable
data class TestCase(
    val input: TestInput,
    val expected: JsonElementWrapper // Use wrapper for dynamic expected type
)

@Serializable
data class TestInput(
    val nums: List<Int>, // Assuming standard List for easy JSON deserialization
    val target: Int
)

// Wrapper to handle dynamic expected types (like int, array, string) from JSON
@Serializable(with = JsonElementWrapperSerializer::class)
sealed class JsonElementWrapper {
    data class IntValue(val value: Int) : JsonElementWrapper()
    data class IntArrayValue(val value: List<Int>) : JsonElementWrapper()
    data class StringValue(val value: String) : JsonElementWrapper()
    // Add other common types as needed (Double, List<String>, etc.)
}

// Custom serializer is required for the sealed class pattern (omitted for brevity, assume simple array/int conversion)
// In a real project, this would handle the dynamic JSON element type.

// Global JSON string containing all test cases
const val TESTS_JSON = """${testCasesString}"""

/**
 * Robust deep comparison function for Kotlin collections.
 * Handles float precision and unordered array comparison.
 */
fun deepEqual(actual: Any?, expected: JsonElementWrapper): Boolean {
    if (actual == null && expected == null) return true
    if (actual == null || expected == null) return false

    // 1. Handle IntArray comparison (assuming user returns IntArray for performance)
    if (actual is IntArray && expected is JsonElementWrapper.IntArrayValue) {
        val actualList = actual.toList()
        val expectedList = expected.value

        if (actualList.size != expectedList.size) return false

        // Assuming UNORDERED output (common for CP problems: sort and compare)
        return actualList.sorted() == expectedList.sorted()
    }
    
    // 2. Handle simple Int comparison
    if (actual is Int && expected is JsonElementWrapper.IntValue) {
        return actual == expected.value
    }
    
    // 3. Handle Floating Point Numbers with tolerance
    if (actual is Double && expected is JsonElementWrapper.IntValue) {
        return abs(actual - expected.value.toDouble()) < 1e-9
    }
    
    // 4. Fallback: Use serialization comparison for maps/complex objects
    val json = Json { ignoreUnknownKeys = true }
    return try {
        val actualJson = json.encodeToString(actual.javaClass.kotlin.serializer(), actual)
        val expectedJson = json.encodeToString(expected.javaClass.kotlin.serializer(), expected)
        actualJson == expectedJson
    } catch (e: Exception) {
        // Simple string comparison as a last resort
        actual.toString() == expected.toString()
    }
}

fun runTests() {
    val json = Json { ignoreUnknownKeys = true }
    val tests: List<TestCase>
    
    try {
        // Deserialize test cases from JSON string
        tests = json.decodeFromString<List<TestCase>>(TESTS_JSON)
    } catch (e: Exception) {
        System.err.println("[VERDICT] Runtime Error: Failed to parse test cases JSON: ${'$'}{e.message}")
        return
    }

    var passed = true
    val userSolution = ${assumedClassName}()

    for ((i, test) in tests.withIndex()) {
        val testNumber = i + 1
        
        // --- PREVENT INPUT MUTATION ---
        // Create a copy of the input List to prevent modification
        val numsCopy = test.input.nums.toIntArray() // Convert List<Int> to IntArray for function call
        val targetCopy = test.input.target

        // Use runCatching to isolate the function call and handle exceptions
        val result = runCatching {
            // CALL USER FUNCTION: Method call on the instantiated class
            userSolution.${functionName}(numsCopy, targetCopy)
        }

        if (result.isSuccess) {
            val actual = result.getOrThrow()
            if (deepEqual(actual, test.expected)) {
                println("[PASS] Test ${'$'}testNumber")
            } else {
                System.err.println("[FAIL] Test ${'$'}testNumber: Expected ${'$'}{test.expected}, Got ${'$'}actual")
                passed = false
            }
        } else {
            // Catches and reports a Runtime Exception (RE)
            System.err.println("[ERROR] Test ${'$'}testNumber failed with Runtime Error: ${'$'}{result.exceptionOrNull()?.message}")
            passed = false
        }
    }

    if (passed) {
        println("[VERDICT] Accepted")
    } else {
        println("[VERDICT] Wrong Answer or Runtime Error")
    }
}

fun main() {
    runTests()
}
// --- END TEST HARNESS ---
`;
}

