// to change the completed status of the todo

import { todo } from "./todos.js";

const markComplete = (todo) => {
  todo.completed = true;
};

export { markComplete };
