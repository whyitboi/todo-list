import { format } from "date-fns";
import { domLoad } from "./domLoad.js";
import {
  editTodoToProject,
  deleteTodoFromProject,
  isCompletedTodo,
  getTodoPriority,
} from "./app.js";

function checkCompletedTodos(todoArr) {
  if (todoArr.length > 0) {
    if (todoArr.every((todo) => todo.completed)) {
      return true;
    }
  }
}

function todosLoad(project) {
  const todoArr = project.todoLists;
  const article = document.querySelector(".article");
  const todoCardWrapper = document.createElement("div");

  if (checkCompletedTodos(todoArr)) {
    alert("All todos in this project have been completed");
    domLoad();
  } else {
    todoArr.forEach((todo) => {
      if (!todo.completed) {
        const todoCard = document.createElement("div");
        const paraTitle = document.createElement("p");
        const paraDesc = document.createElement("p");
        const paradueDate = document.createElement("p");
        const paraPriority = document.createElement("p");
        const markComplete = document.createElement("input");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");

        const titleLabel = document.createElement("label");
        const descLabel = document.createElement("label");
        const dueDateLabel = document.createElement("label");
        const priorityLabel = document.createElement("label");
        const completedLabel = document.createElement("label");

        titleLabel.textContent = "Title";
        descLabel.textContent = "Description";
        dueDateLabel.textContent = "Due date";
        priorityLabel.textContent = "Priority";
        completedLabel.textContent = "Mark Complete";
        editBtn.textContent = "Edit Todo";
        deleteBtn.textContent = "Delete Todo";

        markComplete.type = "checkbox";
        todoCard.setAttribute("class", "card");

        paraTitle.textContent = todo.title;
        paraDesc.textContent = todo.description;
        paraPriority.textContent = getTodoPriority(todo);

        //console.log(getTodoPriority(todo));

        paradueDate.textContent = todo.dueDate;

        markComplete.addEventListener("change", () => {
          if (markComplete.checked) {
            isCompletedTodo(todo);
            alert(`${todo.title}: has been marked as Complete`);
            if (checkCompletedTodos(todoArr)) {
              alert("All todos in this project have been completed");
              domLoad();
            } else {
              todosLoad(todoArr);
            }
          }
        });

        editBtn.addEventListener("click", () => {
          todoEditLoad(todo, todoArr);
        });
        deleteBtn.addEventListener("click", () => {
          deleteTodoFromProject(project, todo);
          if (todoArr.length !== -1) todosLoad(todoArr);
        });

        titleLabel.append(paraTitle);
        descLabel.append(paraDesc);
        dueDateLabel.append(paradueDate);
        priorityLabel.append(paraPriority);
        completedLabel.append(markComplete);

        todoCard.append(
          titleLabel,
          descLabel,
          dueDateLabel,
          priorityLabel,
          completedLabel,
          editBtn,
          deleteBtn,
        );

        todoCardWrapper.append(todoCard);
      }
    });
  }

  article.replaceChildren(todoCardWrapper);
}

function todoEditLoad(todo, todoArr) {
  const article = document.querySelector(".article");
  const dialog = document.createElement("dialog");
  const todoForm = document.createElement("form");
  const inputRowOneDiv = document.createElement("div");
  const inputRowTwoDiv = document.createElement("div");
  const buttonRow = document.createElement("div");
  const title = document.createElement("legend");
  const titleLabel = document.createElement("label");
  const dateLabel = document.createElement("label");
  const descLabel = document.createElement("label");
  const priorityLabel = document.createElement("label");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  let dueDate = document.createElement("input");
  let desc = document.createElement("textarea");
  let priority = document.createElement("input");

  titleLabel.textContent = "Title";
  dateLabel.textContent = "Due Date";
  descLabel.textContent = "Description";
  priorityLabel.textContent = "Priority";

  inputRowOneDiv.setAttribute("class", "form-row");
  inputRowTwoDiv.setAttribute("class", "form-row");
  dialog.setAttribute("id", "todoDialog");

  Object.assign(buttonRow, {
    id: "button-row",
    class: "form-row",
  });
  Object.assign(priority, {
    type: "number",
    min: 1,
    max: 3,
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
  priority.value = todo.priority;

  desc.textContent = todo.description;
  cancelBtn.textContent = "Cancel";
  saveBtn.textContent = "Save";

  inputRowOneDiv.append(titleLabel, title, dateLabel, dueDate);
  inputRowTwoDiv.append(priorityLabel, priority, descLabel, desc);

  buttonRow.append(cancelBtn, saveBtn);
  todoForm.append(inputRowOneDiv, inputRowTwoDiv, buttonRow);
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
      editTodoToProject(todo, desc.value, dueDate.value, priority.value);
      todosLoad(todoArr);
    }
  });
}

export { todosLoad };
