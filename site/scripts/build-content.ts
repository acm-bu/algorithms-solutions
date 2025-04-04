import { buildMeetings, buildSolutions } from "@/lib/build";
import path from "path";


const rootPath = path.resolve(__dirname, "../..");

const meetingsDirectory = path.join(rootPath, "meetings");
const solutionsDirectory = path.join(rootPath, "solutions");

const solutions = buildSolutions(solutionsDirectory);
const meetings = buildMeetings(meetingsDirectory);

console.log(meetings);
