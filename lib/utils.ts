import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper to merge class names properly
export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}
