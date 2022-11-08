import { CalendarUnit as CalendarUnitData } from "./dataset.ts";
import { AuditionOrLive } from "./AuditionOrLive.tsx";

export function CalendarUnit(props: { unit: CalendarUnitData }) {
  //FIXME: 「お仕事」にはプロデュース内に別の文脈がある
  const works = props.unit.works.map((record) => (
    <AuditionOrLive record={record} />
  ));
  return (
    <div class="p-3 bg-gray-200 dark:bg-gray-700">
      <div>
        シーズン{props.unit.season}、第{props.unit.week}週
      </div>
      <div class="flex p-2 gap-2 bg-gray-300 dark:bg-gray-800">{works}</div>
    </div>
  );
}
