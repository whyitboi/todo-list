//import {userProjectsFrom, userProjectsTo, todoList} from "./index.js"
export const moveTodo = (projectFrom, projectTo, todoListTitle) => {
  projectFrom.todoLists.forEach((todo) => {
    if (todo.title === todoListTitle) {
      const index = projectFrom.todoLists.findIndex((todo) => {
        return todo.title === todoListTitle;
      });
      console.log("I like to move it move it");
      console.log(index);
    } else {
      console.log("I in fact do not like to move it move it");
      return;
    }
  });
};
