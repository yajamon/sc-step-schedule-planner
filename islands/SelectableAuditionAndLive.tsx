import { useState } from "preact/hooks";
import { Calendar } from "../components/dataset.ts";
import { AuditionAndLive } from "../components/AuditionAndLive.tsx"

interface ScheduleUnit {
    // key
    season: number;
    week: number;
    // value
    auditionOrLiveId: string;
}
type Schedule = ScheduleUnit[];

type Props = {
    calendar: Calendar,
}
export default function SelectableAuditionAndLive({calendar}: Props) {

    const [schedule, setSchedule] = useState<Schedule>([]);
    return (
        <AuditionAndLive calendar={calendar} />
    );
}
