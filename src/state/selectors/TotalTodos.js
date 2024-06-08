import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";
export const totalTodos = selector({
  key: "totalTodos", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const todos = get(todoState);

    return todos.length;
  },
});
