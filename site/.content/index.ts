import type { Meeting, Solution } from "../src/lib/index";

// getting an error here? You need to run the build-content command.
import m from "./meetings.json";
import s from "./solutions.json";

export const solutions = s as Solution[];
export const meetings = m as Meeting[];
