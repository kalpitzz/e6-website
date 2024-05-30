import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRandomColor() {
  // Generate random color code in hexadecimal format
  const color = Math.floor(Math.random() * 16777215).toString(16);
  // Pad the color code with zeros if necessary to ensure it has 6 digits
  return "#" + color.padStart(6, "0");
}
