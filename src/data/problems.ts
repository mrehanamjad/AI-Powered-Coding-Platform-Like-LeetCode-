import { Problem } from "@/types/problem";

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "1. Two Sum",
    difficulty: "Easy",
    category: ["Array", "Hash Table"],
    status: "Not Started",
    function: {name:"twoSum",params:["nums","target"]},
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10⁴",
      "-10⁹ <= nums[i] <= 10⁹",
      "-10⁹ <= target <= 10⁹",
      "Only one valid answer exists.",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
    // Write your code here
    
}`,
      typescript: `function twoSum(nums: number[], target: number): number[] {
    // Write your code here
    
}`,
      python: `def twoSum(nums, target):
    # Write your code here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        
    }
};`,
      c: `#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Write your code here
    
}`,
      csharp: `public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Write your code here
        
    }
}`,
      go: `func twoSum(nums []int, target int) []int {
    // Write your code here
    
}`,
      rust: `impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        // Write your code here
        
    }
}`,
      ruby: `def two_sum(nums, target)
    # Write your code here
    
end`,
      php: `<?php
function twoSum($nums, $target) {
    // Write your code here
    
}`,
      swift: `class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        // Write your code here
        
    }
}`,
      kotlin: `class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        // Write your code here
        
    }
}`,
    },
    testCases: [
    {
      input: [[2, 7, 11, 15],9 ],
      expected: [0, 1],
    },
    {
      input: [[3, 2, 4], 6 ],
      expected: [1, 2],
    },
    {
      input: [[3, 3],  6 ],
      expected: [0, 1],
    },
    {
      input: [[1, 5, 9, 15],10 ],
      expected: [0, 2],
    },
    {
      input: [[-1, -2, -3, -4, -5], -8],
      expected: [2, 4],
    },
    {
      input: [[10, 20, 30, 40], 50 ],
      expected: [1, 2],
    },
    {
      input: [[0, 4, 3, 0], 0 ],
      expected: [0, 3],
    },
    {
      input: [[-5, 4, 2, 9, 1], 4 ],
      expected: [0, 3],
    },
    {
      input: [[500000, 500000],  1000000 ],
      expected: [0, 1],
    },
    {
      input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],  18 ],
      expected: [7, 9],
    },
    {
      input: [[1, 999999999, 5, 999999998, 2, 8, 1000000000],1000000000],
      expected: [0,1],
    },
    {
      input: [[1000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 999999], 1000000],
      expected: [1, 11],
    },
  ]
  },
{
  "id": "best-time-to-buy-and-sell-stock",
  "title": "2. Best Time to Buy and Sell Stock",
  "difficulty": "Easy",
  "category": ["Array", "Dynamic Programming"],
  "status": "Not Started",
  "function": { "name": "maxProfit", "params": ["prices"] },
  "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing **exactly one day to buy** and **exactly one day to sell** the stock. Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.",
  "examples": [
    {
      "input": "prices = [7,1,5,3,6,4]",
      "output": "5",
      "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
    },
    {
      "input": "prices = [7,6,4,3,1]",
      "output": "0",
      "explanation": "No transaction is done, so profit = 0."
    }
  ],
  "constraints": [
    "1 <= prices.length <= 10⁵",
    "0 <= prices[i] <= 10⁴"
  ],
  "starterCode": {
    "javascript": "function maxProfit(prices) {\n    // Write your code here\n}",
    "typescript": "function maxProfit(prices: number[]): number {\n    // Write your code here\n}",
    "python": "def maxProfit(prices):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n    }\n};",
    "c": "#include <stdlib.h>\n\nint maxProfit(int* prices, int pricesSize) {\n    // Write your code here\n}",
    "csharp": "public class Solution {\n    public int MaxProfit(int[] prices) {\n        // Write your code here\n    }\n}",
    "go": "func maxProfit(prices []int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn max_profit(prices: Vec<i32>) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def max_profit(prices)\n    # Write your code here\nend",
    "php": "<?php\nfunction maxProfit($prices) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func maxProfit(_ prices: [Int]) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun maxProfit(prices: IntArray): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[7,1,5,3,6,4]], "expected": 5 },
    { "input": [[7,6,4,3,1]], "expected": 0 },
    { "input": [[1,2,3,4,5]], "expected": 4 },
    { "input": [[3,3,5,0,0,3,1,4]], "expected": 4 },
    { "input": [[1]], "expected": 0 },
    { "input": [[2,1,2,1,0,1,2]], "expected": 2 },
    { "input": [[5,4,3,2,1,6]], "expected": 5 },
    { "input": [[3,1,4,8,7,2,5]], "expected": 7 }
  ]
},
{
  "id": "valid-parentheses",
  "title": "3. Valid Parentheses",
  "difficulty": "Easy",
  "category": ["String", "Stack"],
  "status": "Not Started",
  "function": { "name": "isValid", "params": ["s"] },
  "description": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.",
  "examples": [
    {
      "input": "s = '()'",
      "output": "true"
    },
    {
      "input": "s = '()[]{}'",
      "output": "true"
    },
    {
      "input": "s = '(]'",
      "output": "false"
    },
    {
      "input": "s = '([)]'",
      "output": "false"
    },
    {
      "input": "s = '{[]}'",
      "output": "true"
    }
  ],
  "constraints": [
    "1 <= s.length <= 10⁴",
    "s consists of parentheses only '()[]{}'."
  ],
  "starterCode": {
    "javascript": "function isValid(s) {\n    // Write your code here\n}",
    "typescript": "function isValid(s: string): boolean {\n    // Write your code here\n}",
    "python": "def isValid(s):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your code here\n    }\n};",
    "c": "#include <stdbool.h>\n\nbool isValid(char * s) {\n    // Write your code here\n}",
    "csharp": "public class Solution {\n    public bool IsValid(string s) {\n        // Write your code here\n    }\n}",
    "go": "func isValid(s string) bool {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn is_valid(s: String) -> bool {\n        // Write your code here\n    }\n}",
    "ruby": "def is_valid(s)\n    # Write your code here\nend",
    "php": "<?php\nfunction isValid($s) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func isValid(_ s: String) -> Bool {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun isValid(s: String): Boolean {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": ["()"], "expected": true },
    { "input": ["()[]{}"], "expected": true },
    { "input": ["(]"], "expected": false },
    { "input": ["([)]"], "expected": false },
    { "input": ["{[]}"], "expected": true },
    { "input": ["[({})]"], "expected": true },
    { "input": ["((()))"], "expected": true },
    { "input": ["((())"], "expected": false },
    { "input": ["{[()]}"], "expected": true },
    { "input": ["{[()]]"], "expected": false }
  ]
},
{
  "id": "merge-two-sorted-lists",
  "title": "4. Merge Two Sorted Lists",
  "difficulty": "Easy",
  "category": ["Linked List", "Recursion", "Iteration"],
  "status": "Not Started",
  "function": { "name": "mergeTwoLists", "params": ["list1", "list2"] },
  "description": "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by **splicing together the nodes** of the first two lists. Return the head of the merged linked list.",
  "examples": [
    {
      "input": "list1 = [1,2,4], list2 = [1,3,4]",
      "output": "[1,1,2,3,4,4]"
    },
    {
      "input": "list1 = [], list2 = []",
      "output": "[]"
    },
    {
      "input": "list1 = [], list2 = [0]",
      "output": "[0]"
    }
  ],
  "constraints": [
    "The number of nodes in both lists is in the range [0, 50].",
    "-100 <= Node.val <= 100",
    "Both list1 and list2 are sorted in non-decreasing order."
  ],
  "starterCode": {
    "javascript": "function mergeTwoLists(list1, list2) {\n    // Write your code here\n}",
    "typescript": "function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {\n    // Write your code here\n}",
    "python": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef mergeTwoLists(list1, list2):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        // Write your code here\n    }\n};",
    "c": "// Define your own ListNode structure if needed\n// Implementation left for user\n",
    "csharp": "public class Solution {\n    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {\n        // Write your code here\n    }\n}",
    "go": "func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn merge_two_lists(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {\n        // Write your code here\n    }\n}",
    "ruby": "def merge_two_lists(list1, list2)\n    # Write your code here\nend",
    "php": "<?php\nfunction mergeTwoLists($list1, $list2) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func mergeTwoLists(_ list1: ListNode?, _ list2: ListNode?) -> ListNode? {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[1,2,4],[1,3,4]], "expected": [1,1,2,3,4,4] },
    { "input": [[],[]], "expected": [] },
    { "input": [[],[0]], "expected": [0] },
    { "input": [[2,5,7],[1,3,6]], "expected": [1,2,3,5,6,7] },
    { "input": [[1,1,2],[1,3,4]], "expected": [1,1,1,2,3,4] },
    { "input": [[-10,-5,0],[0,5,10]], "expected": [-10,-5,0,0,5,10] }
  ]
},
{
  "id": "maximum-subarray",
  "title": "5. Maximum Subarray",
  "difficulty": "Easy",
  "category": ["Array", "Dynamic Programming"],
  "status": "Not Started",
  "function": { "name": "maxSubArray", "params": ["nums"] },
  "description": "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
  "examples": [
    {
      "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
      "output": "6",
      "explanation": "The contiguous subarray [4,-1,2,1] has the largest sum = 6."
    },
    {
      "input": "nums = [1]",
      "output": "1"
    },
    {
      "input": "nums = [5,4,-1,7,8]",
      "output": "23"
    }
  ],
  "constraints": [
    "1 <= nums.length <= 10⁵",
    "-10⁴ <= nums[i] <= 10⁴"
  ],
  "starterCode": {
    "javascript": "function maxSubArray(nums) {\n    // Write your code here\n}",
    "typescript": "function maxSubArray(nums: number[]): number {\n    // Write your code here\n}",
    "python": "def maxSubArray(nums):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your code here\n    }\n};",
    "c": "#include <stdlib.h>\n\nint maxSubArray(int* nums, int numsSize) {\n    // Write your code here\n}",
    "csharp": "public class Solution {\n    public int MaxSubArray(int[] nums) {\n        // Write your code here\n    }\n}",
    "go": "func maxSubArray(nums []int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn max_sub_array(nums: Vec<i32>) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def max_sub_array(nums)\n    # Write your code here\nend",
    "php": "<?php\nfunction maxSubArray($nums) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func maxSubArray(_ nums: [Int]) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun maxSubArray(nums: IntArray): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[-2,1,-3,4,-1,2,1,-5,4]], "expected": 6 },
    { "input": [[1]], "expected": 1 },
    { "input": [[5,4,-1,7,8]], "expected": 23 },
    { "input": [[-1,-2,-3,-4]], "expected": -1 },
    { "input": [[0,0,0,0]], "expected": 0 },
    { "input": [[-2,1]], "expected": 1 },
    { "input": [[1,2,3,4,5]], "expected": 15 },
    { "input": [[-2,-1]], "expected": -1 }
  ]
},
{
  "id": "move-zeroes",
  "title": "6. Move Zeroes",
  "difficulty": "Easy",
  "category": ["Array", "Two Pointers"],
  "status": "Not Started",
  "function": { "name": "moveZeroes", "params": ["nums"] },
  "description": "Given an integer array `nums`, move all `0`'s to the **end** of it while maintaining the relative order of the non-zero elements. You must do this **in-place** without making a copy of the array.",
  "examples": [
    {
      "input": "nums = [0,1,0,3,12]",
      "output": "[1,3,12,0,0]"
    },
    {
      "input": "nums = [0]",
      "output": "[0]"
    }
  ],
  "constraints": [
    "1 <= nums.length <= 10⁴",
    "-2³¹ <= nums[i] <= 2³¹ - 1"
  ],
  "starterCode": {
    "javascript": "function moveZeroes(nums) {\n    // Write your code here\n}",
    "typescript": "function moveZeroes(nums: number[]): void {\n    // Write your code here\n}",
    "python": "def moveZeroes(nums):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        // Write your code here\n    }\n};",
    "c": "#include <stdlib.h>\n\nvoid moveZeroes(int* nums, int numsSize) {\n    // Write your code here\n}",
    "csharp": "public class Solution {\n    public void MoveZeroes(int[] nums) {\n        // Write your code here\n    }\n}",
    "go": "func moveZeroes(nums []int) {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn move_zeroes(nums: &mut Vec<i32>) {\n        // Write your code here\n    }\n}",
    "ruby": "def move_zeroes(nums)\n    # Write your code here\nend",
    "php": "<?php\nfunction moveZeroes(&$nums) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func moveZeroes(_ nums: inout [Int]) {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun moveZeroes(nums: IntArray) {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[0,1,0,3,12]], "expected": [1,3,12,0,0] },
    { "input": [[0]], "expected": [0] },
    { "input": [[1,0,2,0,3]], "expected": [1,2,3,0,0] },
    { "input": [[4,2,4,0,0,3,0,5,1,0]], "expected": [4,2,4,3,5,1,0,0,0,0] },
    { "input": [[0,0,1]], "expected": [1,0,0] },
    { "input": [[1,2,3,4]], "expected": [1,2,3,4] },
    { "input": [[0,0,0,0]], "expected": [0,0,0,0] }
  ]
},
{
  "id": "remove-duplicates-from-sorted-array",
  "title": "7. Remove Duplicates from Sorted Array",
  "difficulty": "Easy",
  "category": ["Array", "Two Pointers"],
  "status": "Not Started",
  "function": { "name": "removeDuplicates", "params": ["nums"] },
  "description": "Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each element appears only once. The relative order of the elements should be kept the same. Return the new length of the array after duplicates have been removed. Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.",
  "examples": [
    {
      "input": "nums = [1,1,2]",
      "output": "2",
      "explanation": "The array is modified to [1,2]. Length = 2."
    },
    {
      "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
      "output": "5",
      "explanation": "The array is modified to [0,1,2,3,4]. Length = 5."
    }
  ],
  "constraints": [
    "0 <= nums.length <= 3 * 10⁴",
    "-10⁴ <= nums[i] <= 10⁴",
    "nums is sorted in non-decreasing order."
  ],
  "starterCode": {
    "javascript": "function removeDuplicates(nums) {\n    // Write your code here\n}",
    "typescript": "function removeDuplicates(nums: number[]): number {\n    // Write your code here\n}",
    "python": "def removeDuplicates(nums):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        // Write your code here\n    }\n};",
    "c": "#include <stdlib.h>\n\nint removeDuplicates(int* nums, int numsSize) {\n    // Write your code here\n}",
    "csharp": "public class Solution {\n    public int RemoveDuplicates(int[] nums) {\n        // Write your code here\n    }\n}",
    "go": "func removeDuplicates(nums []int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def remove_duplicates(nums)\n    # Write your code here\nend",
    "php": "<?php\nfunction removeDuplicates(&$nums) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func removeDuplicates(_ nums: inout [Int]) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun removeDuplicates(nums: IntArray): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[1,1,2]], "expected": 2 },
    { "input": [[0,0,1,1,1,2,2,3,3,4]], "expected": 5 },
    { "input": [[1,2,3,4,5]], "expected": 5 },
    { "input": [[1,1,1,1]], "expected": 1 },
    { "input": [[]], "expected": 0 },
    { "input": [[-1,0,0,0,1,2,2]], "expected": 5 },
    { "input": [[1,1,2,2,3,3,4,4,5]], "expected": 5 },
    { "input": [[10,10,20,30,30,40,40,50]], "expected": 5 }
  ]
},
{
  "id": "binary-search",
  "title": "8. Binary Search",
  "difficulty": "Easy",
  "category": ["Array", "Binary Search"],
  "status": "Not Started",
  "function": { "name": "search", "params": ["nums", "target"] },
  "description": "Given a **sorted array** of integers `nums` and an integer `target`, return the **index** of `target` if it exists in the array. Otherwise, return `-1`. You must write an algorithm with **O(log n)** runtime complexity.",
  "examples": [
    {
      "input": "nums = [-1,0,3,5,9,12], target = 9",
      "output": "4",
      "explanation": "9 exists in nums and its index is 4."
    },
    {
      "input": "nums = [-1,0,3,5,9,12], target = 2",
      "output": "-1",
      "explanation": "2 does not exist in nums, return -1."
    }
  ],
  "constraints": [
    "1 <= nums.length <= 10⁴",
    "-10⁴ <= nums[i], target <= 10⁴",
    "All integers in nums are **unique**.",
    "nums is sorted in ascending order."
  ],
  "starterCode": {
    "javascript": "function search(nums, target) {\n    // Write your code here\n}",
    "typescript": "function search(nums: number[], target: number): number {\n    // Write your code here\n}",
    "python": "def search(nums, target):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};",
    "c": "#include <stdlib.h>\n\nint search(int* nums, int numsSize, int target) {\n    // Write your code here\n}",
    "csharp": "public class Solution {\n    public int Search(int[] nums, int target) {\n        // Write your code here\n    }\n}",
    "go": "func search(nums []int, target int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn search(nums: Vec<i32>, target: i32) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def search(nums, target)\n    # Write your code here\nend",
    "php": "<?php\nfunction search($nums, $target) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func search(_ nums: [Int], _ target: Int) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun search(nums: IntArray, target: Int): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[-1,0,3,5,9,12],9], "expected": 4 },
    { "input": [[-1,0,3,5,9,12],2], "expected": -1 },
    { "input": [[1,2,3,4,5],3], "expected": 2 },
    { "input": [[1,2,3,4,5],6], "expected": -1 },
    { "input": [[0,1,2,4,5,6,7],0], "expected": 0 },
    { "input": [[0,1,2,4,5,6,7],7], "expected": 6 },
    { "input": [[10,20,30,40,50],25], "expected": -1 },
    { "input": [[-10,-5,0,5,10],-5], "expected": 1 }
  ]
},
{
  "id": "linked-list-cycle",
  "title": "9. Linked List Cycle",
  "difficulty": "Easy",
  "category": ["Linked List", "Two Pointers"],
  "status": "Not Started",
  "function": { "name": "hasCycle", "params": ["head"] },
  "description": "Given `head`, the head of a linked list, determine if the linked list has a **cycle** in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Return `true` if there is a cycle in the linked list. Otherwise, return `false`.",
  "examples": [
    {
      "input": "head = [3,2,0,-4], pos = 1",
      "output": "true",
      "explanation": "There is a cycle in the linked list where the tail connects to the second node."
    },
    {
      "input": "head = [1,2], pos = 0",
      "output": "true",
      "explanation": "Tail connects to first node, forming a cycle."
    },
    {
      "input": "head = [1], pos = -1",
      "output": "false",
      "explanation": "No cycle in the linked list."
    }
  ],
  "constraints": [
    "The number of nodes in the list is in the range [0, 10⁴].",
    "-10⁵ <= Node.val <= 10⁵",
    "pos is -1 or a valid index in the linked-list."
  ],
  "starterCode": {
    "javascript": "function hasCycle(head) {\n    // Write your code here\n}",
    "typescript": "function hasCycle(head: ListNode | null): boolean {\n    // Write your code here\n}",
    "python": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef hasCycle(head):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public boolean hasCycle(ListNode head) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        // Write your code here\n    }\n};",
    "c": "// Define ListNode structure if needed\n// Implementation left for user",
    "csharp": "public class Solution {\n    public bool HasCycle(ListNode head) {\n        // Write your code here\n    }\n}",
    "go": "func hasCycle(head *ListNode) bool {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn has_cycle(head: Option<Box<ListNode>>) -> bool {\n        // Write your code here\n    }\n}",
    "ruby": "def has_cycle(head)\n    # Write your code here\nend",
    "php": "<?php\nfunction hasCycle($head) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func hasCycle(_ head: ListNode?) -> Bool {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun hasCycle(head: ListNode?): Boolean {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[3,2,0,-4],1], "expected": true },
    { "input": [[1,2],0], "expected": true },
    { "input": [[1],-1], "expected": false },
    { "input": [[],-1], "expected": false },
    { "input": [[1,2,3,4,5],2], "expected": true },
    { "input": [[1,2,3,4,5],-1], "expected": false }
  ]
},
{
  "id": "climbing-stairs",
  "title": "10. Climbing Stairs",
  "difficulty": "Easy",
  "category": ["Dynamic Programming", "Math"],
  "status": "Not Started",
  "function": { "name": "climbStairs", "params": ["n"] },
  "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb **1 or 2 steps**. In how many distinct ways can you climb to the top?",
  "examples": [
    {
      "input": "n = 2",
      "output": "2",
      "explanation": "There are two ways: 1+1 or 2."
    },
    {
      "input": "n = 3",
      "output": "3",
      "explanation": "Three ways: 1+1+1, 1+2, 2+1."
    }
  ],
  "constraints": [
    "1 <= n <= 45"
  ],
  "starterCode": {
    "javascript": "function climbStairs(n) {\n    // Write your code here\n}",
    "typescript": "function climbStairs(n: number): number {\n    // Write your code here\n}",
    "python": "def climbStairs(n):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your code here\n    }\n};",
    "c": "#include <stdlib.h>\n\nint climbStairs(int n) {\n    // Write your code here\n}",
    "csharp": "public class Solution {\n    public int ClimbStairs(int n) {\n        // Write your code here\n    }\n}",
    "go": "func climbStairs(n int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn climb_stairs(n: i32) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def climb_stairs(n)\n    # Write your code here\nend",
    "php": "<?php\nfunction climbStairs($n) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func climbStairs(_ n: Int) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun climbStairs(n: Int): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [2], "expected": 2 },
    { "input": [3], "expected": 3 },
    { "input": [1], "expected": 1 },
    { "input": [4], "expected": 5 },
    { "input": [5], "expected": 8 },
    { "input": [10], "expected": 89 },
    { "input": [20], "expected": 10946 }
  ]
},

// mediam problems 

{
  "id": "add-two-numbers",
  "title": "11. Add Two Numbers",
  "difficulty": "Medium",
  "category": ["Linked List", "Math"],
  "status": "Not Started",
  "function": { "name": "addTwoNumbers", "params": ["l1", "l2"] },
  "description": "You are given two **non-empty linked lists** representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zeros, except the number 0 itself.",
  "examples": [
    {
      "input": "l1 = [2,4,3], l2 = [5,6,4]",
      "output": "[7,0,8]",
      "explanation": "342 + 465 = 807. The linked list in reverse order is [7,0,8]."
    },
    {
      "input": "l1 = [0], l2 = [0]",
      "output": "[0]"
    },
    {
      "input": "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
      "output": "[8,9,9,9,0,0,0,1]"
    }
  ],
  "constraints": [
    "The number of nodes in each linked list is in the range [1, 100].",
    "0 <= Node.val <= 9",
    "It is guaranteed that the list represents a number that does not have leading zeros."
  ],
  "starterCode": {
    "javascript": "function addTwoNumbers(l1, l2) {\n    // Write your code here\n}",
    "typescript": "function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {\n    // Write your code here\n}",
    "python": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef addTwoNumbers(l1, l2):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        // Write your code here\n    }\n};",
    "c": "// Define ListNode structure if needed\n// Implementation left for user",
    "csharp": "public class Solution {\n    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your code here\n    }\n}",
    "go": "func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {\n        // Write your code here\n    }\n}",
    "ruby": "def add_two_numbers(l1, l2)\n    # Write your code here\nend",
    "php": "<?php\nfunction addTwoNumbers($l1, $l2) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[[2,4,3],[5,6,4]]], "expected": [7,0,8] }, // normal case, same length, no extra node at end
    { "input": [[[0],[0]]], "expected": [0] }, // zeros
    { "input": [[[9,9,9,9,9,9,9],[9,9,9,9]]], "expected": [8,9,9,9,0,0,0,1] }, // different length with carry
    { "input": [[[1],[9,9]]], "expected": [0,0,1] }, // different length, carry to extra node
    { "input": [[[2,4,9],[5,6,4,9]]], "expected": [7,0,4,0,1] }, // different length with carry
    { "input": [[[1,2,3],[4,5,6]]], "expected": [5,7,9] }, // same length, no carry to extra
    { "input": [[[9,9],[1]]], "expected": [0,0,1] }, // single digit sum causing extra node
    { "input": [[[0,1],[0,1]]], "expected": [0,2] }, // zeros in front with carry
    { "input": [[[5],[5]]], "expected": [0,1] }, // single node with carry
    { "input": [[[1,8],[0]]], "expected": [1,8] }, // sum without carry, second list single node
    { "input": [[[9,1],[1,9]]], "expected": [0,1,1] } // sum with carry in middle
  ]
},
{
  "id": "longest-substring-without-repeating-characters",
  "title": "12. Longest Substring Without Repeating Characters",
  "difficulty": "Medium",
  "category": ["String", "Sliding Window", "Hash Table"],
  "status": "Not Started",
  "function": { "name": "lengthOfLongestSubstring", "params": ["s"] },
  "description": "Given a string `s`, find the length of the **longest substring without repeating characters**.",
  "examples": [
    {
      "input": "s = \"abcabcbb\"",
      "output": "3",
      "explanation": "The answer is \"abc\", with length 3."
    },
    {
      "input": "s = \"bbbbb\"",
      "output": "1",
      "explanation": "The answer is \"b\", with length 1."
    },
    {
      "input": "s = \"pwwkew\"",
      "output": "3",
      "explanation": "The answer is \"wke\", with length 3. Note that the answer must be a substring, not a subsequence."
    }
  ],
  "constraints": [
    "0 <= s.length <= 10⁵",
    "s consists of English letters, digits, symbols, and spaces."
  ],
  "starterCode": {
    "javascript": "function lengthOfLongestSubstring(s) {\n    // Write your code here\n}",
    "typescript": "function lengthOfLongestSubstring(s: string): number {\n    // Write your code here\n}",
    "python": "def lengthOfLongestSubstring(s):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int LengthOfLongestSubstring(string s) {\n        // Write your code here\n    }\n}",
    "go": "func lengthOfLongestSubstring(s string) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn length_of_longest_substring(s: String) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def length_of_longest_substring(s)\n    # Write your code here\nend",
    "php": "<?php\nfunction lengthOfLongestSubstring($s) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func lengthOfLongestSubstring(_ s: String) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun lengthOfLongestSubstring(s: String): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": ["abcabcbb"], "expected": 3 },
    { "input": ["bbbbb"], "expected": 1 },
    { "input": ["pwwkew"], "expected": 3 },
    { "input": ["abcdef"], "expected": 6 },
    { "input": [""], "expected": 0 },
    { "input": [" "], "expected": 1 },
    { "input": ["aab"], "expected": 2 },
    { "input": ["dvdf"], "expected": 3 },
    { "input": ["anviaj"], "expected": 5 },
    { "input": ["tmmzuxt"], "expected": 5 },
    { "input": ["au"], "expected": 2 },
    { "input": ["abba"], "expected": 2 },
    { "input": ["abcadefghij"], "expected": 10 }
  ]
},
{
  "id": "3sum",
  "title": "13. 3Sum",
  "difficulty": "Medium",
  "category": ["Array", "Two Pointers", "Sorting"],
  "status": "Not Started",
  "function": { "name": "threeSum", "params": ["nums"] },
  "description": "Given an integer array `nums`, return **all the triplets** `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, `j != k` and `nums[i] + nums[j] + nums[k] == 0`. Notice that the solution set must **not contain duplicate triplets**.",
  "examples": [
    {
      "input": "nums = [-1,0,1,2,-1,-4]",
      "output": "[[-1,-1,2],[-1,0,1]]"
    },
    {
      "input": "nums = []",
      "output": "[]"
    },
    {
      "input": "nums = [0]",
      "output": "[]"
    }
  ],
  "constraints": [
    "0 <= nums.length <= 3000",
    "-10⁵ <= nums[i] <= 10⁵"
  ],
  "starterCode": {
    "javascript": "function threeSum(nums) {\n    // Write your code here\n}",
    "typescript": "function threeSum(nums: number[]): number[][] {\n    // Write your code here\n}",
    "python": "def threeSum(nums):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public IList<IList<int>> ThreeSum(int[] nums) {\n        // Write your code here\n    }\n}",
    "go": "func threeSum(nums []int) [][]int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {\n        // Write your code here\n    }\n}",
    "ruby": "def three_sum(nums)\n    # Write your code here\nend",
    "php": "<?php\nfunction threeSum($nums) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func threeSum(_ nums: [Int]) -> [[Int]] {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun threeSum(nums: IntArray): List<List<Int>> {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[-1,0,1,2,-1,-4]], "expected": [[-1,-1,2],[-1,0,1]] },
    { "input": [[0,0,0]], "expected": [[0,0,0]] },
    { "input": [[]], "expected": [] },
    { "input": [[0]], "expected": [] },
    { "input": [[1,-1,-1,0]], "expected": [[-1,0,1]] },
    { "input": [[-2,0,1,1,2]], "expected": [[-2,0,2],[-2,1,1]] },
    { "input": [[-1,0,1,0]], "expected": [[-1,0,1]] },
    { "input": [[3,-2,1,0]], "expected": [] },
    { "input": [[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]], "expected": [[-4,-2,6],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,0,2]] }
  ]
},
{
  "id": "container-with-most-water",
  "title": "14. Container With Most Water",
  "difficulty": "Medium",
  "category": ["Array", "Two Pointers"],
  "status": "Not Started",
  "function": { "name": "maxArea", "params": ["height"] },
  "description": "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`. Find **two lines that together with the x-axis form a container**, such that the container contains the **most water**. Return the maximum amount of water a container can store.",
  "examples": [
    {
      "input": "height = [1,8,6,2,5,4,8,3,7]",
      "output": "49"
    },
    {
      "input": "height = [1,1]",
      "output": "1"
    },
    {
      "input": "height = [4,3,2,1,4]",
      "output": "16"
    }
  ],
  "constraints": [
    "n == height.length",
    "2 <= n <= 10⁵",
    "0 <= height[i] <= 10⁴"
  ],
  "starterCode": {
    "javascript": "function maxArea(height) {\n    // Write your code here\n}",
    "typescript": "function maxArea(height: number[]): number {\n    // Write your code here\n}",
    "python": "def maxArea(height):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int maxArea(int[] height) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int MaxArea(int[] height) {\n        // Write your code here\n    }\n}",
    "go": "func maxArea(height []int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn max_area(height: Vec<i32>) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def max_area(height)\n    # Write your code here\nend",
    "php": "<?php\nfunction maxArea($height) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func maxArea(_ height: [Int]) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun maxArea(height: IntArray): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[1,8,6,2,5,4,8,3,7]], "expected": 49 },
    { "input": [[1,1]], "expected": 1 },
    { "input": [[4,3,2,1,4]], "expected": 16 },
    { "input": [[1,2,1]], "expected": 2 },
    { "input": [[1,2,4,3]], "expected": 4 },
    { "input": [[0,1,0,2,1,0,3,2,0,4]], "expected": 16 },
    { "input": [[1,2,1,3,2,5,1]], "expected": 6 },
    { "input": [[1,3,2,5,25,24,5]], "expected": 24 },
    { "input": [[1,1,1,1,1,1]], "expected": 5 },
    { "input": [[5,4,3,2,1,1,2,3,4,5]], "expected": 25 }
  ]
},
{
  "id": "group-anagrams",
  "title": "49. Group Anagrams",
  "difficulty": "Medium",
  "category": ["Array", "Hash Table", "String", "Sorting"],
  "status": "Not Started",
  "function": { "name": "groupAnagrams", "params": ["strs"] },
  "description": "Given an array of strings `strs`, group the **anagrams** together. You can return the answer in **any order**.",
  "examples": [
    {
      "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
      "output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]"
    },
    {
      "input": "strs = [\"\"]",
      "output": "[[\"\"]]"
    },
    {
      "input": "strs = [\"a\"]",
      "output": "[[\"a\"]]"
    }
  ],
  "constraints": [
    "1 <= strs.length <= 10⁴",
    "0 <= strs[i].length <= 100",
    "strs[i] consists of lowercase English letters."
  ],
  "starterCode": {
    "javascript": "function groupAnagrams(strs) {\n    // Write your code here\n}",
    "typescript": "function groupAnagrams(strs: string[]): string[][] {\n    // Write your code here\n}",
    "python": "def groupAnagrams(strs):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public IList<IList<string>> GroupAnagrams(string[] strs) {\n        // Write your code here\n    }\n}",
    "go": "func groupAnagrams(strs []string) [][]string {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {\n        // Write your code here\n    }\n}",
    "ruby": "def group_anagrams(strs)\n    # Write your code here\nend",
    "php": "<?php\nfunction groupAnagrams($strs) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func groupAnagrams(_ strs: [String]) -> [[String]] {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun groupAnagrams(strs: Array<String>): List<List<String>> {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [["eat","tea","tan","ate","nat","bat"]], "expected": [["eat","tea","ate"],["tan","nat"],["bat"]] },
    { "input": [[""]], "expected": [[""]] },
    { "input": [["a"]], "expected": [["a"]] },
    { "input": [["abc","bca","cab","xyz","zyx"]], "expected": [["abc","bca","cab"],["xyz","zyx"]] },
    { "input": [["listen","silent","enlist","google","gogole"]], "expected": [["listen","silent","enlist"],["google","gogole"]] },
    { "input": [["abcd","dcba","bcad","efgh","fegh","efhg"]], "expected": [["abcd","dcba","bcad"],["efgh","fegh","efhg"]] },
    { "input": [["a","b","c","a"]], "expected": [["a","a"],["b"],["c"]] },
    { "input": [["aaa","aaa","aa"]], "expected": [["aaa","aaa"],["aa"]] },
    { "input": [["rat","tar","art","car","arc"]], "expected": [["rat","tar","art"],["car","arc"]] },
    { "input": [["bat","tab","bat","tab","abt"]], "expected": [["bat","tab","bat","tab","abt"]] }
  ]
},
{
  "id": "insert-interval",
  "title": "57. Insert Interval",
  "difficulty": "Medium",
  "category": ["Array", "Sorting", "Intervals"],
  "status": "Not Started",
  "function": { "name": "insertInterval", "params": ["intervals", "newInterval"] },
  "description": "Given a **non-overlapping interval list** `intervals` sorted by start times, and a new interval `newInterval`, **insert** `newInterval` into `intervals` and **merge if necessary**. Return the resulting intervals sorted by start time.",
  "examples": [
    {
      "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
      "output": "[[1,5],[6,9]]",
      "explanation": "The new interval [2,5] overlaps with [1,3], so they merge to [1,5]."
    },
    {
      "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
      "output": "[[1,2],[3,10],[12,16]]",
      "explanation": "The new interval overlaps with [3,5],[6,7],[8,10], merging to [3,10]."
    },
    {
      "input": "intervals = [], newInterval = [5,7]",
      "output": "[[5,7]]"
    }
  ],
  "constraints": [
    "0 <= intervals.length <= 10⁴",
    "intervals[i].length == 2",
    "0 <= intervals[i][0] <= intervals[i][1] <= 10⁵",
    "intervals is sorted by intervals[i][0]",
    "newInterval.length == 2",
    "0 <= newInterval[0] <= newInterval[1] <= 10⁵"
  ],
  "starterCode": {
    "javascript": "function insertInterval(intervals, newInterval) {\n    // Write your code here\n}",
    "typescript": "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n    // Write your code here\n}",
    "python": "def insertInterval(intervals, newInterval):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int[][] Insert(int[][] intervals, int[] newInterval) {\n        // Write your code here\n    }\n}",
    "go": "func insertInterval(intervals [][]int, newInterval []int) [][]int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {\n        // Write your code here\n    }\n}",
    "ruby": "def insert_interval(intervals, new_interval)\n    # Write your code here\nend",
    "php": "<?php\nfunction insertInterval($intervals, $newInterval) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func insert(_ intervals: [[Int]], _ newInterval: [Int]) -> [[Int]] {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun insert(intervals: Array<IntArray>, newInterval: IntArray): Array<IntArray> {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[[1,3],[6,9]], [2,5]], "expected": [[1,5],[6,9]] },
    { "input": [[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]], "expected": [[1,2],[3,10],[12,16]] },
    { "input": [[], [5,7]], "expected": [[5,7]] },
    { "input": [[[1,5]], [2,3]], "expected": [[1,5]] },
    { "input": [[[1,5]], [2,7]], "expected": [[1,7]] },
    { "input": [[[1,2],[3,5]], [6,7]], "expected": [[1,2],[3,5],[6,7]] },
    { "input": [[[1,2],[3,5]], [0,0]], "expected": [[0,0],[1,2],[3,5]] },
    { "input": [[[1,5],[6,8]], [0,9]], "expected": [[0,9]] },
    { "input": [[[1,5],[6,8]], [2,3]], "expected": [[1,5],[6,8]] },
    { "input": [[[1,5],[6,8]], [5,6]], "expected": [[1,8]] }
  ]
},
{
  "id": "kth-largest-element-in-an-array",
  "title": "215. Kth Largest Element in an Array",
  "difficulty": "Medium",
  "category": ["Array", "Heap", "Divide and Conquer", "Sorting"],
  "status": "Not Started",
  "function": { "name": "findKthLargest", "params": ["nums", "k"] },
  "description": "Given an integer array `nums` and an integer `k`, return the **kth largest element** in the array. Note that it is the kth largest element in the **sorted order**, not the kth distinct element.",
  "examples": [
    {
      "input": "nums = [3,2,1,5,6,4], k = 2",
      "output": "5"
    },
    {
      "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
      "output": "4"
    }
  ],
  "constraints": [
    "1 <= k <= nums.length <= 10⁵",
    "-10⁴ <= nums[i] <= 10⁴"
  ],
  "starterCode": {
    "javascript": "function findKthLargest(nums, k) {\n    // Write your code here\n}",
    "typescript": "function findKthLargest(nums: number[], k: number): number {\n    // Write your code here\n}",
    "python": "def findKthLargest(nums, k):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int FindKthLargest(int[] nums, int k) {\n        // Write your code here\n    }\n}",
    "go": "func findKthLargest(nums []int, k int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def find_kth_largest(nums, k)\n    # Write your code here\nend",
    "php": "<?php\nfunction findKthLargest($nums, $k) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func findKthLargest(_ nums: [Int], _ k: Int) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun findKthLargest(nums: IntArray, k: Int): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[3,2,1,5,6,4], 2], "expected": 5 },
    { "input": [[3,2,3,1,2,4,5,5,6], 4], "expected": 4 },
    { "input": [[1], 1], "expected": 1 },
    { "input": [[2,1], 2], "expected": 1 },
    { "input": [[2,1], 1], "expected": 2 },
    { "input": [[3,2,3,1,2,4,5,5,6], 1], "expected": 6 },
    { "input": [[3,2,3,1,2,4,5,5,6], 9], "expected": 1 },
    { "input": [[7,6,5,4,3,2,1], 3], "expected": 5 },
    { "input": [[10,9,8,7,6,5], 5], "expected": 6 },
    { "input": [[2,4,6,8,10,12,14,16], 4], "expected": 10 }
  ]
},
{
  "id": "product-of-array-except-self",
  "title": "238. Product of Array Except Self",
  "difficulty": "Medium",
  "category": ["Array", "Prefix Sum"],
  "status": "Not Started",
  "function": { "name": "productExceptSelf", "params": ["nums"] },
  "description": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the **product of all the elements of `nums` except `nums[i]`**. The solution must be **without using division** and in **O(n)** time complexity.",
  "examples": [
    {
      "input": "nums = [1,2,3,4]",
      "output": "[24,12,8,6]"
    },
    {
      "input": "nums = [-1,1,0,-3,3]",
      "output": "[0,0,9,0,0]"
    }
  ],
  "constraints": [
    "2 <= nums.length <= 10⁵",
    "-30 <= nums[i] <= 30",
    "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."
  ],
  "starterCode": {
    "javascript": "function productExceptSelf(nums) {\n    // Write your code here\n}",
    "typescript": "function productExceptSelf(nums: number[]): number[] {\n    // Write your code here\n}",
    "python": "def productExceptSelf(nums):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int[] ProductExceptSelf(int[] nums) {\n        // Write your code here\n    }\n}",
    "go": "func productExceptSelf(nums []int) []int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {\n        // Write your code here\n    }\n}",
    "ruby": "def product_except_self(nums)\n    # Write your code here\nend",
    "php": "<?php\nfunction productExceptSelf($nums) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func productExceptSelf(_ nums: [Int]) -> [Int] {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun productExceptSelf(nums: IntArray): IntArray {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[1,2,3,4]], "expected": [24,12,8,6] },
    { "input": [[-1,1,0,-3,3]], "expected": [0,0,9,0,0] },
    { "input": [[1,1,1,1]], "expected": [1,1,1,1] },
    { "input": [[2,3,4,5]], "expected": [60,40,30,24] },
    { "input": [[1,0]], "expected": [0,1] },
    { "input": [[0,0]], "expected": [0,0] },
    { "input": [[-1,-2,-3,-4]], "expected": [-24,-12,-8,-6] },
    { "input": [[1,2,3,0]], "expected": [0,0,0,6] },
    { "input": [[1,2,3,4,5]], "expected": [120,60,40,30,24] },
    { "input": [[10,5,2]], "expected": [10,20,50] }
  ]
},
{
  "id": "sort-colors",
  "title": "75. Sort Colors",
  "difficulty": "Medium",
  "category": ["Array", "Two Pointers", "Sorting"],
  "status": "Not Started",
  "function": { "name": "sortColors", "params": ["nums"] },
  "description": "Given an array `nums` with `n` objects colored **red**, **white**, or **blue** (represented as 0, 1, and 2), sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue. You must solve this **without using the library's sort function**.",
  "examples": [
    {
      "input": "nums = [2,0,2,1,1,0]",
      "output": "[0,0,1,1,2,2]"
    },
    {
      "input": "nums = [2,0,1]",
      "output": "[0,1,2]"
    },
    {
      "input": "nums = [0]",
      "output": "[0]"
    },
    {
      "input": "nums = [1]",
      "output": "[1]"
    }
  ],
  "constraints": [
    "n == nums.length",
    "1 <= n <= 300",
    "nums[i] is 0, 1, or 2."
  ],
  "starterCode": {
    "javascript": "function sortColors(nums) {\n    // Write your code here\n}",
    "typescript": "function sortColors(nums: number[]): void {\n    // Write your code here\n}",
    "python": "def sortColors(nums):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public void sortColors(int[] nums) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public void SortColors(int[] nums) {\n        // Write your code here\n    }\n}",
    "go": "func sortColors(nums []int) {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn sort_colors(nums: &mut Vec<i32>) {\n        // Write your code here\n    }\n}",
    "ruby": "def sort_colors(nums)\n    # Write your code here\nend",
    "php": "<?php\nfunction sortColors(&$nums) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func sortColors(_ nums: inout [Int]) {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun sortColors(nums: IntArray) {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[2,0,2,1,1,0]], "expected": [0,0,1,1,2,2] },
    { "input": [[2,0,1]], "expected": [0,1,2] },
    { "input": [[0]], "expected": [0] },
    { "input": [[1]], "expected": [1] },
    { "input": [[1,2,0]], "expected": [0,1,2] },
    { "input": [[0,2,1,2,0,1,1]], "expected": [0,0,1,1,1,2,2] },
    { "input": [[2,2,1,1,0,0]], "expected": [0,0,1,1,2,2] },
    { "input": [[0,1,2,0,1,2]], "expected": [0,0,1,1,2,2] },
    { "input": [[0,0,0,1,1,2,2,2]], "expected": [0,0,0,1,1,2,2,2] },
    { "input": [[2,1,0]], "expected": [0,1,2] }
  ]
},
{
  "id": "find-first-and-last-position-of-element-in-sorted-array",
  "title": "34. Find First and Last Position of Element in Sorted Array",
  "difficulty": "Medium",
  "category": ["Array", "Binary Search"],
  "status": "Not Started",
  "function": { "name": "searchRange", "params": ["nums", "target"] },
  "description": "Given an array of integers `nums` sorted in ascending order, and a target value `target`, **find the starting and ending position** of a given target value. If the target is not found in the array, return `[-1, -1]`. Your algorithm must run in **O(log n)** time complexity.",
  "examples": [
    {
      "input": "nums = [5,7,7,8,8,10], target = 8",
      "output": "[3,4]"
    },
    {
      "input": "nums = [5,7,7,8,8,10], target = 6",
      "output": "[-1,-1]"
    },
    {
      "input": "nums = [], target = 0",
      "output": "[-1,-1]"
    }
  ],
  "constraints": [
    "0 <= nums.length <= 10⁵",
    "-10⁹ <= nums[i] <= 10⁹",
    "nums is a non-decreasing array.",
    "-10⁹ <= target <= 10⁹"
  ],
  "starterCode": {
    "javascript": "function searchRange(nums, target) {\n    // Write your code here\n}",
    "typescript": "function searchRange(nums: number[], target: number): number[] {\n    // Write your code here\n}",
    "python": "def searchRange(nums, target):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    vector<int> searchRange(vector<int>& nums, int target) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int[] SearchRange(int[] nums, int target) {\n        // Write your code here\n    }\n}",
    "go": "func searchRange(nums []int, target int) []int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {\n        // Write your code here\n    }\n}",
    "ruby": "def search_range(nums, target)\n    # Write your code here\nend",
    "php": "<?php\nfunction searchRange($nums, $target) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func searchRange(_ nums: [Int], _ target: Int) -> [Int] {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun searchRange(nums: IntArray, target: Int): IntArray {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[5,7,7,8,8,10], 8], "expected": [3,4] },
    { "input": [[5,7,7,8,8,10], 6], "expected": [-1,-1] },
    { "input": [[], 0], "expected": [-1,-1] },
    { "input": [[1], 1], "expected": [0,0] },
    { "input": [[1,2,3,3,3,4,5], 3], "expected": [2,4] },
    { "input": [[1,2,3,3,3,4,5], 1], "expected": [0,0] },
    { "input": [[1,2,3,3,3,4,5], 5], "expected": [6,6] },
    { "input": [[1,2,3,3,3,4,5], 6], "expected": [-1,-1] },
    { "input": [[2,2,2,2], 2], "expected": [0,3] },
    { "input": [[1,2,3,4,5,6], 4], "expected": [3,3] }
  ]
},
{
  "id": "minimum-path-sum",
  "title": "64. Minimum Path Sum",
  "difficulty": "Medium",
  "category": ["Array", "Dynamic Programming"],
  "status": "Not Started",
  "function": { "name": "minPathSum", "params": ["grid"] },
  "description": "Given a `m x n` grid filled with non-negative numbers, find a path from top-left to bottom-right, which **minimizes the sum of all numbers along its path**. You can only move **down or right** at any point in time.",
  "examples": [
    {
      "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
      "output": "7",
      "explanation": "The path 1→3→1→1→1 minimizes the sum."
    },
    {
      "input": "grid = [[1,2,3],[4,5,6]]",
      "output": "12"
    }
  ],
  "constraints": [
    "m == grid.length",
    "n == grid[i].length",
    "1 <= m, n <= 200",
    "0 <= grid[i][j] <= 100"
  ],
  "starterCode": {
    "javascript": "function minPathSum(grid) {\n    // Write your code here\n}",
    "typescript": "function minPathSum(grid: number[][]): number {\n    // Write your code here\n}",
    "python": "def minPathSum(grid):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int minPathSum(int[][] grid) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int minPathSum(vector<vector<int>>& grid) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int MinPathSum(int[][] grid) {\n        // Write your code here\n    }\n}",
    "go": "func minPathSum(grid [][]int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def min_path_sum(grid)\n    # Write your code here\nend",
    "php": "<?php\nfunction minPathSum($grid) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func minPathSum(_ grid: [[Int]]) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun minPathSum(grid: Array<IntArray>): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[[1,3,1],[1,5,1],[4,2,1]]], "expected": 7 },
    { "input": [[[1,2,3],[4,5,6]]], "expected": 12 },
    { "input": [[[0]]], "expected": 0 },
    { "input": [[[1]]], "expected": 1 },
    { "input": [[[1,2],[1,1]]], "expected": 3 },
    { "input": [[[1,3,1],[1,5,1]]], "expected": 6 },
    { "input": [[[1,2,5],[3,2,1]]], "expected": 6 },
    { "input": [[[1,2,3],[4,5,6],[7,8,9]]], "expected": 21 },
    { "input": [[[1,3],[2,4]]], "expected": 7 },
    { "input": [[[1,2,3,4],[2,2,3,1],[1,1,1,1]]], "expected": 8 }
  ]
},
{
  "id": "subarray-sum-equals-k",
  "title": "560. Subarray Sum Equals K",
  "difficulty": "Medium",
  "category": ["Array", "Hash Table", "Prefix Sum"],
  "status": "Not Started",
  "function": { "name": "subarraySum", "params": ["nums", "k"] },
  "description": "Given an integer array `nums` and an integer `k`, return **the total number of continuous subarrays whose sum equals to `k`**.",
  "examples": [
    {
      "input": "nums = [1,1,1], k = 2",
      "output": "2"
    },
    {
      "input": "nums = [1,2,3], k = 3",
      "output": "2"
    }
  ],
  "constraints": [
    "1 <= nums.length <= 2 * 10⁴",
    "-1000 <= nums[i] <= 1000",
    "-10⁷ <= k <= 10⁷"
  ],
  "starterCode": {
    "javascript": "function subarraySum(nums, k) {\n    // Write your code here\n}",
    "typescript": "function subarraySum(nums: number[], k: number): number {\n    // Write your code here\n}",
    "python": "def subarraySum(nums, k):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int subarraySum(int[] nums, int k) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int SubarraySum(int[] nums, int k) {\n        // Write your code here\n    }\n}",
    "go": "func subarraySum(nums []int, k int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def subarray_sum(nums, k)\n    # Write your code here\nend",
    "php": "<?php\nfunction subarraySum($nums, $k) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func subarraySum(_ nums: [Int], _ k: Int) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun subarraySum(nums: IntArray, k: Int): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[1,1,1], 2], "expected": 2 },
    { "input": [[1,2,3], 3], "expected": 2 },
    { "input": [[1,2,1,2,1], 3], "expected": 4 },
    { "input": [[-1,-1,1], 0], "expected": 1 },
    { "input": [[1], 0], "expected": 0 },
    { "input": [[1,2,3,4,5], 9], "expected": 2 },
    { "input": [[1,1,1,1,1], 3], "expected": 3 },
    { "input": [[1000,-1000,0,1000,-1000], 0], "expected": 3 },
    { "input": [[1,2,3,0,0], 3], "expected": 4 },
    { "input": [[1,2,1,2,1,2], 3], "expected": 5 }
  ]
},

