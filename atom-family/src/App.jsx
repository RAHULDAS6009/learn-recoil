import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atom";
import { useEffect } from "react";

function App() {
  const updateTodo = useSetRecoilState(todosAtomFamily(1));
  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: "5",
        title: "rahul",
        description: "Rahul",
      });
    }, 5000);
  }, []);
  return (
    <>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={1} />
    </>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValueLoadable(todosAtomFamily(id));
  if (currentTodo.state === "loading") {
    return <div>Loading....</div>;
  } else if (currentTodo.state === "hasError") {
    return <div>Some error occured</div>;
  } else {
    return (
      <div>
        {currentTodo.contents.title}
        {currentTodo.contents.description}
      </div>
    );
  }
}

export default App;
