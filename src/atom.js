import { atom, selector } from "recoil";

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 105,
});

export const networkAtom = atom({
  key: "networkAtom",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 95,
});

export const totalCount = selector({
  key: "totalCount",
  get: ({ get }) => {
    const jobsCount = get(jobsAtom);
    const networkCount = get(networkAtom);
    const messagingCount = get(messagingAtom);

    return jobsCount + networkCount + messagingCount;
  },
});