//hard problems:
{
  "id": "median-of-two-sorted-arrays",
  "title": "4. Median of Two Sorted Arrays",
  "difficulty": "Hard",
  "category": ["Array", "Binary Search", "Divide and Conquer"],
  "status": "Not Started",
  "function": { "name": "findMedianSortedArrays", "params": ["nums1", "nums2"] },
  "description": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the **median** of the two sorted arrays. The overall run time complexity should be **O(log (m+n))**.",
  "examples": [
    {
      "input": "nums1 = [1,3], nums2 = [2]",
      "output": "2.0",
      "explanation": "Merged array = [1,2,3], median is 2."
    },
    {
      "input": "nums1 = [1,2], nums2 = [3,4]",
      "output": "2.5",
      "explanation": "Merged array = [1,2,3,4], median = (2+3)/2 = 2.5."
    }
  ],
  "constraints": [
    "nums1.length == m",
    "nums2.length == n",
    "0 <= m, n <= 1000",
    "1 <= m + n <= 2000",
    "-10^6 <= nums1[i], nums2[i] <= 10^6"
  ],
  "starterCode": {
    "javascript": "function findMedianSortedArrays(nums1, nums2) {\n    // Write your code here\n}",
    "typescript": "function findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n    // Write your code here\n}",
    "python": "def findMedianSortedArrays(nums1, nums2):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n    }\n}",
    "go": "func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {\n        // Write your code here\n    }\n}",
    "ruby": "def find_median_sorted_arrays(nums1, nums2)\n    # Write your code here\nend",
    "php": "<?php\nfunction findMedianSortedArrays($nums1, $nums2) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[1,3], [2]], "expected": 2.0 },
    { "input": [[1,2], [3,4]], "expected": 2.5 },
    { "input": [[], [1]], "expected": 1.0 },
    { "input": [[2], []], "expected": 2.0 },
    { "input": [[0,0], [0,0]], "expected": 0.0 },
    { "input": [[1,2,3,4,5], [6,7,8,9,10]], "expected": 5.5 },
    { "input": [[1,3,5], [2,4,6]], "expected": 3.5 },
    { "input": [[1,2], [1,2,3]], "expected": 2.0 },
    { "input": [[1,2,3], [4,5,6,7,8]], "expected": 4.5 },
    { "input": [[-5,3,6], [-2,0,2,7]], "expected": 2.0 },
    { "input": [[1,1,1,1], [1,1,1,1]], "expected": 1.0 },
    { "input": [[1000000], [1000000]], "expected": 1000000.0 }
  ]
},
{
  "id": "trapping-rain-water",
  "title": "42. Trapping Rain Water",
  "difficulty": "Hard",
  "category": ["Array", "Two Pointers", "Dynamic Programming", "Stack"],
  "status": "Not Started",
  "function": { "name": "trap", "params": ["height"] },
  "description": "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute **how much water it can trap after raining**.",
  "examples": [
    {
      "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
      "output": "6",
      "explanation": "6 units of water are trapped between the bars."
    },
    {
      "input": "height = [4,2,0,3,2,5]",
      "output": "9"
    }
  ],
  "constraints": [
    "n == height.length",
    "0 <= n <= 3 * 10⁴",
    "0 <= height[i] <= 10⁵"
  ],
  "starterCode": {
    "javascript": "function trap(height) {\n    // Write your code here\n}",
    "typescript": "function trap(height: number[]): number {\n    // Write your code here\n}",
    "python": "def trap(height):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int Trap(int[] height) {\n        // Write your code here\n    }\n}",
    "go": "func trap(height []int) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn trap(height: Vec<i32>) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def trap(height)\n    # Write your code here\nend",
    "php": "<?php\nfunction trap($height) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func trap(_ height: [Int]) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun trap(height: IntArray): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[0,1,0,2,1,0,1,3,2,1,2,1]], "expected": 6 },
    { "input": [[4,2,0,3,2,5]], "expected": 9 },
    { "input": [[0,0,0,0]], "expected": 0 },
    { "input": [[1,2,3,4,5]], "expected": 0 },
    { "input": [[5,4,3,2,1]], "expected": 0 },
    { "input": [[2,0,2]], "expected": 2 },
    { "input": [[3,0,1,3,0,5]], "expected": 8 },
    { "input": [[0,1,0,1,0,1,0]], "expected": 2 },
    { "input": [[0]], "expected": 0 },
    { "input": [[1]], "expected": 0 },
    { "input": [[1,0,2,1,0,1,3,2,1,2,1]], "expected": 6 }
  ]
},
{
  "id": "merge-k-sorted-lists",
  "title": "23. Merge k Sorted Lists",
  "difficulty": "Hard",
  "category": ["Linked List", "Heap", "Divide and Conquer"],
  "status": "Not Started",
  "function": { "name": "mergeKLists", "params": ["lists"] },
  "description": "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into **one sorted linked list** and return it.",
  "examples": [
    {
      "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
      "output": "[1,1,2,3,4,4,5,6]"
    },
    {
      "input": "lists = []",
      "output": "[]"
    },
    {
      "input": "lists = [[]]",
      "output": "[]"
    }
  ],
  "constraints": [
    "k == lists.length",
    "0 <= k <= 10⁴",
    "0 <= lists[i].length <= 500",
    "-10⁴ <= lists[i][j] <= 10⁴",
    "lists[i] is sorted in ascending order",
    "The sum of lists[i].length won't exceed 10⁴"
  ],
  "starterCode": {
    "javascript": "function mergeKLists(lists) {\n    // Write your code here\n}",
    "typescript": "function mergeKLists(lists: Array<ListNode | null>): ListNode | null {\n    // Write your code here\n}",
    "python": "def mergeKLists(lists):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public ListNode MergeKLists(ListNode[] lists) {\n        // Write your code here\n    }\n}",
    "go": "func mergeKLists(lists []*ListNode) *ListNode {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {\n        // Write your code here\n    }\n}",
    "ruby": "def merge_k_lists(lists)\n    # Write your code here\nend",
    "php": "<?php\nfunction mergeKLists($lists) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func mergeKLists(_ lists: [ListNode?]) -> ListNode? {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun mergeKLists(lists: Array<ListNode?>): ListNode? {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[[1,4,5],[1,3,4],[2,6]]], "expected": [1,1,2,3,4,4,5,6] },
    { "input": [[]], "expected": [] },
    { "input": [[[]]], "expected": [] },
    { "input": [[[1],[2],[3]]], "expected": [1,2,3] },
    { "input": [[[5,6,7],[1,2,3],[4]]], "expected": [1,2,3,4,5,6,7] },
    { "input": [[[1,3,5],[2,4,6],[0,7,8]]], "expected": [0,1,2,3,4,5,6,7,8] },
    { "input": [[[1,2,3],[4,5,6],[7,8,9]]], "expected": [1,2,3,4,5,6,7,8,9] },
    { "input": [[[1,1,1],[1,1,1],[1,1,1]]], "expected": [1,1,1,1,1,1,1,1,1] },
    { "input": [[[0,0,0],[0,0],[0]]], "expected": [0,0,0,0,0,0] },
    { "input": [[[10,20],[5,15,25],[0,30]]], "expected": [0,5,10,15,20,25,30] }
  ]
},
{
  "id": "word-ladder",
  "title": "127. Word Ladder",
  "difficulty": "Medium",
  "category": ["Breadth-First Search", "Graph", "Queue"],
  "status": "Not Started",
  "function": { "name": "ladderLength", "params": ["beginWord", "endWord", "wordList"] },
  "description": "Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return **the number of words in the shortest transformation sequence from `beginWord` to `endWord`**. Rules: Only one letter can be changed at a time, and each transformed word must exist in `wordList`. Return 0 if no such sequence exists.",
  "examples": [
    {
      "input": "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
      "output": "5",
      "explanation": "'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog'"
    },
    {
      "input": "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log']",
      "output": "0",
      "explanation": "No possible transformation."
    }
  ],
  "constraints": [
    "1 <= beginWord.length <= 10",
    "endWord.length == beginWord.length",
    "1 <= wordList.length <= 5000",
    "wordList[i].length == beginWord.length",
    "beginWord, endWord, and wordList[i] consist of lowercase English letters",
    "beginWord != endWord",
    "All words in wordList are unique"
  ],
  "starterCode": {
    "javascript": "function ladderLength(beginWord, endWord, wordList) {\n    // Write your code here\n}",
    "typescript": "function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {\n    // Write your code here\n}",
    "python": "def ladderLength(beginWord, endWord, wordList):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int LadderLength(string beginWord, string endWord, IList<string> wordList) {\n        // Write your code here\n    }\n}",
    "go": "func ladderLength(beginWord string, endWord string, wordList []string) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def ladder_length(begin_word, end_word, word_list)\n    # Write your code here\nend",
    "php": "<?php\nfunction ladderLength($beginWord, $endWord, $wordList) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func ladderLength(_ beginWord: String, _ endWord: String, _ wordList: [String]) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun ladderLength(beginWord: String, endWord: String, wordList: List<String>): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": ["hit", "cog", ["hot","dot","dog","lot","log","cog"]], "expected": 5 },
    { "input": ["hit", "cog", ["hot","dot","dog","lot","log"]], "expected": 0 },
    { "input": ["a", "c", ["a","b","c"]], "expected": 2 },
    { "input": ["lost", "cost", ["most","fist","lost","cost","fish"]], "expected": 2 },
    { "input": ["game", "thee", ["gave","gape","tame","thee","fame","fate"]], "expected": 0 },
    { "input": ["hit", "hot", ["hot","dot","dog"]], "expected": 2 },
    { "input": ["red", "tax", ["ted","tex","red","tax","tad","den","rex","pee"]], "expected": 4 },
    { "input": ["a", "b", ["a","b","c"]], "expected": 2 },
    { "input": ["abc","xyz",["abc","ayz","xbz","xyz"]], "expected": 4 },
    { "input": ["lost","cost",["lost","cost","most"]], "expected": 2 }
  ]
},
{
  "id": "longest-valid-parentheses",
  "title": "32. Longest Valid Parentheses",
  "difficulty": "Hard",
  "category": ["String", "Stack", "Dynamic Programming"],
  "status": "Not Started",
  "function": { "name": "longestValidParentheses", "params": ["s"] },
  "description": "Given a string `s` containing just the characters `'('` and `')'`, return **the length of the longest valid (well-formed) parentheses substring**.",
  "examples": [
    {
      "input": "s = '(()'",
      "output": "2",
      "explanation": "The longest valid parentheses substring is '()'."
    },
    {
      "input": "s = ')()())'",
      "output": "4",
      "explanation": "The longest valid parentheses substring is '()()'."
    },
    {
      "input": "s = ''",
      "output": "0"
    }
  ],
  "constraints": [
    "0 <= s.length <= 3 * 10⁴",
    "s[i] is '(' or ')'"
  ],
  "starterCode": {
    "javascript": "function longestValidParentheses(s) {\n    // Write your code here\n}",
    "typescript": "function longestValidParentheses(s: string): number {\n    // Write your code here\n}",
    "python": "def longestValidParentheses(s):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int longestValidParentheses(String s) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    int longestValidParentheses(string s) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int LongestValidParentheses(string s) {\n        // Write your code here\n    }\n}",
    "go": "func longestValidParentheses(s string) int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn longest_valid_parentheses(s: String) -> i32 {\n        // Write your code here\n    }\n}",
    "ruby": "def longest_valid_parentheses(s)\n    # Write your code here\nend",
    "php": "<?php\nfunction longestValidParentheses($s) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func longestValidParentheses(_ s: String) -> Int {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun longestValidParentheses(s: String): Int {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": ["(()"], "expected": 2 },
    { "input": [")()())"], "expected": 4 },
    { "input": [""], "expected": 0 },
    { "input": ["()(()"], "expected": 2 },
    { "input": ["()()"], "expected": 4 },
    { "input": ["(()())"], "expected": 6 },
    { "input": ["((()())())"], "expected": 10 },
    { "input": [")())())"], "expected": 2 },
    { "input": ["()((())"], "expected": 4 },
    { "input": ["(()(((()"], "expected": 2 }
  ]
},
{
  "id": "sliding-window-maximum",
  "title": "239. Sliding Window Maximum",
  "difficulty": "Hard",
  "category": ["Array", "Sliding Window", "Heap", "Deque"],
  "status": "Not Started",
  "function": { "name": "maxSlidingWindow", "params": ["nums", "k"] },
  "description": "You are given an array `nums`, there is a sliding window of size `k` which moves from the left of the array to the right. You can only see the `k` numbers in the window. Return the **maximum value in each window** as it slides.",
  "examples": [
    {
      "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
      "output": "[3,3,5,5,6,7]",
      "explanation": "Window positions and max: [1 3 -1] -> 3, [3 -1 -3] -> 3, [ -1 -3 5] -> 5, [ -3 5 3] -> 5, [5 3 6] -> 6, [3 6 7] -> 7"
    },
    {
      "input": "nums = [1], k = 1",
      "output": "[1]"
    }
  ],
  "constraints": [
    "1 <= nums.length <= 10⁵",
    "-10⁴ <= nums[i] <= 10⁴",
    "1 <= k <= nums.length"
  ],
  "starterCode": {
    "javascript": "function maxSlidingWindow(nums, k) {\n    // Write your code here\n}",
    "typescript": "function maxSlidingWindow(nums: number[], k: number): number[] {\n    // Write your code here\n}",
    "python": "def maxSlidingWindow(nums, k):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public int[] MaxSlidingWindow(int[] nums, int k) {\n        // Write your code here\n    }\n}",
    "go": "func maxSlidingWindow(nums []int, k int) []int {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {\n        // Write your code here\n    }\n}",
    "ruby": "def max_sliding_window(nums, k)\n    # Write your code here\nend",
    "php": "<?php\nfunction maxSlidingWindow($nums, $k) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun maxSlidingWindow(nums: IntArray, k: Int): IntArray {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [[1,3,-1,-3,5,3,6,7], 3], "expected": [3,3,5,5,6,7] },
    { "input": [[1], 1], "expected": [1] },
    { "input": [[1,-1], 1], "expected": [1,-1] },
    { "input": [[9,11], 2], "expected": [11] },
    { "input": [[4,-2], 2], "expected": [4] },
    { "input": [[1,3,1,2,0,5], 3], "expected": [3,3,2,5] },
    { "input": [[1,3,-1,-3,5,3,6,7,8,9,10], 4], "expected": [3,5,5,6,7,8,9,10] },
    { "input": [[1,3,-1,-3,5,3,6,7], 1], "expected": [1,3,-1,-3,5,3,6,7] },
    { "input": [[1,3,-1,-3,5,3,6,7], 8], "expected": [7] },
    { "input": [[-1,-3,-5,-2,-1,-4], 3], "expected": [-1,-2,-1,-1] }
  ]
},
{
  "id": "n-queens",
  "title": "51. N-Queens",
  "difficulty": "Hard",
  "category": ["Backtracking", "Recursion", "DFS"],
  "status": "Not Started",
  "function": { "name": "solveNQueens", "params": ["n"] },
  "description": "The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Return all distinct solutions. Each solution contains a distinct board configuration of the n-queens placement, where `'Q'` and `'.'` indicate a queen and an empty space respectively.",
  "examples": [
    {
      "input": "n = 4",
      "output": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
      "explanation": "There are two distinct solutions for a 4x4 board."
    },
    {
      "input": "n = 1",
      "output": "[[\"Q\"]]"
    }
  ],
  "constraints": [
    "1 <= n <= 9"
  ],
  "starterCode": {
    "javascript": "function solveNQueens(n) {\n    // Write your code here\n}",
    "typescript": "function solveNQueens(n: number): string[][] {\n    // Write your code here\n}",
    "python": "def solveNQueens(n):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    vector<vector<string>> solveNQueens(int n) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public IList<IList<string>> SolveNQueens(int n) {\n        // Write your code here\n    }\n}",
    "go": "func solveNQueens(n int) [][]string {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {\n        // Write your code here\n    }\n}",
    "ruby": "def solve_n_queens(n)\n    # Write your code here\nend",
    "php": "<?php\nfunction solveNQueens($n) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func solveNQueens(_ n: Int) -> [[String]] {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun solveNQueens(n: Int): List<List<String>> {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": [4], "expected": [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]] },
    { "input": [1], "expected": [["Q"]] },
    { "input": [2], "expected": [] },
    { "input": [3], "expected": [] },
    { "input": [5], "expected": [["Q....","..Q..","....Q",".Q...","...Q."],["Q....","...Q.",".Q...","....Q","..Q.."],[".Q...","...Q.","Q....","..Q..","....Q"],[".Q...","..Q..","....Q","Q....","...Q."],["..Q..","Q....","...Q.",".Q...","....Q"],["..Q..","....Q",".Q...","...Q.","Q...."],["...Q.","Q....","..Q..","....Q",".Q..."],["...Q.",".Q...","....Q","..Q..","Q...."],["....Q",".Q...","...Q.","Q....","..Q.."],["....Q","..Q..","Q....","...Q.",".Q..."]] }
  ]
},
{
  "id": "minimum-window-substring",
  "title": "76. Minimum Window Substring",
  "difficulty": "Hard",
  "category": ["String", "Sliding Window", "Hash Table"],
  "status": "Not Started",
  "function": { "name": "minWindow", "params": ["s", "t"] },
  "description": "Given two strings `s` and `t`, return the **minimum window substring** of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`. You may return the answer in any order.",
  "examples": [
    {
      "input": "s = 'ADOBECODEBANC', t = 'ABC'",
      "output": "'BANC'",
      "explanation": "The minimum window substring that contains all characters 'A','B','C' is 'BANC'."
    },
    {
      "input": "s = 'a', t = 'a'",
      "output": "'a'"
    },
    {
      "input": "s = 'a', t = 'aa'",
      "output": "''"
    }
  ],
  "constraints": [
    "1 <= s.length, t.length <= 10⁵",
    "s and t consist of English letters"
  ],
  "starterCode": {
    "javascript": "function minWindow(s, t) {\n    // Write your code here\n}",
    "typescript": "function minWindow(s: string, t: string): string {\n    // Write your code here\n}",
    "python": "def minWindow(s, t):\n    # Write your code here\n    pass",
    "java": "class Solution {\n    public String minWindow(String s, String t) {\n        // Write your code here\n    }\n}",
    "cpp": "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        // Write your code here\n    }\n};",
    "c": "// Implementation left for user",
    "csharp": "public class Solution {\n    public string MinWindow(string s, string t) {\n        // Write your code here\n    }\n}",
    "go": "func minWindow(s string, t string) string {\n    // Write your code here\n}",
    "rust": "impl Solution {\n    pub fn min_window(s: String, t: String) -> String {\n        // Write your code here\n    }\n}",
    "ruby": "def min_window(s, t)\n    # Write your code here\nend",
    "php": "<?php\nfunction minWindow($s, $t) {\n    // Write your code here\n}",
    "swift": "class Solution {\n    func minWindow(_ s: String, _ t: String) -> String {\n        // Write your code here\n    }\n}",
    "kotlin": "class Solution {\n    fun minWindow(s: String, t: String): String {\n        // Write your code here\n    }\n}"
  },
  "testCases": [
    { "input": ["ADOBECODEBANC", "ABC"], "expected": "BANC" },
    { "input": ["a", "a"], "expected": "a" },
    { "input": ["a", "aa"], "expected": "" },
    { "input": ["AA", "AA"], "expected": "AA" },
    { "input": ["ABCD", "ABCD"], "expected": "ABCD" },
    { "input": ["ADOBECODEBANC", "AABC"], "expected": "ADOBECODEBA" },
    { "input": ["XYZABZABXY", "ABX"], "expected": "ABZABX" },
    { "input": ["AAABBBCCC", "ABC"], "expected": "ABC" },
    { "input": ["AAAAAAAAAAB", "AB"], "expected": "AB" },
    { "input": ["HELLOTHISISATEST", "TEST"], "expected": "TEST" }
  ]
}








