import MeetingView from "@/components/meeting";
import { meetings } from "@content/index";
import { notFound } from "next/navigation";

export default async function SpecificMeeting({ params }: { params: Promise<{ meeting: string }> }) {
  const p = await params;
  console.log(meetings.length);

  const meeting = meetings.find((m) => {
    console.log(m.date);
    return m.date === p.meeting
  });

  if (meeting === undefined) {
    notFound();
  }

  return (
    <div className="mx-4">
      <div className="flex flex-col max-w-[60rem] mx-auto">
        <h1 className="text-4xl mt-16 mb-4">Algorithms Practice on {meeting.date}</h1>
        <hr className="my-8" />
        <MeetingView meeting={meeting} />
      </div>
    </div>

  )
}
