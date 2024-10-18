import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { notificationsAtom, totalNotificationsCount } from "./atom";
// import { useEffect } from "react";
// import { useMemo } from "react";

function App() {
  const [notificationsCount, setNotificationsCount] = useRecoilState(notificationsAtom);
  const total = useRecoilValue(totalNotificationsCount);

  //method 1:
  // const totalCount = useMemo(() => {
  //   return networkCount + jobsCount + messagingCount;
  // }, [networkCount, jobsCount, messagingCount]);

  //async-query-bits
  // useEffect(() => {
  //   // setTimeout(() => {

  //   // }, 5000);
  //   axios.get("https://practic-repo.onrender.com/notifications").then((res) => {
  //     console.log(res.data);
  //     setNotificationsCount(res.data);
  //   });
  // }, []);
  return (
    <>
      <button>Home</button>
      <button>
        Notifications (
        {notificationsCount.notifications >= 100
          ? "99+"
          : notificationsCount.notifications}
        )
      </button>
      <button>
        Jobs ({notificationsCount.jobs >= 100 ? "99+" : notificationsCount.jobs}
        )
      </button>
      <button>
        messaging (
        {notificationsCount.messaging >= 100
          ? "99+"
          : notificationsCount.messaging}
        )
      </button>
      <button>
        My Network (
        {notificationsCount.network >= 100 ? "99+" : notificationsCount.network}
        )
      </button>

      {/* <ButtonUpdater /> */}
      <button>Total count ({total})</button>
    </>
  );
}

// function ButtonUpdater() {
//   const setMessagingAtom = useSetRecoilState(messagingAtom);
//   return (
//     <button
//       onClick={() => {
//         setMessagingAtom((c) => c + 1);
//       }}
//     >
//       Me
//     </button>
//   );
// }

export default App;
