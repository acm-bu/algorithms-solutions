import { Meeting } from "@/lib";
import Markdown from "react-markdown";


export default function MeetingView({ meeting }: { meeting: Meeting }) {
  return (
    <article className="content">
      <Markdown>
        {meeting.text}
      </Markdown>
    </article>
  )

}
