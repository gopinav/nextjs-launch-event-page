export const frameworks = [
  "react",
  "chrome",
  "qwik",
  "mobile",
  "tailwind",
  "desktop",
  "vue",
  "safari",
  "svelte",
] as const;

export type Framework = (typeof frameworks)[number];
