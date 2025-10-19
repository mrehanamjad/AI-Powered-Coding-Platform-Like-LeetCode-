import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterPanel = ({ isOpen, onClose }: FilterPanelProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  const difficulties = ["Easy", "Medium", "Hard"];
  const topics = [
    "Array",
    "String",
    "Hash Table",
    "Dynamic Programming",
    "Math",
    "Sorting",
    "Greedy",
    "Tree",
    "Graph",
    "Binary Search",
  ];
  const statuses = ["Solved", "Attempted", "Unsolved"];

  const toggleFilter = (category: string[], value: string, setter: (val: string[]) => void) => {
    if (category.includes(value)) {
      setter(category.filter((item) => item !== value));
    } else {
      setter([...category, value]);
    }
  };

  return (
    <aside
      className={`
        fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-card border-r z-40
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Filters</h2>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="h-[calc(100%-4rem)]">
        <div className="p-4 space-y-6">
          {/* Difficulty Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Difficulty</h3>
            {difficulties.map((diff) => (
              <div key={diff} className="flex items-center space-x-2">
                <Checkbox
                  id={`diff-${diff}`}
                  checked={selectedDifficulty.includes(diff)}
                  onCheckedChange={() =>
                    toggleFilter(selectedDifficulty, diff, setSelectedDifficulty)
                  }
                />
                <Label
                  htmlFor={`diff-${diff}`}
                  className="text-sm cursor-pointer transition-smooth hover:text-primary"
                >
                  {diff}
                </Label>
              </div>
            ))}
          </div>

          <Separator />

          {/* Status Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Status</h3>
            {statuses.map((status) => (
              <div key={status} className="flex items-center space-x-2">
                <Checkbox
                  id={`status-${status}`}
                  checked={selectedStatus.includes(status)}
                  onCheckedChange={() => toggleFilter(selectedStatus, status, setSelectedStatus)}
                />
                <Label
                  htmlFor={`status-${status}`}
                  className="text-sm cursor-pointer transition-smooth hover:text-primary"
                >
                  {status}
                </Label>
              </div>
            ))}
          </div>

          <Separator />

          {/* Topics Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Topics</h3>
            {topics.map((topic) => (
              <div key={topic} className="flex items-center space-x-2">
                <Checkbox
                  id={`topic-${topic}`}
                  checked={selectedTopics.includes(topic)}
                  onCheckedChange={() => toggleFilter(selectedTopics, topic, setSelectedTopics)}
                />
                <Label
                  htmlFor={`topic-${topic}`}
                  className="text-sm cursor-pointer transition-smooth hover:text-primary"
                >
                  {topic}
                </Label>
              </div>
            ))}
          </div>

          <Separator />

          {/* Reset */}
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setSelectedDifficulty([]);
              setSelectedTopics([]);
              setSelectedStatus([]);
            }}
          >
            Reset Filters
          </Button>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default FilterPanel;
