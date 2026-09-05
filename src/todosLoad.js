import { editTodoToPrpject } from "./app.js";

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
      todoEditLoad(todo);
    });

    todoCard.append(paraTitle, paraDesc, paradueDate, editBtn);

    todoCardWrapper.append(todoCard);
  });
  article.replaceChildren(todoCardWrapper);
}

function todoEditLoad(todo) {
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
  dueDate.textContent = todo.dueDate;
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

  desc.addEventListener("input", () => {
    desc.textContent = desc.value;
  });

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "save") {
      editTodoToPrpject(todo, desc.textContent);
    }
  });
}

export { todosLoad };
