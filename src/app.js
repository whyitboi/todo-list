import { store, retrieve } from "./storage.js";
import { Project, addTodo, userProjects, addProjects } from "./projects.js";
import { Todo, editTodoDes } from "./todos.js";

let user = retrieve();
//switch to dynamic creation
const myProject = new Project(
  "The Odin Project",
  "This will hold all the todolist for the odin project",
);
// const myProject1 = new Project(
//   "The Second Project",
//   "This will test multiple project stuff",
// );
//switch this to dynamic creation
const todo = new Todo(
  "Study Javascript",
  "Complete Todo List",
  "2026-09-05",
  "medium",
);
// const todo2 = new Todo(
//   "Sleept",
//   "Rest is important try to get some",
//   "2026-09-15",
//   "low",
// );
// const todo1 = new Todo(
//   "Get Milk",
//   "Rememeber that bud bud asked for milk from B1",
//   "2026-09-05",
//   "high",
// );

if (!user) {
  user = new userProjects("Guest");
  addProjects(user, myProject);
  addTodo(myProject, todo);
  store(user);
  //   addTodo(myProject, todo, todo1);
  //   addTodo(myProject1, todo2, todo, todo1);
}

function addTodoToPrpject(project, ...todo) {
  addTodo(project, ...todo);
  store(user);
}
function editTodoToPrpject(todo, text) {
  editTodoDes(todo, text);
  store(user);
}

export { addTodoToPrpject, editTodoToPrpject, user, todo };
