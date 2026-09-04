import { editTodoDes } from "./todos.js";

function todosLoad(todoArr) {
  const article = document.querySelector(".article");
  const todoCardWrapper = document.createElement("div");

  todoArr.forEach((todo) => {
    let todoCard = document.createElement("div");
    let paraTitle = document.createElement("p");
    let paraDesc = document.createElement("p");
    let paradueDate = document.createElement("p");
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit Todo";
    todoCard.setAttribute("class", "card");

    paraTitle.textContent = todo.title;
    paraDesc.textContent = todo.description;
    paradueDate.textContent = todo.dueDate;
    editBtn.addEventListener("click", () => {
      console.log("edit todo function here. Open as form"); //ediTodoDesc(todo, "text from user");
    });

    todoCard.append(paraTitle, paraDesc, paradueDate, editBtn);

    todoCardWrapper.append(todoCard);
  });
  article.replaceChildren(todoCardWrapper);
}
export { todosLoad };
