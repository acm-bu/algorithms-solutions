import { Meeting } from "@/lib";
import Markdown from "react-markdown";


export default function MeetingView({ meeting }: { meeting: Meeting }) {
  return (
    <Markdown>
      {meeting.text}
    </Markdown>
  )

}