//   {
//     id: "reverse-string",
//     title: "2. Reverse String",
//     difficulty: "Easy",
//     category: ["Two Pointers", "String"],
//     status: "Not Started",
//     description: `Write a function that reverses a string. The input string is given as an array of characters \`s\`.

// You must do this by modifying the input array in-place with O(1) extra memory.`,
//     examples: [
//       {
//         input: 's = ["h","e","l","l","o"]',
//         output: '["o","l","l","e","h"]',
//       },
//       {
//         input: 's = ["H","a","n","n","a","h"]',
//         output: '["h","a","n","n","a","H"]',
//       },
//     ],
//     constraints: [
//       "1 <= s.length <= 10⁵",
//       "s[i] is a printable ascii character.",
//     ],
//     starterCode: {
//       javascript: `function reverseString(s) {
//     // Write your code here
    
// }`,
//       typescript: `function reverseString(s: string[]): void {
//     // Write your code here
    
// }`,
//       python: `def reverseString(s):
//     # Write your code here
//     pass`,
//       java: `class Solution {
//     public void reverseString(char[] s) {
//         // Write your code here
        
//     }
// }`,
//       cpp: `class Solution {
// public:
//     void reverseString(vector<char>& s) {
//         // Write your code here
        
//     }
// };`,
//       c: `void reverseString(char* s, int sSize) {
//     // Write your code here
    
