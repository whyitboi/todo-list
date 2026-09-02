import "./style.css";
import { pageLoad } from "./pageLoad.js";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

import { Todo } from "./todos.js";

const todo = new Todo(
  "Study Javascript",
  "Complete Todo List",
  "2026-09-05",
  "high",
);

console.log(todo);

//change code to follow Open-closed principle
//remove switch case

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
