import { motion } from "framer-motion"

interface ProgressBarProps {
    progress: number
    className?: string;
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <motion.div
      className={`w-full h-0.5 bg-gradient-to-br from-primary dark:to-indigo-500 to-indigo-600 rounded-r-sm ${className}`}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  )
}