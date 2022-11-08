import { Calendar } from "./dataset.ts";
import { CalendarUnit } from "./CalendarUnit.tsx";

export type Props = {
  calendar: Calendar;
};
export function AuditionAndLive(props: Props) {
  const calendarComponent = props.calendar.map((unit) => (
    <CalendarUnit unit={unit} />
  ));
  return (
    <>
      <h2>オーディション＆ライブ</h2>
      {calendarComponent}
    </>
  );
}
