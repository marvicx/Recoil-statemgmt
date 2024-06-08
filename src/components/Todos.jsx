import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import Todo from "./Todo";

const Todos = () => {
  const [Todos, setTodos] = useRecoilState(todoState);
  const [inputText, setTnputText] = useState("");
  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);
    setTnputText("");
  };
  const clearTodos = () => {
    setTodos([]);
  };
  return (
    <>
      <main>
        <input
          type="text"
          id="todoInput"
          value={inputText}
          onChange={(e) => setTnputText(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={clearTodos}>Clear Todos</button>
        <ul>
          {Todos.map((e) => (
            <Todo id={e.id} text={e.text} key={e.id} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Todos;
