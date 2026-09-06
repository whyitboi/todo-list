import { format } from "date-fns";
import { Todo } from "./todos.js";
import { addTodoToProject } from "./app.js";
import { domLoad } from "./domLoad.js";

export function createNewTodoLoad(projectsArray) {
  const article = document.querySelector(".article");
  const dialog = document.createElement("dialog");
  const todoForm = document.createElement("form");
  const inputRowOneDiv = document.createElement("div");
  const inputRowTwoDiv = document.createElement("div");
  const buttonRow = document.createElement("div");
  const titleLabel = document.createElement("label");
  const projectLabel = document.createElement("label");
  const dateLabel = document.createElement("label");
  const descLabel = document.createElement("label");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  let dueDate = document.createElement("input");
  let desc = document.createElement("textarea");
  let title = document.createElement("input");
  let projectSelect = document.createElement("select");

  projectsArray.forEach((project) => {
    const option = document.createElement("option");

    option.textContent = project.name;
    option.value = project.projectId;

    projectSelect.appendChild(option);
  });

  titleLabel.textContent = "Title";
  projectLabel.textContent = "Project";
  dateLabel.textContent = "Due Date";
  descLabel.textContent = "Description";

  inputRowOneDiv.setAttribute("class", "form-row");
  inputRowTwoDiv.setAttribute("class", "form-row");
  dialog.setAttribute("id", "todoDialog");

  Object.assign(buttonRow, {
    id: "button-row",
    class: "form-row",
  });
  Object.assign(dueDate, {
    type: "date",
    min: format(new Date(), "yyyy-MM-dd"),
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
    class: "new-todo",
    action: "#",
    method: "dialog",
  });

  Object.assign(desc.style, {
    width: "300px",
    height: "150px",
    resize: "none",
  });

  cancelBtn.textContent = "Cancel";
  saveBtn.textContent = "Save";

  inputRowOneDiv.append(titleLabel, title, projectLabel, projectSelect);
  inputRowTwoDiv.append(dateLabel, dueDate, descLabel, desc);
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
      const selectedProject = projectsArray.find((project) => {
        project.projectId === projectSelect.selectedOptions;
      });

      const todo = new Todo(title.value, desc.value, dueDate.value, "medium");
      console.log(projectSelect.selectedOptions);
      console.log(selectedProject);
      addTodoToProject(selectedProject, todo);
      domLoad();
    }
  });
}
