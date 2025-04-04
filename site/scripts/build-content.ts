import { buildMeetings, buildSolutions } from "@/lib/build";
import path from "path";
import fs from "fs";


const rootPath = path.resolve(__dirname, "../..");

const meetingsDirectory = path.join(rootPath, "meetings");
const solutionsDirectory = path.join(rootPath, "solutions");
const contentDirectory = path.join(rootPath, "site/.content");

console.log("Building solutions:");
const solutions = JSON.stringify(buildSolutions(solutionsDirectory));
console.log("\nBuilding meetings:");
const meetings = JSON.stringify(buildMeetings(meetingsDirectory));

const solutionsFilename = path.join(contentDirectory, "solutions.json");
const meetingsFilename = path.join(contentDirectory, "meetings.json");

fs.writeFileSync(solutionsFilename, solutions);
fs.writeFileSync(meetingsFilename, meetings);
