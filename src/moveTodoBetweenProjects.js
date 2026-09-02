//import {userProjectsFrom, userProjectsTo, todoList} from "./index.js"
export const moveTodo = (projectFrom, projectTo, todoListTitle) => {
  projectFrom.todoLists.forEach((todo) => {
    if (todo.title === todoListTitle) {
      const index = projectFrom.todoLists.indexOf((todo) => {
        console.log(index);
        //return todo.title === todoListTitle
      });
      console.log("I like to move it move it");

      //getting -1 here. I am trying to retireve the index of where I find this title
      //So i can splice copy and push it to the projectTo.todoLists array
      //and pop it from the projectFrtom.todoLists array

      console.log(projectFrom.todoLists.indexOf(todoListTitle));
      //console.log(index);
      //projectFrom.todoLists.splice(todo.indexOf(todoListTitle))
    } else {
      console.log("I in fact do not like to move it move it");
      return;
    }
  });
};
