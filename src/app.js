import { store, retrieve } from "./storage.js";
import {
  Project,
  addTodo,
  userProjects,
  addProjects,
  getProjectId,
} from "./projects.js";
import { Todo, editTodoDes, editTodoDate } from "./todos.js";
import { domLoad } from "./domLoad.js";
import { todosLoad } from "./todosLoad.js";
let user = retrieve();

//switch to dynamic creation
const myProject = new Project(
  "The Odin Project",
  "This will hold all the todolist for the odin project",
);
const myProject1 = new Project("Second", "Test 2nd project");

//switch this to dynamic creation
const todo = new Todo(
  "Study Javascript",
  "Complete Todo List",
  "2026-09-05",
  "medium",
);
const todo1 = new Todo(
  "Build Todo App",
  "Going smoothly",
  "2026-12-05",
  "medium",
);

if (!user) {
  user = new userProjects("Guest");
  addProjects(user, myProject, myProject1);
  addTodo(myProject1, todo, todo1);
  store(user);
}
const currentProject = user.userProjectsArray[0];
const projectsArray = user.userProjectsArray;

function addTodoToProject(project, ...todo) {
  addTodo(project, ...todo);
  store(user);
}
function editTodoToProject(todo, desc, date) {
  editTodoDes(todo, desc);
  editTodoDate(todo, date);
  store(user);
}

export {
  addTodoToProject,
  editTodoToProject,
  user,
  todo,
  todo1,
  currentProject,
  projectsArray,
};
