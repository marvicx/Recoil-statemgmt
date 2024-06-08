import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todos from "./components/Todos";
import { useRecoilValue } from "recoil";
import { totalTodos } from "./state/selectors/TotalTodos";

function App() {
  const totalTodosState = useRecoilValue(totalTodos);
  return (
    <>
      <Todos />
      TOTAL TODOS:{totalTodosState}
    </>
  );
}

export default App;
