import { Calendar } from "./dataset.ts";

export type Props = {
  calendar: Calendar;
};
export function AuditionAndLive(props: Props) {
  const calendarComponent = props.calendar.map((unit) => {
    return <div>シーズン{unit.season}、第{unit.week}週</div>;
  });
  return (
    <>
      <h2>オーディション＆ライブ</h2>
      {calendarComponent}
    </>
  );
}
