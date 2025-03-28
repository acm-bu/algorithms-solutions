import { Solution } from ".";
import fs from "fs";
import path from "path";

export function buildProblems(problemsDirectory: string): Solution[] {
  const solutions: Solution[] = [];
  
  const problems = fs.readdirSync(problemsDirectory);
  
  for (const problemDirname of problems) {
    const problemDir = path.join(problemsDirectory, problemDirname);

    console.log(problemDir);
  }

  return solutions;
}

// builds meetings into html
export function buildMeetings(outFilepath: string, meetingsDirectory: string): string {

}
