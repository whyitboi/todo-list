import { store, retrieve } from "./storage.js";
import { Project, addTodo, getProjectId } from "./projects.js";
import { User, addProjects } from "./users.js";
import { Todo, editTodoDes, editTodoDate, isCompleted } from "./todos.js";

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
  user = new User("Guest");
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
  //implement priority here
  editTodoDes(todo, desc);
  editTodoDate(todo, date);
  store(user);
}
function isCompletedTodo(todo) {
  isCompleted(todo);
  store(user);
}

function addNewUserProject(project) {
  addProjects(user, project);
  store(user);
}

export {
  addTodoToProject,
  editTodoToProject,
  addNewUserProject,
  isCompletedTodo,
  user,
  todo,
  todo1,
  currentProject,
  projectsArray,
};
