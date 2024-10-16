import { useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { jobsAtom, messagingAtom, networkAtom, totalCount } from "./atom";
// import { useMemo } from "react";

function App() {
  const networkCount = useRecoilValue(networkAtom);

  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const total = useRecoilValue(totalCount);

  //method 1:
  // const totalCount = useMemo(() => {
  //   return networkCount + jobsCount + messagingCount;
  // }, [networkCount, jobsCount, messagingCount]);
  return (
    <>
      <button>Home</button>

      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>
        messaging ({messagingCount >= 100 ? "99+" : messagingCount})
      </button>
      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>

      <ButtonUpdater />
      <button>Total count ({total})</button>
    </>
  );
}

function ButtonUpdater() {
  const setMessagingAtom = useSetRecoilState(messagingAtom);
  return (
    <button
      onClick={() => {
        setMessagingAtom((c) => c + 1);
      }}
    >
      Me
    </button>
  );
}

export default App;
