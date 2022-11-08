import { AuditionOrLiveRecord } from "./dataset.ts";

interface Props {
  record: AuditionOrLiveRecord;
}

export function AuditionOrLive(props: Props) {
  const { name } = props.record;
  return (
    <div>
      {name}
    </div>
  );
}
