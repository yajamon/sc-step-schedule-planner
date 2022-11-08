import { AuditionOrLiveRecord } from "./dataset.ts";

interface Props {
  record: AuditionOrLiveRecord;
}

export function AuditionOrLive(props: Props) {
  const { name, kind, difficulty } = props.record;
  const { fan, vo, da, vi, me, sp, love, bonus } = props.record;
  return (
    <div class="flex flex-col flex-1 p-2 bg-white dark:bg-gray-700">
      <div class="flex flex-row">
        <div class="flex-none p-3 w-44">
          {kind}
        </div>
        <div class="flex-auto p-3">
          {name}
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col">
          <div class="flex-auto">ファン数: +{fan}</div>
          <div class="flex-auto">歌唱力: +{vo}</div>
          <div class="flex-auto">安定感: +{da}</div>
          <div class="flex-auto">表現力: +{vi}</div>
          <div class="flex-auto">集中力: +{me}</div>
          <div class="flex-auto">団結力: +{sp}</div>
        </div>
        <div class="flex flex-col">
          <div class="flex-auto">親愛度： +{love}</div>
          <div class="flex-auto">ボーナス：{bonus}</div>
        </div>
      </div>
    </div>
  );
}
