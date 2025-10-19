"use client";
import { useState } from "react";
import { Filter, LayoutGrid, List } from "lucide-react";
import Header from "@/components/Header";
import FilterPanel from "@/components/FilterPanel";
import ProblemTable, { Problem } from "@/components/ProblemTable";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data
const mockProblems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: 49.2,
    tags: ["Array", "Hash Table"],
    status: "solved",
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    acceptance: 41.8,
    tags: ["Linked List", "Math"],
    status: "attempted",
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: 35.4,
    tags: ["String", "Sliding Window"],
    status: "unsolved",
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: 37.1,
    tags: ["Array", "Binary Search"],
    status: "unsolved",
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    acceptance: 33.5,
    tags: ["String", "Dynamic Programming"],
    status: "solved",
  },
  {
    id: 6,
    title: "Reverse Integer",
    difficulty: "Easy",
    acceptance: 28.1,
    tags: ["Math"],
    status: "solved",
  },
  {
    id: 7,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    acceptance: 16.9,
    tags: ["String"],
    status: "attempted",
  },
  {
    id: 8,
    title: "Container With Most Water",
    difficulty: "Medium",
    acceptance: 54.8,
    tags: ["Array", "Two Pointers"],
    status: "unsolved",
  },
];

const Problems = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <FilterPanel isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Practice Problems</h1>
            <p className="text-muted-foreground">
              Master algorithms and data structures with our curated problem set
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden md:inline">
                  {mockProblems.length} problems
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort */}
              <Select defaultValue="recent">
                <SelectTrigger className="w-[140px] md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                  <SelectItem value="acceptance">Acceptance Rate</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle - Desktop only */}
              <div className="hidden md:flex items-center gap-1 p-1 bg-muted rounded-lg">
                <Button variant="ghost" size="icon" className="h-8 w-8 bg-background">
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Problems Table */}
          <ProblemTable problems={mockProblems} />

          {/* Pagination Info */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Showing 1-8 of {mockProblems.length} problems
          </div>
        </main>
      </div>
    </div>
  );
};

export default Problems;
