export type Markdown = string;

export interface Sourcefile {
  language: string;
  filename: string;
  contents: string;
}

export interface Solution {
  user: string;
  problem: string;
  files: Sourcefile[];
  explanation: Markdown;
}

export interface Meeting {
  text: Markdown;
}
