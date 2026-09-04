//import "./style.css";
import { domLoad } from "./domLoad.js";
import { addTodoToPrpject, editTodoToPrpject, user, todo } from "./app.js";

// addProjects(user, myProject, myProject1);

//console.log(myProject);
console.log(user);

editTodoToPrpject(todo, "No rest for the wicked");

// console.log(myProject);
// console.log(myProject1);

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

domLoad();
