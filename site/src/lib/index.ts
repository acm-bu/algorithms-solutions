export type Markdown = string;

type Language =
  | "Unknown"
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "C++"
  | "C"
  | "Java"
  | "Ruby"
  | "C#"
  | "Elixir"
  | "Rust"

export function extensionToLanguage(ext: string): Language {
  const map: Map<string, Language> = new Map([
    ["ts", "TypeScript"],
    ["js", "JavaScript"],
    ["py", "Python"],
    ["cpp", "C++"],
    ["c", "C"],
    ["java", "Java"],
    ["rb", "Ruby"],
    ["cs", "C#"],
    ["ex", "Elixir"],
    ["rs", "Rust"],
  ]);

  if (map.has(ext)) {
    return map.get(ext)!;
  }

  return "Unknown";
}

export interface Sourcefile {
  language: string;
  filename: string;
  contents: string;
}

export interface Solution {
  user: string;
  problem: string;
  files: Sourcefile[];
  explanation: Markdown | null;
}

export interface Meeting {
  text: Markdown;
  date: Date;
}