// }`,
//       csharp: `public class Solution {
//     public void ReverseString(char[] s) {
//         // Write your code here
        
//     }
// }`,
//       go: `func reverseString(s []byte) {
//     // Write your code here
    
// }`,
//       rust: `impl Solution {
//     pub fn reverse_string(s: &mut Vec<char>) {
//         // Write your code here
        
//     }
// }`,
//       ruby: `def reverse_string(s)
//     # Write your code here
    
// end`,
//       php: `<?php
// function reverseString(&$s) {
//     // Write your code here
    
// }`,
//       swift: `class Solution {
//     func reverseString(_ s: inout [Character]) {
//         // Write your code here
        
//     }
// }`,
//       kotlin: `class Solution {
//     fun reverseString(s: CharArray): Unit {
//         // Write your code here
        
//     }
// }`,
//     },
//   },
//   {
//     id: "valid-palindrome",
//     title: "3. Valid Palindrome",
//     difficulty: "Easy",
//     category: ["Two Pointers", "String"],
//     status: "Not Started",
//     description: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.`,
//     examples: [
//       {
//         input: 's = "A man, a plan, a canal: Panama"',
//         output: "true",
//         explanation:
//           '"amanaplanacanalpanama" is a palindrome.',
//       },
//       {
//         input: 's = "race a car"',
//         output: "false",
//         explanation: '"raceacar" is not a palindrome.',
//       },
//       {
//         input: 's = " "',
//         output: "true",
//         explanation:
//           's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
//       },
//     ],
//     constraints: [
//       "1 <= s.length <= 2 * 10⁵",
//       "s consists only of printable ASCII characters.",
//     ],
//     starterCode: {
//       javascript: `function isPalindrome(s) {
//     // Write your code here
    
