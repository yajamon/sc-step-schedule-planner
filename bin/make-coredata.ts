interface ScheduleRecord {
  season: number;
  week: number;
  work: string;
}
const schedule: ScheduleRecord[] = await (async () => {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile("../static/schedule-flat.json");
  const json = JSON.parse(decoder.decode(data));
  return json.table as ScheduleRecord[];
})();
// console.log(schedule);

interface WorkRecord {
  id: string;
  kind: string;
  name: string;
  difficulty: number;
  fan: number;
  vo: number;
  da: number;
  vi: number;
  me: number;
  sp: number;
  love: number;
  bonus: string;
}
const work: Map<string, WorkRecord> = await (async () => {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile("../static/audition-live-flat.json");
  const json = JSON.parse(decoder.decode(data));
  const records = json.table as WorkRecord[];
  const map = new Map();
  for (let r of records) {
    map.set(r.id, r);
  }
  return map;
})();
// console.log(work);

interface Schedule {
  season: number;
  week: number;
  works: WorkRecord[];
}

let result: Map<[number, number], Schedule> = new Map();
for (let record of schedule) {
  const key: [number, number] = [record.season, record.week];
  if (!result.has(key)) {
    result.set(key, {
      season: record.season,
      week: record.week,
      works: [],
    });
  }
  const w = work.get(record.work);
  const s = result.get(key);
  if (s && w) {
    s.works.push(w);
    result.set(key, s);
  }
}
console.log(Array.from(result.values()));
