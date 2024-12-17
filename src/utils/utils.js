import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const timeAgo = (time) => {
  const timeFormat = formatDistanceToNow(new Date(time), {
    addSuffix: true,
  });

  return timeFormat;
};
