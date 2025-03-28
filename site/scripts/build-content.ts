import { buildProblems } from "@/lib/build";
import path from "path";



const rootPath = path.resolve(__dirname, "../..");

const meetingsDirectory = path.join(rootPath, "meetings");
const problemsDirectory = path.join(rootPath, "solutions");

buildSolutions(problemsDirectory);

console.log(meetingsDirectory, problemsDirectory);
