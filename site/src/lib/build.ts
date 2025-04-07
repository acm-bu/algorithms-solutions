import { extensionToLanguage, Meeting, Solution } from ".";
import fs from "fs";
import path from "path";

export function buildSolutions(rootDir: string): Solution[] {
  const solutions: Solution[] = [];
  
  const problems = fs.readdirSync(rootDir);
  
  for (const problemName of problems) {
    const problemDir = path.join(rootDir, problemName);
    const users = fs.readdirSync(problemDir);

    for (const username of users) {
      const solutionDir = path.join(problemDir, username); 
      const solution: Solution = {
        user: username,
        problem: problemName,
        files: [],
        explanation: null,
      }

      const files = fs.readdirSync(solutionDir);

      for (const filename of files) {
        const filepath = path.join(solutionDir, filename);

        if (filename === "explanation.md") {
          const text = fs.readFileSync(filepath);
          solution.explanation = text.toString();
        } else {
          const ext = getExtension(filename);
          const language = extensionToLanguage(ext);
          const contents = fs.readFileSync(filepath);

          solution.files.push({
            filename: filename,
            language: language,
            contents: contents.toString(),
          });
        }
      }
      console.log(` Built solution ${solutionDir}`);
      solutions.push(solution);
    }

  }

  return solutions;
}

export function buildMeetings(meetingsDirectory: string): Meeting[] {
  const meetings: Meeting[] = [];

  const filenames = fs.readdirSync(meetingsDirectory);
  for (const filename of filenames) {
    const filepath = path.join(meetingsDirectory, filename);
    const date = parseMeetingFilename(filename);
    const text = fs.readFileSync(filepath);
    meetings.push({
      text: text.toString(),
      date: date,
    });
    console.log(`  Built meeting ${filepath}`);
  }

  return meetings
}

function getExtension(filename: string): string {
  const split = filename.split(".");
  if (split.length <= 1) {
    return "";
  }

  return split.pop()!;

}

function parseMeetingFilename(filename: string): string {
  const extSplit = filename.split(".");
  if (extSplit.length !== 2) {
    throw new Error(`Failed parsing ${filename} as meeting (split != 2)`);
  }

  const datestring = extSplit[0];
  const dateSplit = datestring.split("-");

  if (dateSplit.length !== 3) {
    throw new Error(`Failed parsing ${filename} as meeting (date split != 3)`);
  }

  return datestring;
}