// }`,
//       typescript: `function isPalindrome(s: string): boolean {
//     // Write your code here
    
// }`,
//       python: `def isPalindrome(s):
//     # Write your code here
//     pass`,
//       java: `class Solution {
//     public boolean isPalindrome(String s) {
//         // Write your code here
        
//     }
// }`,
//       cpp: `class Solution {
// public:
//     bool isPalindrome(string s) {
//         // Write your code here
        
//     }
// };`,
//       c: `#include <stdbool.h>

// bool isPalindrome(char* s) {
//     // Write your code here
    
// }`,
//       csharp: `public class Solution {
//     public bool IsPalindrome(string s) {
//         // Write your code here
        
//     }
// }`,
//       go: `func isPalindrome(s string) bool {
//     // Write your code here
    
// }`,
//       rust: `impl Solution {
//     pub fn is_palindrome(s: String) -> bool {
//         // Write your code here
        
//     }
// }`,
//       ruby: `def is_palindrome(s)
//     # Write your code here
    
// end`,
//       php: `<?php
// function isPalindrome($s) {
//     // Write your code here
    
// }`,
//       swift: `class Solution {
//     func isPalindrome(_ s: String) -> Bool {
//         // Write your code here
        
//     }
// }`,
//       kotlin: `class Solution {
//     fun isPalindrome(s: String): Boolean {
//         // Write your code here
        
//     }
// }`,
//     },
//   },
//   {
//   "id": "best-time-to-buy-and-sell-stock",
//   "title": "121. Best Time to Buy and Sell Stock",
//   "difficulty": "Easy",
//   "category": ["Array", "Dynamic Programming"],
//   "status": "Not Started",
//   "description": `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`th day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return \`0\`.`,
//   "examples": [
//     {
//       "input": "prices = [7,1,5,3,6,4]",
//       "output": "5",
//       "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
//     },
//     {
//       "input": "prices = [7,6,4,3,1]",
//       "output": "0",
//       "explanation": "No transactions are done and the max profit = 0."
//     }
//   ],
//   "constraints": [
//     "1 <= prices.length <= 10⁵",
//     "0 <= prices[i] <= 10⁴"
//   ],
//   "starterCode": {
//     "javascript": `function maxProfit(prices) {
//     // Write your code here
    
// }`,
//     "typescript": `function maxProfit(prices: number[]): number {
//     // Write your code here
    
// }`,
//     "python": `def maxProfit(prices):
//     # Write your code here
//     pass`,
//     "java": `class Solution {
//     public int maxProfit(int[] prices) {
//         // Write your code here
        
//     }
// }`,
//     "cpp": `class Solution {
// public:
//     int maxProfit(vector<int>& prices) {
//         // Write your code here
        
//     }
// };`,
//     "c": `int maxProfit(int* prices, int pricesSize) {
//     // Write your code here
    
// }`,
//     "csharp": `public class Solution {
//     public int MaxProfit(int[] prices) {
//         // Write your code here
        
//     }
// }`,
//     "go": `func maxProfit(prices []int) int {
//     // Write your code here
    
// }`,
//     "rust": `impl Solution {
//     pub fn max_profit(prices: Vec<i32>) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     "ruby": `def max_profit(prices)
//     # Write your code here
    
// end`,
//     "php": `<?php
// function maxProfit($prices) {
//     // Write your code here
    
// }`,
//     "swift": `class Solution {
//     func maxProfit(_ prices: [Int]) -> Int {
//         // Write your code here
        
//     }
// }`,
//     "kotlin": `class Solution {
//     fun maxProfit(prices: IntArray): Int {
//         // Write your code here
        
//     }
// }`
//   }
// },
// {
//   "id": "valid-parentheses",
//   "title": "20. Valid Parentheses",
//   "difficulty": "Easy",
//   "category": ["String", "Stack"],
//   "status": "Not Started",
//   "description": `Given a string \`s\` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.`,
//   "examples": [
//     {
//       "input": "s = \"()\"",
//       "output": "true"
//     },
//     {
//       "input": "s = \"()[]{}\"",
//       "output": "true"
//     },
//     {
//       "input": "s = \"(]\"",
//       "output": "false"
//     },
//     {
//       "input": "s = \"([)]\"",
//       "output": "false"
//     },
//     {
//       "input": "s = \"{[]}\"",
//       "output": "true"
//     }
//   ],
//   "constraints": [
//     "1 <= s.length <= 10⁴",
//     "s consists of parentheses only '()[]{}'."
//   ],
//   "starterCode": {
//     "javascript": `function isValid(s) {
//     // Write your code here
    
// }`,
//     "typescript": `function isValid(s: string): boolean {
//     // Write your code here
    
// }`,
//     "python": `def isValid(s):
//     # Write your code here
//     pass`,
//     "java": `class Solution {
//     public boolean isValid(String s) {
//         // Write your code here
        
//     }
// }`,
//     "cpp": `class Solution {
// public:
//     bool isValid(string s) {
//         // Write your code here
        
//     }
// };`,
//     "c": `#include <stdbool.h>
// #include <string.h>

// bool isValid(char * s){
//     // Write your code here
    
// }`,
//     "csharp": `public class Solution {
//     public bool IsValid(string s) {
//         // Write your code here
        
//     }
// }`,
//     "go": `func isValid(s string) bool {
//     // Write your code here
    
// }`,
//     "rust": `impl Solution {
//     pub fn is_valid(s: String) -> bool {
//         // Write your code here
        
//     }
// }`,
//     "ruby": `def is_valid(s)
//     # Write your code here
    
// end`,
//     "php": `<?php
// function isValid($s) {
//     // Write your code here
    
// }`,
//     "swift": `class Solution {
//     func isValid(_ s: String) -> Bool {
//         // Write your code here
        
//     }
// }`,
//     "kotlin": `class Solution {
//     fun isValid(s: String): Boolean {
//         // Write your code here
        
//     }
// }`
//   }
// },{
//   "id": "merge-two-sorted-lists",
//   "title": "21. Merge Two Sorted Lists",
//   "difficulty": "Easy",
//   "category": ["Linked List", "Recursion"],
//   "status": "Not Started",
//   "description": `You are given the heads of two sorted linked lists \`list1\` and \`list2\`.

// Merge the two lists into one **sorted** linked list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.`,
//   "examples": [
//     {
//       "input": "list1 = [1,2,4], list2 = [1,3,4]",
//       "output": "[1,1,2,3,4,4]"
//     },
//     {
//       "input": "list1 = [], list2 = []",
//       "output": "[]"
//     },
//     {
//       "input": "list1 = [], list2 = [0]",
//       "output": "[0]"
//     }
//   ],
//   "constraints": [
//     "The number of nodes in both lists is in the range [0, 50].",
//     "-100 <= Node.val <= 100",
//     "Both list1 and list2 are sorted in non-decreasing order."
//   ],
//   "starterCode": {
//     "javascript": `function mergeTwoLists(list1, list2) {
//     // Write your code here
    
// }`,
//     "typescript": `class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val);
//         this.next = (next===undefined ? null : next);
//     }
// }

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     // Write your code here
    
// }`,
//     "python": `# Definition for singly-linked list.
// # class ListNode:
// #     def __init__(self, val=0, next=None):
// #         self.val = val
// #         self.next = next

// def mergeTwoLists(list1, list2):
//     # Write your code here
//     pass`,
//     "java": `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     int val;
//  *     ListNode next;
//  *     ListNode() {}
//  *     ListNode(int val) { this.val = val; }
//  *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
//  * }
//  */
// class Solution {
//     public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
//         // Write your code here
        
//     }
// }`,
//     "cpp": `/**
//  * Definition for singly-linked list.
//  * struct ListNode {
//  *     int val;
//  *     ListNode *next;
//  *     ListNode() : val(0), next(nullptr) {}
//  *     ListNode(int x) : val(x), next(nullptr) {}
//  *     ListNode(int x, ListNode *next) : val(x), next(next) {}
//  * };
//  */
// class Solution {
// public:
//     ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
//         // Write your code here
        
//     }
// };`,
//     "c": `/**
//  * Definition for singly-linked list.
//  * struct ListNode {
//  *     int val;
//  *     struct ListNode *next;
//  * };
//  */

// struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2){
//     // Write your code here
    
// }`,
//     "csharp": `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     public int val;
//  *     public ListNode next;
//  *     public ListNode(int val=0, ListNode next=null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */
// public class Solution {
//     public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
//         // Write your code here
        
//     }
// }`,
//     "go": `/**
//  * Definition for singly-linked list.
//  * type ListNode struct {
//  *     Val int
//  *     Next *ListNode
//  * }
//  */
// func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
//     // Write your code here
    
// }`,
//     "rust": `// Definition for singly-linked list.
// // #[derive(PartialEq, Eq, Clone, Debug)]
// // pub struct ListNode {
// //   pub val: i32,
// //   pub next: Option<Box<ListNode>>,
// // }
// // impl ListNode {
// //   #[inline]
// //   fn new(val: i32) -> Self {
// //     ListNode { next: None, val }
// //   }
// // }

// impl Solution {
//     pub fn merge_two_lists(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
//         // Write your code here
        
//     }
// }`,
//     "ruby": `# Definition for singly-linked list.
// # class ListNode
// #     attr_accessor :val, :next
// #     def initialize(val = 0, _next = nil)
// #         @val = val
// #         @next = _next
// #     end
// # end

// def merge_two_lists(list1, list2)
//     # Write your code here
    
// end`,
//     "php": `<?php
// // Definition for singly-linked list.
// // class ListNode {
// //     public $val = 0;
// //     public $next = null;
// //     function __construct($val = 0, $next = null) {
// //         $this->val = $val;
// //         $this->next = $next;
// //     }
// // }

// function mergeTwoLists($list1, $list2) {
//     // Write your code here
    
// }`,
//     "swift": `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     public var val: Int
//  *     public var next: ListNode?
//  *     public init() { self.val = 0; self.next = nil; }
//  *     public init(_ val: Int) { self.val = val; self.next = nil; }
//  *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
//  * }
//  */
// class Solution {
//     func mergeTwoLists(_ list1: ListNode?, _ list2: ListNode?) -> ListNode? {
//         // Write your code here
        
//     }
// }`,
//     "kotlin": `/**
//  * Definition for singly-linked list.
//  * class ListNode(var \`val\`: Int) {
//  *     var next: ListNode? = null
//  * }
//  */
// class Solution {
//     fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
//         // Write your code here
        
//     }
// }`
//   }
// },
// {
//   "id": "maximum-subarray",
//   "title": "53. Maximum Subarray",
//   "difficulty": "Medium",
//   "category": ["Array", "Divide and Conquer", "Dynamic Programming"],
//   "status": "Not Started",
//   "description": `Given an integer array \`nums\`, find the subarray with the largest sum, and return its sum.`,
//   "examples": [
//     {
//       "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
//       "output": "6",
//       "explanation": "The subarray [4,-1,2,1] has the largest sum = 6."
//     },
//     {
//       "input": "nums = [1]",
//       "output": "1",
//       "explanation": "The subarray [1] has the largest sum = 1."
//     },
//     {
//       "input": "nums = [5,4,-1,7,8]",
//       "output": "23",
//       "explanation": "The subarray [5,4,-1,7,8] has the largest sum = 23."
//     }
//   ],
//   "constraints": [
//     "1 <= nums.length <= 10⁵",
//     "-10⁴ <= nums[i] <= 10⁴"
//   ],
//   "starterCode": {
//     "javascript": `function maxSubArray(nums) {
//     // Write your code here
    
// }`,
//     "typescript": `function maxSubArray(nums: number[]): number {
//     // Write your code here
    
// }`,
//     "python": `def maxSubArray(nums):
//     # Write your code here
//     pass`,
//     "java": `class Solution {
//     public int maxSubArray(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     "cpp": `class Solution {
// public:
//     int maxSubArray(vector<int>& nums) {
//         // Write your code here
        
//     }
// };`,
//     "c": `int maxSubArray(int* nums, int numsSize) {
//     // Write your code here
    
// }`,
//     "csharp": `public class Solution {
//     public int MaxSubArray(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     "go": `func maxSubArray(nums []int) int {
//     // Write your code here
    
// }`,
//     "rust": `impl Solution {
//     pub fn max_sub_array(nums: Vec<i32>) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     "ruby": `def max_sub_array(nums)
//     # Write your code here
    
// end`,
//     "php": `<?php
// function maxSubArray($nums) {
//     // Write your code here
    
// }`,
//     "swift": `class Solution {
//     func maxSubArray(_ nums: [Int]) -> Int {
//         // Write your code here
        
//     }
// }`,
//     "kotlin": `class Solution {
//     fun maxSubArray(nums: IntArray): Int {
//         // Write your code here
        
//     }
// }`
//   }
// },
// {
//   "id": "move-zeroes",
//   "title": "283. Move Zeroes",
//   "difficulty": "Easy",
//   "category": ["Array", "Two Pointers"],
//   "status": "Not Started",
//   "description": `Given an integer array \`nums\`, move all \`0\`'s to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.`,
//   "examples": [
//     {
//       "input": "nums = [0,1,0,3,12]",
//       "output": "[1,3,12,0,0]"
//     },
//     {
//       "input": "nums = [0]",
//       "output": "[0]"
//     }
//   ],
//   "constraints": [
//     "1 <= nums.length <= 10⁴",
//     "-2³¹ <= nums[i] <= 2³¹ - 1"
//   ],
//   "starterCode": {
//     "javascript": `function moveZeroes(nums) {
//     // Write your code here
    
// }`,
//     "typescript": `function moveZeroes(nums: number[]): void {
//     // Write your code here
    
// }`,
//     "python": `def moveZeroes(nums):
//     # Write your code here
//     pass`,
//     "java": `class Solution {
//     public void moveZeroes(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     "cpp": `class Solution {
// public:
//     void moveZeroes(vector<int>& nums) {
//         // Write your code here
        
//     }
// };`,
//     "c": `void moveZeroes(int* nums, int numsSize) {
//     // Write your code here
    
// }`,
//     "csharp": `public class Solution {
//     public void MoveZeroes(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     "go": `func moveZeroes(nums []int)  {
//     // Write your code here
    
// }`,
//     "rust": `impl Solution {
//     pub fn move_zeroes(nums: &mut Vec<i32>) {
//         // Write your code here
        
//     }
// }`,
//     "ruby": `def move_zeroes(nums)
//     # Write your code here
    
// end`,
//     "php": `<?php
// function moveZeroes(&$nums) {
//     // Write your code here
    
// }`,
//     "swift": `class Solution {
//     func moveZeroes(_ nums: inout [Int]) {
//         // Write your code here
        
//     }
// }`,
//     "kotlin": `class Solution {
//     fun moveZeroes(nums: IntArray): Unit {
//         // Write your code here
        
