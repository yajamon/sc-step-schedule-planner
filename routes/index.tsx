import { Head } from "$fresh/runtime.ts";
import { calendar } from "../components/dataset.ts";
import { AuditionAndLive } from "../components/AuditionAndLive.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>SC S.T.E.P. スケジュールプランナー</title>
      </Head>
      <div class="p-4 items-center bg-gray-300 dark:bg-gray-800 dark:text-white">
        <AuditionAndLive calendar={calendar} />
      </div>
    </>
  );
}
