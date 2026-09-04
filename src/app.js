import { store, retrieve } from "./storage.js";
import { addTodo, userProjects } from "./projects.js";
import { editTodoDes } from "./todos.js";

let user = retrieve();

if (!user) {
  user = new userProjects("Guest");
}

function addTodoToPrpject(project, ...todo) {
  addTodo(project, ...todo);
  store(user);
}
function editTodoToPrpject(todo, text) {
  editTodoDes(todo, text);
  store(user);
}

export { addTodoToPrpject, editTodoToPrpject, user };
