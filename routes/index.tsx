import { Head } from "$fresh/runtime.ts";
import { calendar } from "../components/dataset.ts";
import SelectableAuditionAndLive from "../islands/SelectableAuditionAndLive.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>SC S.T.E.P. スケジュールプランナー</title>
      </Head>
      <div class="p-4 items-center dark:bg-gray-800 dark:text-white">
        <SelectableAuditionAndLive calendar={calendar} />
      </div>
    </>
  );
}
