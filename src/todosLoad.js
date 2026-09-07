import { format } from "date-fns";
import { editTodoToProject, isCompletedTodo } from "./app.js";

function todosLoad(todoArr) {
  const article = document.querySelector(".article");
  const todoCardWrapper = document.createElement("div");

  todoArr.forEach((todo) => {
    if (!todo.completed) {
      const todoCard = document.createElement("div");
      const paraTitle = document.createElement("p");
      const paraDesc = document.createElement("p");
      const paradueDate = document.createElement("p");
      const paraPriority = document.createElement("p");
      const completedLabel = document.createElement("label");
      const markComplete = document.createElement("input");

      const editBtn = document.createElement("button");
      markComplete.type = "checkbox";
      editBtn.textContent = "Edit Todo";
      todoCard.setAttribute("class", "card");

      paraTitle.textContent = todo.title;
      paraDesc.textContent = todo.description;
      paraPriority.textContent = todo.priority;
      paradueDate.textContent = todo.dueDate;
      completedLabel.textContent = "Mark Complete";

      markComplete.addEventListener("change", () => {
        if (markComplete.checked) {
          isCompletedTodo(todo);
          alert(`${todo.title}: has been marked as Complete`);
          todosLoad(todoArr);
        }
      });

      editBtn.addEventListener("click", () => {
        todoEditLoad(todo, todoArr);
      });

      completedLabel.append(markComplete);

      todoCard.append(
        paraTitle,
        paraDesc,
        paradueDate,
        paraPriority,
        completedLabel,
        editBtn,
      );

      todoCardWrapper.append(todoCard);
    }
  });
  article.replaceChildren(todoCardWrapper);
}

function todoEditLoad(todo, todoArr) {
  const article = document.querySelector(".article");
  const dialog = document.createElement("dialog");
  const todoForm = document.createElement("form");
  const inputRowDiv = document.createElement("div");
  const buttonRow = document.createElement("div");
  const title = document.createElement("legend");
  const dateLabel = document.createElement("label");
  const descLabel = document.createElement("label");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  let dueDate = document.createElement("input");
  let desc = document.createElement("textarea");

  dateLabel.textContent = "Date";
  descLabel.textContent = "Description";

  inputRowDiv.setAttribute("class", "form-row");
  dialog.setAttribute("id", "todoDialog");

  Object.assign(buttonRow, {
    id: "button-row",
    class: "form-row",
  });
  Object.assign(dueDate, {
    type: "date",
    min: format(new Date(), "yyyy-MM-dd"),
    value: todo.dueDate,
  });

  Object.assign(cancelBtn, {
    type: "button",
    class: "submit",
    value: "cancel",
  });

  Object.assign(saveBtn, {
    type: "button",
    class: "submit",
    value: "save",
  });

  Object.assign(todoForm, {
    class: "edit-todo",
    action: "#",
    method: "dialog",
  });

  Object.assign(desc.style, {
    width: "300px",
    height: "150px",
    resize: "none",
  });

  title.textContent = todo.title;
  //dueDate.textContent = todo.dueDate;
  desc.textContent = todo.description;
  cancelBtn.textContent = "Cancel";
  saveBtn.textContent = "Save";

  inputRowDiv.append(dateLabel, dueDate, descLabel, desc);
  buttonRow.append(cancelBtn, saveBtn);
  todoForm.append(title, inputRowDiv, buttonRow);
  dialog.appendChild(todoForm);
  article.appendChild(dialog);

  dialog.showModal();

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      dialog.close(button.value);
    });
  });

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "save") {
      editTodoToProject(todo, desc.value, dueDate.value);
      todosLoad(todoArr);
    }
  });
}

export { todosLoad };
