import { Search, Code2, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {ThemeToggle} from "./ThemeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">CodeArena</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-smooth hover:text-primary">
            Problems
          </Link>
          <Link href="/contests" className="text-sm font-medium transition-smooth hover:text-primary">
            Contests
          </Link>
          <Link href="/discuss" className="text-sm font-medium transition-smooth hover:text-primary">
            Discuss
          </Link>
        </nav>

        {/* Search - Desktop */}
        <div className="hidden lg:flex items-center gap-4 flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search problems..."
              className="pl-9 bg-secondary/50 border-border transition-smooth focus:bg-background"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex">Sign In</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