//     }
// }`
//   }
// },
// {
//   "id": "remove-duplicates-from-sorted-array",
//   "title": "26. Remove Duplicates from Sorted Array",
//   "difficulty": "Easy",
//   "category": ["Array", "Two Pointers"],
//   "status": "Not Started",
//   "description": `Given an integer array \`nums\` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead place the result in the first part of the array \`nums\`. More formally, if there are \`k\` elements after removing the duplicates, then the first \`k\` elements of \`nums\` should hold the final result. It does not matter what you leave beyond the first \`k\` elements.

// Return \`k\` after placing the final result in the first \`k\` slots of \`nums\`.

// **Do not allocate extra space** for another array. You must do this by modifying the input array **in-place** with O(1) extra memory.`,
//   "examples": [
//     {
//       "input": "nums = [1,1,2]",
//       "output": "2, nums = [1,2,_]",
//       "explanation": "Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively."
//     },
//     {
//       "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
//       "output": "5, nums = [0,1,2,3,4,_,_,_,_,_]",
//       "explanation": "Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively."
//     }
//   ],
//   "constraints": [
//     "1 <= nums.length <= 3 * 10⁴",
//     "-100 <= nums[i] <= 100",
//     "nums is sorted in non-decreasing order."
//   ],
//   "starterCode": {
//     "javascript": `function removeDuplicates(nums) {
//     // Write your code here
    
// }`,
//     "typescript": `function removeDuplicates(nums: number[]): number {
//     // Write your code here
    
// }`,
//     "python": `def removeDuplicates(nums):
//     # Write your code here
//     pass`,
//     "java": `class Solution {
//     public int removeDuplicates(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     "cpp": `class Solution {
// public:
//     int removeDuplicates(vector<int>& nums) {
//         // Write your code here
        
//     }
// };`,
//     "c": `int removeDuplicates(int* nums, int numsSize) {
//     // Write your code here
    
// }`,
//     "csharp": `public class Solution {
//     public int RemoveDuplicates(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     "go": `func removeDuplicates(nums []int) int {
//     // Write your code here
    
// }`,
//     "rust": `impl Solution {
//     pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     "ruby": `def remove_duplicates(nums)
//     # Write your code here
    
// end`,
//     "php": `<?php
// function removeDuplicates(&$nums) {
//     // Write your code here
    
// }`,
//     "swift": `class Solution {
//     func removeDuplicates(_ nums: inout [Int]) -> Int {
//         // Write your code here
        
//     }
// }`,
//     "kotlin": `class Solution {
//     fun removeDuplicates(nums: IntArray): Int {
//         // Write your code here
        
//     }
// }`
//   }
// },{
//   "id": "binary-search",
//   "title": "704. Binary Search",
//   "difficulty": "Easy",
//   "category": ["Array", "Binary Search"],
//   "status": "Not Started",
//   "description": `Given an array of integers \`nums\` which is sorted in **ascending order**, and an integer \`target\`, write a function to search \`target\` in \`nums\`. 

// If \`target\` exists, then return its index. Otherwise, return \`-1\`.

// You must write an algorithm with O(log n) runtime complexity.`,
//   "examples": [
//     {
//       "input": "nums = [-1,0,3,5,9,12], target = 9",
//       "output": "4",
//       "explanation": "9 exists in nums and its index is 4."
//     },
//     {
//       "input": "nums = [-1,0,3,5,9,12], target = 2",
//       "output": "-1",
//       "explanation": "2 does not exist in nums, so return -1."
//     }
//   ],
//   "constraints": [
//     "1 <= nums.length <= 10⁴",
//     "-10⁴ < nums[i], target < 10⁴",
//     "All the integers in nums are unique.",
//     "nums is sorted in ascending order."
//   ],
//   "starterCode": {
//     "javascript": `function search(nums, target) {
//     // Write your code here
    
// }`,
//     "typescript": `function search(nums: number[], target: number): number {
//     // Write your code here
    
// }`,
//     "python": `def search(nums, target):
//     # Write your code here
//     pass`,
//     "java": `class Solution {
//     public int search(int[] nums, int target) {
//         // Write your code here
        
//     }
// }`,
//     "cpp": `class Solution {
// public:
//     int search(vector<int>& nums, int target) {
//         // Write your code here
        
//     }
// };`,
//     "c": `int search(int* nums, int numsSize, int target) {
//     // Write your code here
    
// }`,
//     "csharp": `public class Solution {
//     public int Search(int[] nums, int target) {
//         // Write your code here
        
//     }
// }`,
//     "go": `func search(nums []int, target int) int {
//     // Write your code here
    
// }`,
//     "rust": `impl Solution {
//     pub fn search(nums: Vec<i32>, target: i32) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     "ruby": `def search(nums, target)
//     # Write your code here
    
// end`,
//     "php": `<?php
// function search($nums, $target) {
//     // Write your code here
    
// }`,
//     "swift": `class Solution {
//     func search(_ nums: [Int], _ target: Int) -> Int {
//         // Write your code here
        
//     }
// }`,
//     "kotlin": `class Solution {
//     fun search(nums: IntArray, target: Int): Int {
//         // Write your code here
        
//     }
// }`
//   }
// },
// {
//   id: "climbing-stairs",
//   title: "70. Climbing Stairs",
//   difficulty: "Easy",
//   category: ["Dynamic Programming", "Math"],
//   status: "Not Started",
//   description: `You are climbing a staircase. It takes \`n\` steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
//   examples: [
//     {
//       input: "n = 2",
//       output: "2",
//       explanation: "There are two ways to climb to the top: 1 step + 1 step, or 2 steps.",
//     },
//     {
//       input: "n = 3",
//       output: "3",
//       explanation: "There are three ways: 1+1+1, 1+2, and 2+1.",
//     },
//   ],
//   constraints: [
//     "1 <= n <= 45",
//   ],
//   starterCode: {
//     javascript: `function climbStairs(n) {
//     // Write your code here
    
// }`,
//     typescript: `function climbStairs(n: number): number {
//     // Write your code here
    
// }`,
//     python: `def climbStairs(n):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int climbStairs(int n) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int climbStairs(int n) {
//         // Write your code here
        
//     }
// };`,
//     c: `int climbStairs(int n) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int ClimbStairs(int n) {
//         // Write your code here
        
//     }
// }`,
//     go: `func climbStairs(n int) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn climb_stairs(n: i32) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def climb_stairs(n)
//     # Write your code here
    
// end`,
//     php: `<?php
// function climbStairs($n) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func climbStairs(_ n: Int) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun climbStairs(n: Int): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "linked-list-cycle",
//   title: "141. Linked List Cycle",
//   difficulty: "Easy",
//   category: ["Linked List", "Two Pointers", "Hash Table"],
//   status: "Not Started",
//   description: `Given \`head\`, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the \`next\` pointer. Internally, \`pos\` is used to denote the index of the node that the tail's \`next\` pointer is connected to. Note that \`pos\` is not passed as a parameter.

// Return \`true\` if there is a cycle in the linked list. Otherwise, return \`false\`.`,
//   examples: [
//     {
//       input: "head = [3,2,0,-4], pos = 1",
//       output: "true",
//       explanation: "There is a cycle in the linked list where the tail connects to the 2nd node.",
//     },
//     {
//       input: "head = [1,2], pos = 0",
//       output: "true",
//       explanation: "There is a cycle in the linked list where the tail connects to the 1st node.",
//     },
//     {
//       input: "head = [1], pos = -1",
//       output: "false",
//       explanation: "There is no cycle in the linked list.",
//     },
//   ],
//   constraints: [
//     "The number of nodes in the list is in the range [0, 10⁴].",
//     "-10⁵ <= Node.val <= 10⁵",
//   ],
//   starterCode: {
//     javascript: `/**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function(head) {
//     // Write your code here
    
// };`,
//     typescript: `/**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// function hasCycle(head: ListNode | null): boolean {
//     // Write your code here
    
// }`,
//     python: `# Definition for singly-linked list.
// # class ListNode:
// #     def __init__(self, x):
// #         self.val = x
// #         self.next = None

// def hasCycle(head):
//     # Write your code here
//     pass`,
//     java: `/**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     int val;
//  *     ListNode next;
//  *     ListNode(int x) {
//  *         val = x;
//  *         next = null;
//  *     }
//  * }
//  */
// public class Solution {
//     public boolean hasCycle(ListNode head) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `/**
//  * Definition for singly-linked list.
//  * struct ListNode {
//  *     int val;
//  *     ListNode *next;
//  *     ListNode(int x) : val(x), next(NULL) {}
//  * };
//  */
// class Solution {
// public:
//     bool hasCycle(ListNode *head) {
//         // Write your code here
        
//     }
// };`,
//     c: `// Definition for singly-linked list.
// // struct ListNode {
// //     int val;
// //     struct ListNode *next;
// // };

// bool hasCycle(struct ListNode *head) {
//     // Write your code here
    
// }`,
//     csharp: `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     public int val;
//  *     public ListNode next;
//  *     public ListNode(int x) {
//  *         val = x;
//  *         next = null;
//  *     }
//  * }
//  */
// public class Solution {
//     public bool HasCycle(ListNode head) {
//         // Write your code here
        
//     }
// }`,
//     go: `/**
//  * Definition for singly-linked list.
//  * type ListNode struct {
//  *     Val int
//  *     Next *ListNode
//  * }
//  */
// func hasCycle(head *ListNode) bool {
//     // Write your code here
    
// }`,
//     rust: `// Definition for singly-linked list.
// // #[derive(PartialEq, Eq, Clone, Debug)]
// // pub struct ListNode {
// //   pub val: i32,
// //   pub next: Option<Box<ListNode>>,
// // }

// impl Solution {
//     pub fn has_cycle(head: Option<Box<ListNode>>) -> bool {
//         // Write your code here
        
//     }
// }`,
//     ruby: `# Definition for singly-linked list.
// # class ListNode
// #   attr_accessor :val, :next
// #   def initialize(val)
// #     @val = val
// #     @next = nil
// #   end
// # end

// def has_cycle(head)
//   # Write your code here
  
// end`,
//     php: `<?php
// // Definition for singly-linked list.
// // class ListNode {
// //     public $val = 0;
// //     public $next = null;
// //     function __construct($val) { $this->val = $val; }
// // }

// function hasCycle($head) {
//     // Write your code here
    
// }`,
//     swift: `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     public var val: Int
//  *     public var next: ListNode?
//  *     public init(_ val: Int) {
//  *         self.val = val
//  *         self.next = nil
//  *     }
//  * }
//  */
// class Solution {
//     func hasCycle(_ head: ListNode?) -> Bool {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `/**
//  * Definition for singly-linked list.
//  * class ListNode(var \`val\`: Int) {
//  *     var next: ListNode? = null
//  * }
//  */
// class Solution {
//     fun hasCycle(head: ListNode?): Boolean {
//         // Write your code here
        
//     }
// }`,
//   },
// },

// // median questions
// {
//   id: "add-two-numbers",
//   title: "2. Add Two Numbers",
//   difficulty: "Medium",
//   category: ["Linked List", "Math", "Recursion"],
//   status: "Not Started",
//   description: `You are given two **non-empty** linked lists representing two non-negative integers.  
// The digits are stored in **reverse order**, and each of their nodes contains a single digit.  
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.`,
//   examples: [
//     {
//       input: "l1 = [2,4,3], l2 = [5,6,4]",
//       output: "[7,0,8]",
//       explanation: "342 + 465 = 807.",
//     },
//     {
//       input: "l1 = [0], l2 = [0]",
//       output: "[0]",
//     },
//     {
//       input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
//       output: "[8,9,9,9,0,0,0,1]",
//     },
//   ],
//   constraints: [
//     "The number of nodes in each linked list is in the range [1, 100].",
//     "0 <= Node.val <= 9",
//     "It is guaranteed that the list represents a number that does not have leading zeros.",
//   ],
//   starterCode: {
//     javascript: `/**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//     // Write your code here
    
// };`,
//     typescript: `/**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     // Write your code here
    
// }`,
//     python: `# Definition for singly-linked list.
// # class ListNode:
// #     def __init__(self, val=0, next=None):
// #         self.val = val
// #         self.next = next

// def addTwoNumbers(l1, l2):
//     # Write your code here
//     pass`,
//     java: `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     int val;
//  *     ListNode next;
//  *     ListNode() {}
//  *     ListNode(int val) { this.val = val; }
//  *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
//  * }
//  */
// class Solution {
//     public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `/**
//  * Definition for singly-linked list.
//  * struct ListNode {
//  *     int val;
//  *     ListNode *next;
//  *     ListNode() : val(0), next(nullptr) {}
//  *     ListNode(int x) : val(x), next(nullptr) {}
//  *     ListNode(int x, ListNode *next) : val(x), next(next) {}
//  * };
//  */
// class Solution {
// public:
//     ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
//         // Write your code here
        
//     }
// };`,
//     c: `// Definition for singly-linked list.
// // struct ListNode {
// //     int val;
// //     struct ListNode *next;
// // };

// struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
//     // Write your code here
    
// }`,
//     csharp: `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     public int val;
//  *     public ListNode next;
//  *     public ListNode(int val=0, ListNode next=null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */
// public class Solution {
//     public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
//         // Write your code here
        
//     }
// }`,
//     go: `/**
//  * Definition for singly-linked list.
//  * type ListNode struct {
//  *     Val int
//  *     Next *ListNode
//  * }
//  */
// func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
//     // Write your code here
    
// }`,
//     rust: `// Definition for singly-linked list.
// // #[derive(PartialEq, Eq, Clone, Debug)]
// // pub struct ListNode {
// //   pub val: i32,
// //   pub next: Option<Box<ListNode>>,
// // }

// impl Solution {
//     pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `# Definition for singly-linked list.
// # class ListNode
// #   attr_accessor :val, :next
// #   def initialize(val = 0, _next = nil)
// #     @val = val
// #     @next = _next
// #   end
// # end

// def add_two_numbers(l1, l2)
//   # Write your code here
  
// end`,
//     php: `<?php
// // Definition for singly-linked list.
// // class ListNode {
// //     public $val = 0;
// //     public $next = null;
// //     function __construct($val = 0, $next = null) {
// //         $this->val = $val;
// //         $this->next = $next;
// //     }
// // }

// function addTwoNumbers($l1, $l2) {
//     // Write your code here
    
// }`,
//     swift: `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     public var val: Int
//  *     public var next: ListNode?
//  *     public init() { self.val = 0; self.next = nil; }
//  *     public init(_ val: Int) { self.val = val; self.next = nil; }
//  *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
//  * }
//  */
// class Solution {
//     func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `/**
//  * Definition for singly-linked list.
//  * class ListNode(var \`val\`: Int) {
//  *     var next: ListNode? = null
//  * }
//  */
// class Solution {
//     fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "longest-substring-without-repeating-characters",
//   title: "3. Longest Substring Without Repeating Characters",
//   difficulty: "Medium",
//   category: ["Hash Table", "String", "Sliding Window"],
//   status: "Not Started",
//   description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.`,
//   examples: [
//     {
//       input: "s = 'abcabcbb'",
//       output: "3",
//       explanation: "The answer is 'abc', with the length of 3.",
//     },
//     {
//       input: "s = 'bbbbb'",
//       output: "1",
//       explanation: "The answer is 'b', with the length of 1.",
//     },
//     {
//       input: "s = 'pwwkew'",
//       output: "3",
//       explanation: "The answer is 'wke', with the length of 3.",
//     },
//   ],
//   constraints: [
//     "0 <= s.length <= 5 * 10⁴",
//     "s consists of English letters, digits, symbols, and spaces.",
//   ],
//   starterCode: {
//     javascript: `function lengthOfLongestSubstring(s) {
//     // Write your code here
    
// }`,
//     typescript: `function lengthOfLongestSubstring(s: string): number {
//     // Write your code here
    
// }`,
//     python: `def lengthOfLongestSubstring(s):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int lengthOfLongestSubstring(String s) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int lengthOfLongestSubstring(string s) {
//         // Write your code here
        
//     }
// };`,
//     c: `int lengthOfLongestSubstring(char * s) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int LengthOfLongestSubstring(string s) {
//         // Write your code here
        
//     }
// }`,
//     go: `func lengthOfLongestSubstring(s string) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn length_of_longest_substring(s: String) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def length_of_longest_substring(s)
//   # Write your code here
  
// end`,
//     php: `<?php
// function lengthOfLongestSubstring($s) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func lengthOfLongestSubstring(_ s: String) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun lengthOfLongestSubstring(s: String): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "3sum",
//   title: "15. 3Sum",
//   difficulty: "Medium",
//   category: ["Array", "Two Pointers", "Sorting"],
//   status: "Not Started",
//   description: `Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

// Notice that the solution set must not contain duplicate triplets.`,
//   examples: [
//     {
//       input: "nums = [-1,0,1,2,-1,-4]",
//       output: "[[-1,-1,2],[-1,0,1]]",
//       explanation: "The triplets are unique combinations that sum to zero.",
//     },
//     {
//       input: "nums = [0,1,1]",
//       output: "[]",
//       explanation: "No three numbers sum up to zero.",
//     },
//     {
//       input: "nums = [0,0,0]",
//       output: "[[0,0,0]]",
//       explanation: "The only triplet summing to zero is [0,0,0].",
//     },
//   ],
//   constraints: [
//     "3 <= nums.length <= 3000",
//     "-10⁵ <= nums[i] <= 10⁵",
//   ],
//   starterCode: {
//     javascript: `function threeSum(nums) {
//     // Write your code here
    
// }`,
//     typescript: `function threeSum(nums: number[]): number[][] {
//     // Write your code here
    
// }`,
//     python: `def threeSum(nums):
//     # Write your code here
//     pass`,
//     java: `import java.util.*;
// class Solution {
//     public List<List<Integer>> threeSum(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     vector<vector<int>> threeSum(vector<int>& nums) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdio.h>
// #include <stdlib.h>

