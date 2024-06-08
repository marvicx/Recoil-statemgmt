import React from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
const dvstyle = {
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid black",
};
const Todo = ({ id, text }) => {
  const [todos, setTodos] = useRecoilState(todoState);
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };
  return (
    <>
      <div style={dvstyle}>
        <span style={{ margin: "auto" }}>{text}</span>
        <button onClick={handleDelete}>x</button>
      </div>
    </>
  );
};

export default Todo;
