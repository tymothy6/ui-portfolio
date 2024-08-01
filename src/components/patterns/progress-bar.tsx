import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <motion.div
      className={`w-full h-1 bg-teal-400 dark:bg-teal-500 ${className}`}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
}
