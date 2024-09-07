/**
 * Combines multiple class names or conditional class objects into a single string.
 *
 * @param classes - The class names or conditional class objects to be combined.
 * @returns The combined class names as a string.
 */
export function cn(
  ...classes: (string | { [key: string]: boolean })[]
): string {
  return classes
    .map((c) =>
      typeof c === "string"
        ? c
        : Object.entries(c)
            .filter((e) => e[1])
            .map((e) => e[0])
            .join(" ")
    )
    .join(" ");
}

export type IBlog = {
  id: string;
  title: string;
  date: string;
};