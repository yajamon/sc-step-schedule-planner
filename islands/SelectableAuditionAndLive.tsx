import { Calendar } from "../components/dataset.ts";
import { AuditionAndLive } from "../components/AuditionAndLive.tsx"

type Props = {
    calendar: Calendar,
}
export default function SelectableAuditionAndLive({calendar}: Props) {
    return (
        <AuditionAndLive calendar={calendar} />
    );
}
