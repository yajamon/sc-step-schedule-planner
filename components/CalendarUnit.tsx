import { CalendarUnit as CalendarUnitData } from "./dataset.ts";

export function CalendarUnit(props: { unit: CalendarUnitData }) {
  //FIXME: 「お仕事」にはプロデュース内に別の文脈がある
  const works = props.unit.works.map((record) => <div>{record.name}</div>);
  return (
    <div>
      <div>
        シーズン{props.unit.season}、第{props.unit.week}週
      </div>
      <div>{works}</div>
    </div>
  );
}
