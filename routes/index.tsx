import { Head } from "$fresh/runtime.ts";
import { calendar } from "../components/dataset.ts";
import { AuditionAndLive } from "../components/AuditionAndLive.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>SC S.T.E.P. スケジュールプランナー</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <AuditionAndLive calendar={calendar} />
      </div>
    </>
  );
}
