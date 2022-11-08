import { CalendarUnit as CalendarUnitData } from "./dataset.ts";

export function CalendarUnit(props: { unit: CalendarUnitData }) {
  return <div>シーズン{props.unit.season}、第{props.unit.week}週</div>;
}