// /**
//  * Note: The returned array must be malloced, assume caller calls free().
//  */
// int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
//     // Write your code here
    
// }`,
//     csharp: `using System.Collections.Generic;
// public class Solution {
//     public IList<IList<int>> ThreeSum(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     go: `func threeSum(nums []int) [][]int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def three_sum(nums)
//   # Write your code here
  
// end`,
//     php: `<?php
// function threeSum($nums) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func threeSum(_ nums: [Int]) -> [[Int]] {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun threeSum(nums: IntArray): List<List<Int>> {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "container-with-most-water",
//   title: "11. Container With Most Water",
//   difficulty: "Medium",
//   category: ["Array", "Two Pointers", "Greedy"],
//   status: "Not Started",
//   description: `You are given an integer array \`height\` of length \`n\`.  
// There are \`n\` vertical lines drawn such that the two endpoints of the \`iᵗʰ\` line are \`(i, 0)\` and \`(i, height[i])\`.

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the **maximum amount of water** a container can store.

// **Notice** that you may not slant the container.`,
//   examples: [
//     {
//       input: "height = [1,8,6,2,5,4,8,3,7]",
//       output: "49",
//       explanation: "The maximum area is between lines at index 1 and 8: min(8,7) * (8-1) = 49.",
//     },
//     {
//       input: "height = [1,1]",
//       output: "1",
//       explanation: "The maximum area is min(1,1) * (1) = 1.",
//     },
//   ],
//   constraints: [
//     "2 <= height.length <= 10⁵",
//     "0 <= height[i] <= 10⁴",
//   ],
//   starterCode: {
//     javascript: `function maxArea(height) {
//     // Write your code here
    
// }`,
//     typescript: `function maxArea(height: number[]): number {
//     // Write your code here
    
// }`,
//     python: `def maxArea(height):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int maxArea(int[] height) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int maxArea(vector<int>& height) {
//         // Write your code here
        
//     }
// };`,
//     c: `int maxArea(int* height, int heightSize) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int MaxArea(int[] height) {
//         // Write your code here
        
//     }
// }`,
//     go: `func maxArea(height []int) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn max_area(height: Vec<i32>) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def max_area(height)
//   # Write your code here
  
// end`,
//     php: `<?php
// function maxArea($height) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func maxArea(_ height: [Int]) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun maxArea(height: IntArray): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "group-anagrams",
//   title: "49. Group Anagrams",
//   difficulty: "Medium",
//   category: ["Hash Table", "String", "Sorting"],
//   status: "Not Started",
//   description: `Given an array of strings \`strs\`, group the **anagrams** together.  
// You can return the answer in **any order**.

// An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
//   examples: [
//     {
//       input: "strs = ['eat','tea','tan','ate','nat','bat']",
//       output: "[['bat'],['nat','tan'],['ate','eat','tea']]",
//     },
//     {
//       input: "strs = ['']",
//       output: "[['']]",
//     },
//     {
//       input: "strs = ['a']",
//       output: "[['a']]",
//     },
//   ],
//   constraints: [
//     "1 <= strs.length <= 10⁴",
//     "0 <= strs[i].length <= 100",
//     "strs[i] consists of lowercase English letters.",
//   ],
//   starterCode: {
//     javascript: `function groupAnagrams(strs) {
//     // Write your code here
    
// }`,
//     typescript: `function groupAnagrams(strs: string[]): string[][] {
//     // Write your code here
    
// }`,
//     python: `def groupAnagrams(strs):
//     # Write your code here
//     pass`,
//     java: `import java.util.*;
// class Solution {
//     public List<List<String>> groupAnagrams(String[] strs) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     vector<vector<string>> groupAnagrams(vector<string>& strs) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdio.h>
// #include <stdlib.h>

// /**
//  * Note: The returned array must be malloced, assume caller calls free().
//  */
// char *** groupAnagrams(char ** strs, int strsSize, int* returnSize, int** returnColumnSizes){
//     // Write your code here
    
// }`,
//     csharp: `using System.Collections.Generic;
// public class Solution {
//     public IList<IList<string>> GroupAnagrams(string[] strs) {
//         // Write your code here
        
//     }
// }`,
//     go: `func groupAnagrams(strs []string) [][]string {
//     // Write your code here
    
// }`,
//     rust: `use std::collections::HashMap;

// impl Solution {
//     pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def group_anagrams(strs)
//   # Write your code here
  
// end`,
//     php: `<?php
// function groupAnagrams($strs) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func groupAnagrams(_ strs: [String]) -> [[String]] {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun groupAnagrams(strs: Array<String>): List<List<String>> {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "insert-interval",
//   title: "57. Insert Interval",
//   difficulty: "Medium",
//   category: ["Array", "Sorting"],
//   status: "Not Started",
//   description: `You are given an array of **non-overlapping intervals** where \`intervals[i] = [startᵢ, endᵢ]\` represent the start and end of the \`iᵗʰ\` interval and \`intervals\` is sorted in ascending order by \`startᵢ\`.  
// You are also given an interval \`newInterval = [start, end]\` that represents the start and end of another interval.

// Insert \`newInterval\` into \`intervals\` such that \`intervals\` is still sorted in ascending order by start and \`intervals\` still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return \`intervals\` *after the insertion*.`,
//   examples: [
//     {
//       input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
//       output: "[[1,5],[6,9]]",
//     },
//     {
//       input: "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
//       output: "[[1,2],[3,10],[12,16]]",
//       explanation: "Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].",
//     },
//   ],
//   constraints: [
//     "0 <= intervals.length <= 10⁴",
//     "intervals[i].length == 2",
//     "0 <= startᵢ <= endᵢ <= 10⁵",
//   ],
//   starterCode: {
//     javascript: `function insert(intervals, newInterval) {
//     // Write your code here
    
// }`,
//     typescript: `function insert(intervals: number[][], newInterval: number[]): number[][] {
//     // Write your code here
    
// }`,
//     python: `def insert(intervals, newInterval):
//     # Write your code here
//     pass`,
//     java: `import java.util.*;
// class Solution {
//     public int[][] insert(int[][] intervals, int[] newInterval) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdio.h>
// #include <stdlib.h>

// /**
//  * Note: The returned array must be malloced, assume caller calls free().
//  */
// int** insert(int** intervals, int intervalsSize, int* intervalsColSize, int* newInterval, int newIntervalSize, int* returnSize, int** returnColumnSizes){
//     // Write your code here
    
// }`,
//     csharp: `using System.Collections.Generic;
// public class Solution {
//     public int[][] Insert(int[][] intervals, int[] newInterval) {
//         // Write your code here
        
//     }
// }`,
//     go: `func insert(intervals [][]int, newInterval []int) [][]int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def insert(intervals, new_interval)
//   # Write your code here
  
// end`,
//     php: `<?php
// function insert($intervals, $newInterval) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func insert(_ intervals: [[Int]], _ newInterval: [Int]) -> [[Int]] {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun insert(intervals: Array<IntArray>, newInterval: IntArray): Array<IntArray> {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "kth-largest-element-in-an-array",
//   title: "215. Kth Largest Element in an Array",
//   difficulty: "Medium",
//   category: ["Array", "Divide and Conquer", "Heap (Priority Queue)", "Quickselect"],
//   status: "Not Started",
//   description: `Given an integer array \`nums\` and an integer \`k\`, return the \`kᵗʰ\` largest element in the array.

// Note that it is the \`kᵗʰ\` largest element in the sorted order, not the \`kᵗʰ\` distinct element.

// You must solve it in \`O(n)\` time complexity on average.`,
//   examples: [
//     {
//       input: "nums = [3,2,1,5,6,4], k = 2",
//       output: "5",
//     },
//     {
//       input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
//       output: "4",
//     },
//   ],
//   constraints: [
//     "1 <= k <= nums.length <= 10⁵",
//     "-10⁴ <= nums[i] <= 10⁴",
//   ],
//   starterCode: {
//     javascript: `function findKthLargest(nums, k) {
//     // Write your code here
    
// }`,
//     typescript: `function findKthLargest(nums: number[], k: number): number {
//     // Write your code here
    
// }`,
//     python: `def findKthLargest(nums, k):
//     # Write your code here
//     pass`,
//     java: `import java.util.*;
// class Solution {
//     public int findKthLargest(int[] nums, int k) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int findKthLargest(vector<int>& nums, int k) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdlib.h>

// int findKthLargest(int* nums, int numsSize, int k) {
//     // Write your code here
    
// }`,
//     csharp: `using System.Collections.Generic;
// public class Solution {
//     public int FindKthLargest(int[] nums, int k) {
//         // Write your code here
        
//     }
// }`,
//     go: `func findKthLargest(nums []int, k int) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def find_kth_largest(nums, k)
//   # Write your code here
  
// end`,
//     php: `<?php
// function findKthLargest($nums, $k) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func findKthLargest(_ nums: [Int], _ k: Int) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun findKthLargest(nums: IntArray, k: Int): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "product-of-array-except-self",
//   title: "238. Product of Array Except Self",
//   difficulty: "Medium",
//   category: ["Array", "Prefix Sum"],
//   status: "Not Started",
//   description: `Given an integer array \`nums\`, return an array \`answer\` such that \`answer[i]\` is equal to the product of all the elements of \`nums\` except \`nums[i]\`.

// The product of any prefix or suffix of \`nums\` is guaranteed to fit in a **32-bit integer**.

// You must write an algorithm that runs in \`O(n)\` time and **without using the division operation**.`,
//   examples: [
//     {
//       input: "nums = [1,2,3,4]",
//       output: "[24,12,8,6]",
//     },
//     {
//       input: "nums = [-1,1,0,-3,3]",
//       output: "[0,0,9,0,0]",
//     },
//   ],
//   constraints: [
//     "2 <= nums.length <= 10⁵",
//     "-30 <= nums[i] <= 30",
//     "The product of any prefix or suffix of nums fits in a 32-bit integer.",
//   ],
//   starterCode: {
//     javascript: `function productExceptSelf(nums) {
//     // Write your code here
    
// }`,
//     typescript: `function productExceptSelf(nums: number[]): number[] {
//     // Write your code here
    
// }`,
//     python: `def productExceptSelf(nums):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int[] productExceptSelf(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     vector<int> productExceptSelf(vector<int>& nums) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdlib.h>

// int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int[] ProductExceptSelf(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     go: `func productExceptSelf(nums []int) []int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def product_except_self(nums)
//   # Write your code here
  
// end`,
//     php: `<?php
// function productExceptSelf($nums) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func productExceptSelf(_ nums: [Int]) -> [Int] {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun productExceptSelf(nums: IntArray): IntArray {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "sort-colors",
//   title: "75. Sort Colors",
//   difficulty: "Medium",
//   category: ["Array", "Two Pointers", "Sorting"],
//   status: "Not Started",
//   description: `Given an array \`nums\` with \`n\` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers \`0\`, \`1\`, and \`2\` to represent the color red, white, and blue, respectively.

// You must solve this problem **without using the library's sort function** and with a **one-pass algorithm** if possible.`,
//   examples: [
//     {
//       input: "nums = [2,0,2,1,1,0]",
//       output: "[0,0,1,1,2,2]",
//     },
//     {
//       input: "nums = [2,0,1]",
//       output: "[0,1,2]",
//     },
//   ],
//   constraints: [
//     "n == nums.length",
//     "1 <= n <= 300",
//     "nums[i] is either 0, 1, or 2.",
//   ],
//   starterCode: {
//     javascript: `function sortColors(nums) {
//     // Write your code here
    
// }`,
//     typescript: `function sortColors(nums: number[]): void {
//     // Write your code here
    
// }`,
//     python: `def sortColors(nums):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public void sortColors(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     void sortColors(vector<int>& nums) {
//         // Write your code here
        
//     }
// };`,
//     c: `void sortColors(int* nums, int numsSize) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public void SortColors(int[] nums) {
//         // Write your code here
        
//     }
// }`,
//     go: `func sortColors(nums []int) {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn sort_colors(nums: &mut Vec<i32>) {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def sort_colors(nums)
//   # Write your code here
  
// end`,
//     php: `<?php
// function sortColors(&$nums) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func sortColors(_ nums: inout [Int]) {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun sortColors(nums: IntArray): Unit {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "find-first-and-last-position-of-element-in-sorted-array",
//   title: "34. Find First and Last Position of Element in Sorted Array",
//   difficulty: "Medium",
//   category: ["Array", "Binary Search"],
//   status: "Not Started",
//   description: `Given an array of integers \`nums\` sorted in **non-decreasing order**, find the starting and ending position of a given \`target\` value.

// If \`target\` is not found in the array, return \`[-1, -1]\`.

// You must write an algorithm with \`O(log n)\` runtime complexity.`,
//   examples: [
//     {
//       input: "nums = [5,7,7,8,8,10], target = 8",
//       output: "[3,4]",
//     },
//     {
//       input: "nums = [5,7,7,8,8,10], target = 6",
//       output: "[-1,-1]",
//     },
//     {
//       input: "nums = [], target = 0",
//       output: "[-1,-1]",
//     },
//   ],
//   constraints: [
//     "0 <= nums.length <= 10⁵",
//     "-10⁹ <= nums[i] <= 10⁹",
//     "-10⁹ <= target <= 10⁹",
//   ],
//   starterCode: {
//     javascript: `function searchRange(nums, target) {
//     // Write your code here
    
// }`,
//     typescript: `function searchRange(nums: number[], target: number): number[] {
//     // Write your code here
    
// }`,
//     python: `def searchRange(nums, target):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int[] searchRange(int[] nums, int target) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     vector<int> searchRange(vector<int>& nums, int target) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdlib.h>

// int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int[] SearchRange(int[] nums, int target) {
//         // Write your code here
        
//     }
// }`,
//     go: `func searchRange(nums []int, target int) []int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def search_range(nums, target)
//   # Write your code here
  
// end`,
//     php: `<?php
// function searchRange($nums, $target) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func searchRange(_ nums: [Int], _ target: Int) -> [Int] {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun searchRange(nums: IntArray, target: Int): IntArray {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "minimum-path-sum",
//   title: "64. Minimum Path Sum",
//   difficulty: "Medium",
//   category: ["Array", "Dynamic Programming", "Matrix"],
//   status: "Not Started",
//   description: `Given a \`m x n\` grid filled with non-negative numbers, find a path from top left to bottom right, which **minimizes the sum of all numbers** along its path.

// You can only move either **down** or **right** at any point in time.`,
//   examples: [
//     {
//       input: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
//       output: "7",
//       explanation: "Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.",
//     },
//     {
//       input: "grid = [[1,2,3],[4,5,6]]",
//       output: "12",
//     },
//   ],
//   constraints: [
//     "m == grid.length",
//     "n == grid[i].length",
//     "1 <= m, n <= 200",
//     "0 <= grid[i][j] <= 100",
//   ],
//   starterCode: {
//     javascript: `function minPathSum(grid) {
//     // Write your code here
    
// }`,
//     typescript: `function minPathSum(grid: number[][]): number {
//     // Write your code here
    
// }`,
//     python: `def minPathSum(grid):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int minPathSum(int[][] grid) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int minPathSum(vector<vector<int>>& grid) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdlib.h>
// #include <limits.h>

// int minPathSum(int** grid, int gridSize, int* gridColSize) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int MinPathSum(int[][] grid) {
//         // Write your code here
        
//     }
// }`,
//     go: `func minPathSum(grid [][]int) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def min_path_sum(grid)
//   # Write your code here
  
// end`,
//     php: `<?php
// function minPathSum($grid) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func minPathSum(_ grid: [[Int]]) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun minPathSum(grid: Array<IntArray>): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "subarray-sum-equals-k",
//   title: "560. Subarray Sum Equals K",
//   difficulty: "Medium",
//   category: ["Array", "Hash Table", "Prefix Sum"],
//   status: "Not Started",
//   description: `Given an array of integers \`nums\` and an integer \`k\`, return *the total number of subarrays whose sum equals to* \`k\`.

// A **subarray** is a contiguous non-empty sequence of elements within an array.`,
//   examples: [
//     {
//       input: "nums = [1,1,1], k = 2",
//       output: "2",
//     },
//     {
//       input: "nums = [1,2,3], k = 3",
//       output: "2",
//     },
//   ],
//   constraints: [
//     "1 <= nums.length <= 2 * 10⁴",
//     "-1000 <= nums[i] <= 1000",
//     "-10⁷ <= k <= 10⁷",
//   ],
//   starterCode: {
//     javascript: `function subarraySum(nums, k) {
//     // Write your code here
    
// }`,
//     typescript: `function subarraySum(nums: number[], k: number): number {
//     // Write your code here
    
// }`,
//     python: `def subarraySum(nums, k):
//     # Write your code here
//     pass`,
//     java: `import java.util.*;
// class Solution {
//     public int subarraySum(int[] nums, int k) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int subarraySum(vector<int>& nums, int k) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdlib.h>

// int subarraySum(int* nums, int numsSize, int k) {
//     // Write your code here
    
// }`,
//     csharp: `using System.Collections.Generic;
// public class Solution {
//     public int SubarraySum(int[] nums, int k) {
//         // Write your code here
        
//     }
// }`,
//     go: `func subarraySum(nums []int, k int) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def subarray_sum(nums, k)
//   # Write your code here
  
// end`,
//     php: `<?php
// function subarraySum($nums, $k) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func subarraySum(_ nums: [Int], _ k: Int) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun subarraySum(nums: IntArray, k: Int): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },


// // hard questions

// {
//   id: "median-of-two-sorted-arrays",
//   title: "4. Median of Two Sorted Arrays",
//   difficulty: "Hard",
//   category: ["Array", "Binary Search", "Divide and Conquer"],
//   status: "Not Started",
//   description: `Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return **the median** of the two sorted arrays.

