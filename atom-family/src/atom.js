import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";
// import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        // await new Promise((r) => setTimeout(r, 2000));
        const res = await axios.get(
          `https://practic-repo.onrender.com/todos?id=${id}`
        );
        return res.data;
      },
  }),
});
