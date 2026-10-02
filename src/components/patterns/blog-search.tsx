"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search post title or tags..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 w-80 md:w-64 lg:w-80 text-md"
      />
    </div>
  );
}
