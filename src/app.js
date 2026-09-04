import { store, retrieve } from "./storage.js";
import {
  Project,
  addTodo,
  userProjects,
  addProjects,
  getProjectId,
} from "./projects.js";
import { Todo, editTodoDes } from "./todos.js";
import { domLoad, max } from "./domLoad.js";
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
  "Study Javascript",
  "Complete Todo List",
  "2026-09-05",
  "medium",
);
//console.log(user.userProjectsArray.length);

if (!user) {
  user = new userProjects("Guest");
  addProjects(user, myProject, myProject1);
  addTodo(myProject1, todo, todo1);
  store(user);
}
const currentProject = user.userProjectsArray[0];
const projectsArray = user.userProjectsArray;
//console.log(projectsArray.todoLists);

//get the projectId. This will be for the event listener
// const currentProject = user.userProjectsArray.find((project)=>{
//     return project.projectId === someProjectId
// })

function addTodoToPrpject(project, ...todo) {
  addTodo(project, ...todo);
  store(user);
}
function editTodoToPrpject(todo, text) {
  editTodoDes(todo, text);
  store(user);
}

export {
  addTodoToPrpject,
  editTodoToPrpject,
  user,
  todo,
  todo1,
  currentProject,
  projectsArray,
};