// The overall run time complexity should be \`O(log (m + n))\`.`,
//   examples: [
//     {
//       input: "nums1 = [1,3], nums2 = [2]",
//       output: "2.0",
//       explanation: "Merged array = [1,2,3] and median is 2.0.",
//     },
//     {
//       input: "nums1 = [1,2], nums2 = [3,4]",
//       output: "2.5",
//       explanation: "Merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
//     },
//   ],
//   constraints: [
//     "nums1.length == m",
//     "nums2.length == n",
//     "0 <= m <= 1000",
//     "0 <= n <= 1000",
//     "1 <= m + n <= 2000",
//     "-10⁶ <= nums1[i], nums2[i] <= 10⁶",
//   ],
//   starterCode: {
//     javascript: `function findMedianSortedArrays(nums1, nums2) {
//     // Write your code here
    
// }`,
//     typescript: `function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//     // Write your code here
    
// }`,
//     python: `def findMedianSortedArrays(nums1, nums2):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public double findMedianSortedArrays(int[] nums1, int[] nums2) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
//         // Write your code here
        
//     }
// };`,
//     c: `#include <stdlib.h>

// double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
//         // Write your code here
        
//     }
// }`,
//     go: `func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def find_median_sorted_arrays(nums1, nums2)
//   # Write your code here
  
// end`,
//     php: `<?php
// function findMedianSortedArrays($nums1, $nums2) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "trapping-rain-water",
//   title: "42. Trapping Rain Water",
//   difficulty: "Hard",
//   category: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"],
//   status: "Not Started",
//   description: `Given \`n\` non-negative integers representing an elevation map where the width of each bar is \`1\`, compute how much water it is able to trap after raining.`,
//   examples: [
//     {
//       input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
//       output: "6",
//       explanation: "The elevation map (above) can trap 6 units of rain water.",
//     },
//     {
//       input: "height = [4,2,0,3,2,5]",
//       output: "9",
//     },
//   ],
//   constraints: [
//     "n == height.length",
//     "1 <= n <= 2 * 10⁴",
//     "0 <= height[i] <= 10⁵",
//   ],
//   starterCode: {
//     javascript: `function trap(height) {
//     // Write your code here
    
// }`,
//     typescript: `function trap(height: number[]): number {
//     // Write your code here
    
// }`,
//     python: `def trap(height):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int trap(int[] height) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int trap(vector<int>& height) {
//         // Write your code here
        
//     }
// };`,
//     c: `int trap(int* height, int heightSize) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int Trap(int[] height) {
//         // Write your code here
        
//     }
// }`,
//     go: `func trap(height []int) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn trap(height: Vec<i32>) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def trap(height)
//   # Write your code here
  
// end`,
//     php: `<?php
// function trap($height) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func trap(_ height: [Int]) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun trap(height: IntArray): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "merge-k-sorted-lists",
//   title: "23. Merge k Sorted Lists",
//   difficulty: "Hard",
//   category: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"],
//   status: "Not Started",
//   description: `You are given an array of \`k\` linked-lists \`lists\`, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.`,
//   examples: [
//     {
//       input: "lists = [[1,4,5],[1,3,4],[2,6]]",
//       output: "[1,1,2,3,4,4,5,6]",
//       explanation: "The linked-lists are:\n[1->4->5], [1->3->4], [2->6]\nMerging them into one sorted list: [1->1->2->3->4->4->5->6]",
//     },
//     {
//       input: "lists = []",
//       output: "[]",
//     },
//     {
//       input: "lists = [[]]",
//       output: "[]",
//     },
//   ],
//   constraints: [
//     "k == lists.length",
//     "0 <= k <= 10⁴",
//     "0 <= lists[i].length <= 500",
//     "-10⁴ <= lists[i][j] <= 10⁴",
//     "lists[i] is sorted in ascending order.",
//     "The sum of lists[i].length will not exceed 10⁴.",
//   ],
//   starterCode: {
//     javascript: `function mergeKLists(lists) {
//     // Definition for singly-linked list.
//     // function ListNode(val, next) {
//     //     this.val = (val===undefined ? 0 : val)
//     //     this.next = (next===undefined ? null : next)
//     // }

//     // Write your code here
    
// }`,
//     typescript: `class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//     // Write your code here
    
// }`,
//     python: `# Definition for singly-linked list.
// # class ListNode:
// #     def __init__(self, val=0, next=None):
// #         self.val = val
// #         self.next = next

// def mergeKLists(lists):
//     # Write your code here
//     pass`,
//     java: `/**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     int val;
//  *     ListNode next;
//  *     ListNode() {}
//  *     ListNode(int val) { this.val = val; }
//  *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
//  * }
//  */
// class Solution {
//     public ListNode mergeKLists(ListNode[] lists) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `/**
//  * Definition for singly-linked list.
//  * struct ListNode {
//  *     int val;
//  *     ListNode *next;
//  *     ListNode() : val(0), next(nullptr) {}
//  *     ListNode(int x) : val(x), next(nullptr) {}
//  *     ListNode(int x, ListNode *next) : val(x), next(next) {}
//  * };
//  */
// class Solution {
// public:
//     ListNode* mergeKLists(vector<ListNode*>& lists) {
//         // Write your code here
        
//     }
// };`,
//     csharp: `public class ListNode {
//     public int val;
//     public ListNode next;
//     public ListNode(int val=0, ListNode next=null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// public class Solution {
//     public ListNode MergeKLists(ListNode[] lists) {
//         // Write your code here
        
//     }
// }`,
//     go: `type ListNode struct {
//     Val  int
//     Next *ListNode
// }

// func mergeKLists(lists []*ListNode) *ListNode {
//     // Write your code here
    
// }`,
//     rust: `// Definition for singly-linked list.
// // #[derive(PartialEq, Eq, Clone, Debug)]
// // pub struct ListNode {
// //   pub val: i32,
// //   pub next: Option<Box<ListNode>>,
// // }

// impl Solution {
//     pub fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `# Definition for singly-linked list.
// # class ListNode
// #   attr_accessor :val, :next
// #   def initialize(val = 0, _next = nil)
// #     @val = val
// #     @next = _next
// #   end
// # end
// def merge_k_lists(lists)
//   # Write your code here
  
// end`,
//     php: `<?php
// // Definition for a singly-linked list.
// // class ListNode {
// //     public $val = 0;
// //     public $next = null;
// //     function __construct($val = 0, $next = null) {
// //         $this->val = $val;
// //         $this->next = $next;
// //     }
// // }
// function mergeKLists($lists) {
//     // Write your code here
    
// }`,
//     swift: `public class ListNode {
//     public var val: Int
//     public var next: ListNode?
//     public init() { self.val = 0; self.next = nil; }
//     public init(_ val: Int) { self.val = val; self.next = nil; }
//     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
// }

// class Solution {
//     func mergeKLists(_ lists: [ListNode?]) -> ListNode? {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class ListNode(var \`val\`: Int) {
//     var next: ListNode? = null
// }

// class Solution {
//     fun mergeKLists(lists: Array<ListNode?>): ListNode? {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "word-ladder",
//   title: "127. Word Ladder",
//   difficulty: "Hard",
//   category: ["Hash Table", "String", "Breadth-First Search"],
//   status: "Not Started",
//   description: `A transformation sequence from word \`beginWord\` to word \`endWord\` using a dictionary \`wordList\` is a sequence of words \`beginWord -> s1 -> s2 -> ... -> endWord\` such that:

// - Every adjacent pair of words differs by a single letter.
// - Every \`si\` for 1 <= i <= k is in \`wordList\`.
// - \`beginWord\` is not necessarily in \`wordList\`.

// Given two words, \`beginWord\` and \`endWord\`, and a dictionary \`wordList\`, return the number of words in the shortest transformation sequence from \`beginWord\` to \`endWord\`, or 0 if no such sequence exists.`,
//   examples: [
//     {
//       input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
//       output: "5",
//       explanation: "One shortest transformation is 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog', which is 5 words long.",
//     },
//     {
//       input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log']",
//       output: "0",
//       explanation: "The endWord 'cog' is not in wordList, so there is no valid transformation sequence.",
//     },
//   ],
//   constraints: [
//     "1 <= beginWord.length <= 10",
//     "endWord.length == beginWord.length",
//     "1 <= wordList.length <= 5000",
//     "wordList[i].length == beginWord.length",
//     "beginWord, endWord, and wordList[i] consist of lowercase English letters.",
//     "beginWord != endWord",
//   ],
//   starterCode: {
//     javascript: `function ladderLength(beginWord, endWord, wordList) {
//     // Write your code here
    
// }`,
//     typescript: `function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
//     // Write your code here
    
// }`,
//     python: `def ladderLength(beginWord, endWord, wordList):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int ladderLength(String beginWord, String endWord, List<String> wordList) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
//         // Write your code here
        
//     }
// };`,
//     csharp: `public class Solution {
//     public int LadderLength(string beginWord, string endWord, IList<string> wordList) {
//         // Write your code here
        
//     }
// }`,
//     go: `func ladderLength(beginWord string, endWord string, wordList []string) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def ladder_length(begin_word, end_word, word_list)
//   # Write your code here
  
// end`,
//     php: `<?php
// function ladderLength($beginWord, $endWord, $wordList) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func ladderLength(_ beginWord: String, _ endWord: String, _ wordList: [String]) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun ladderLength(beginWord: String, endWord: String, wordList: List<String>): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "longest-valid-parentheses",
//   title: "32. Longest Valid Parentheses",
//   difficulty: "Hard",
//   category: ["String", "Dynamic Programming", "Stack"],
//   status: "Not Started",
//   description: `Given a string containing just the characters \`'('\` and \`')'\`, return the length of the longest valid (well-formed) parentheses substring.`,
//   examples: [
//     {
//       input: `s = "(()"`,
//       output: "2",
//       explanation: "The longest valid parentheses substring is '()'.",
//     },
//     {
//       input: `s = ")()())"`,
//       output: "4",
//       explanation: "The longest valid parentheses substring is '()()'.",
//     },
//     {
//       input: `s = ""`,
//       output: "0",
//     },
//   ],
//   constraints: [
//     "0 <= s.length <= 3 * 10⁴",
//     "s[i] is either '(' or ')'.",
//   ],
//   starterCode: {
//     javascript: `function longestValidParentheses(s) {
//     // Write your code here
    
// }`,
//     typescript: `function longestValidParentheses(s: string): number {
//     // Write your code here
    
// }`,
//     python: `def longestValidParentheses(s):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int longestValidParentheses(String s) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     int longestValidParentheses(string s) {
//         // Write your code here
        
//     }
// };`,
//     c: `int longestValidParentheses(char * s){
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int LongestValidParentheses(string s) {
//         // Write your code here
        
//     }
// }`,
//     go: `func longestValidParentheses(s string) int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn longest_valid_parentheses(s: String) -> i32 {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def longest_valid_parentheses(s)
//   # Write your code here
  
// end`,
//     php: `<?php
// function longestValidParentheses($s) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func longestValidParentheses(_ s: String) -> Int {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun longestValidParentheses(s: String): Int {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "sliding-window-maximum",
//   title: "239. Sliding Window Maximum",
//   difficulty: "Hard",
//   category: ["Array", "Queue", "Sliding Window", "Monotonic Queue", "Heap (Priority Queue)"],
//   status: "Not Started",
//   description: `You are given an array of integers \`nums\`, and there is a sliding window of size \`k\` which moves from the very left of the array to the very right. You can only see the \`k\` numbers in the window. Each time the sliding window moves right by one position.

// Return an array of the maximum values in each sliding window.`,
//   examples: [
//     {
//       input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
//       output: "[3,3,5,5,6,7]",
//       explanation: "Window position max: [1,3,-1] → 3 | [3,-1,-3] → 3 | [-1,-3,5] → 5 | [-3,5,3] → 5 | [5,3,6] → 6 | [3,6,7] → 7",
//     },
//     {
//       input: "nums = [1], k = 1",
//       output: "[1]",
//     },
//     {
//       input: "nums = [1,-1], k = 1",
//       output: "[1,-1]",
//     },
//     {
//       input: "nums = [9,11], k = 2",
//       output: "[11]",
//     },
//     {
//       input: "nums = [4,-2], k = 2",
//       output: "[4]",
//     },
//   ],
//   constraints: [
//     "1 <= nums.length <= 10⁵",
//     "-10⁴ <= nums[i] <= 10⁴",
//     "1 <= k <= nums.length",
//   ],
//   starterCode: {
//     javascript: `function maxSlidingWindow(nums, k) {
//     // Write your code here
    
// }`,
//     typescript: `function maxSlidingWindow(nums: number[], k: number): number[] {
//     // Write your code here
    
// }`,
//     python: `def maxSlidingWindow(nums, k):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public int[] maxSlidingWindow(int[] nums, int k) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     vector<int> maxSlidingWindow(vector<int>& nums, int k) {
//         // Write your code here
        
//     }
// };`,
//     c: `int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public int[] MaxSlidingWindow(int[] nums, int k) {
//         // Write your code here
        
//     }
// }`,
//     go: `func maxSlidingWindow(nums []int, k int) []int {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def max_sliding_window(nums, k)
//   # Write your code here
  
// end`,
//     php: `<?php
// function maxSlidingWindow($nums, $k) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun maxSlidingWindow(nums: IntArray, k: Int): IntArray {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "n-queens",
//   title: "51. N-Queens",
//   difficulty: "Hard",
//   category: ["Array", "Backtracking"],
//   status: "Not Started",
//   description: `The **n-queens puzzle** is the problem of placing \`n\` queens on an \`n x n\` chessboard such that no two queens attack each other.

// Given an integer \`n\`, return *all distinct solutions* to the **n-queens puzzle**.

// Each solution contains a distinct board configuration of the n-queens placement, where \`'Q'\` and \`'.'\` both indicate a queen and an empty space, respectively.`,
//   examples: [
//     {
//       input: "n = 4",
//       output: `[[".Q..","...Q","Q...","..Q."],
// ["..Q.","Q...","...Q",".Q.."]]`,
//       explanation: `There exist two distinct solutions to the 4-queens puzzle.`,
//     },
//     {
//       input: "n = 1",
//       output: `[["Q"]]`,
//     },
//   ],
//   constraints: ["1 <= n <= 9"],
//   starterCode: {
//     javascript: `function solveNQueens(n) {
//     // Write your code here
    
// }`,
//     typescript: `function solveNQueens(n: number): string[][] {
//     // Write your code here
    
// }`,
//     python: `def solveNQueens(n):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public List<List<String>> solveNQueens(int n) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     vector<vector<string>> solveNQueens(int n) {
//         // Write your code here
        
//     }
// };`,
//     c: `char*** solveNQueens(int n, int* returnSize, int** returnColumnSizes) {
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public IList<IList<string>> SolveNQueens(int n) {
//         // Write your code here
        
//     }
// }`,
//     go: `func solveNQueens(n int) [][]string {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def solve_n_queens(n)
//   # Write your code here
  
// end`,
//     php: `<?php
// function solveNQueens($n) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func solveNQueens(_ n: Int) -> [[String]] {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun solveNQueens(n: Int): List<List<String>> {
//         // Write your code here
        
//     }
// }`,
//   },
// },
// {
//   id: "minimum-window-substring",
//   title: "76. Minimum Window Substring",
//   difficulty: "Hard",
//   category: ["Hash Table", "String", "Sliding Window"],
//   status: "Not Started",
//   description: `Given two strings \`s\` and \`t\`, return the minimum window substring of \`s\` such that every character in \`t\` (including duplicates) is included in the window. If there is no such substring, return an empty string "".`,
//   examples: [
//     {
//       input: `s = "ADOBECODEBANC", t = "ABC"`,
//       output: `"BANC"`,
//       explanation: `"BANC" is the minimum window substring of "ADOBECODEBANC" that contains 'A', 'B', and 'C'.`,
//     },
//     {
//       input: `s = "a", t = "a"`,
//       output: `"a"`,
//       explanation: `The entire string "a" contains all characters of t.`,
//     },
//     {
//       input: `s = "a", t = "aa"`,
//       output: `""`,
//       explanation: `Both 'a's from t must be included in the window, but only one 'a' is present in s.`,
//     },
//   ],
//   constraints: [
//     "1 <= s.length, t.length <= 10⁵",
//     "s and t consist of uppercase and lowercase English letters.",
//   ],
//   starterCode: {
//     javascript: `function minWindow(s, t) {
//     // Write your code here
    
// }`,
//     typescript: `function minWindow(s: string, t: string): string {
//     // Write your code here
    
// }`,
//     python: `def minWindow(s, t):
//     # Write your code here
//     pass`,
//     java: `class Solution {
//     public String minWindow(String s, String t) {
//         // Write your code here
        
//     }
// }`,
//     cpp: `class Solution {
// public:
//     string minWindow(string s, string t) {
//         // Write your code here
        
//     }
// };`,
//     c: `char * minWindow(char * s, char * t){
//     // Write your code here
    
// }`,
//     csharp: `public class Solution {
//     public string MinWindow(string s, string t) {
//         // Write your code here
        
//     }
// }`,
//     go: `func minWindow(s string, t string) string {
//     // Write your code here
    
// }`,
//     rust: `impl Solution {
//     pub fn min_window(s: String, t: String) -> String {
//         // Write your code here
        
//     }
// }`,
//     ruby: `def min_window(s, t)
//   # Write your code here
  
// end`,
//     php: `<?php
// function minWindow($s, $t) {
//     // Write your code here
    
// }`,
//     swift: `class Solution {
//     func minWindow(_ s: String, _ t: String) -> String {
//         // Write your code here
        
//     }
// }`,
//     kotlin: `class Solution {
//     fun minWindow(s: String, t: String): String {
//         // Write your code here
        
//     }
// }`,
//   },
// }

];
