// import { atom, selector } from "recoil";

import axios from "axios";
import { atom, selector } from "recoil";

// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: 105,
// });

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 0,
// });

// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default: 95,
// });

// export const totalCount = selector({
//   key: "totalCount",
//   get: ({ get }) => {
//     const jobsCount = get(jobsAtom);
//     const networkCount = get(networkAtom);
//     const messagingCount = get(messagingAtom);

//     return jobsCount + networkCount + messagingCount;
//   },
// });

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: selector({
    key: "notificationSelectorAtom",
    get: async () => {
      await new Promise((r) => setTimeout(r, 1000));
      const res = await axios.get(
        "https://practic-repo.onrender.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotificationsCount = selector({
  key: "totalNotificationsCount",
  get: ({ get }) => {
    const allNotifications = get(notificationsAtom);

    return (
      allNotifications.jobs +
      allNotifications.network +
      allNotifications.messaging +
      allNotifications.notifications
    );
  },
});
