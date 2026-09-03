import "./style.css";
import { pageLoad } from "./pageLoad.js";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

import { Todo } from "./todos.js";
import { markComplete } from "./markComplete.js";
import { Project, userProjects } from "./projects.js";
import { moveTodo } from "./moveTodo.js";

//switch this to dynamic creation
const todo = new Todo(
  "Study Javascript",
  "Complete Todo List",
  "2026-09-05",
  "medium",
);
const todo2 = new Todo(
  "Sleept",
  "Rest is important try to get some",
  "2026-09-15",
  "low",
);
const todo1 = new Todo(
  "Get Milk",
  "Rememeber that bud bud asked for milk from B1",
  "2026-09-05",
  "high",
);

//switch to dynamic creation
const myProject = new Project(
  "The Odin Project",
  "This will hold all the todolist for the odin project",
);
const myProject1 = new Project(
  "The Second Project",
  "This will test multiple project stuff",
);

//made userProjects Basically a user
const admin = new userProjects("admin");
admin.addProjects(myProject, myProject1);

//console.log(myProject);
console.log(admin);

//console.log(todo);
myProject.addTodo(todo, todo1);
myProject1.addTodo(todo, todo1, todo2);

console.log(myProject);
console.log(myProject1);

moveTodo(myProject1, myProject, todo2);

//myProject.deleteTodo(todo);

//pages holds key and value. Value is function name but not called until clicked.
//see event listener
const pages = {
  home: displayHome,
  about: displayAbout,
  menu: displayMenu,
};

//get all the buttons in the nav alone
const buttons = document.querySelectorAll("nav button");

//check them against the Object pages and then call the related function
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    pages[button.id]();
  });
});

pageLoad();
