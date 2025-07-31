"use client";

import { readingTime } from "reading-time-estimator";
import { ClockIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReadingTimeProps {
  text: string;
  className?: string;
  showIcon?: boolean;
  wordsPerMinute?: number;
}

export function ReadingTime({ 
  text, 
  className, 
  showIcon = true, 
  wordsPerMinute = 300 
}: ReadingTimeProps) {
  if (!text.trim()) {
    return null;
  }

  const result = readingTime(text, wordsPerMinute);

  return (
    <div className={cn("flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400", className)}>
      {showIcon && <ClockIcon className="h-4 w-4" />}
      <span>{result.text}</span>
    </div>
  );
} 