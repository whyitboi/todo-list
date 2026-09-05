import { projectsArray } from "./app.js";
import { todosLoad } from "./todosLoad.js";

function createCards(parent, array, nameOfClass) {
  //create the cards loop
  array.forEach((project) => {
    let card = document.createElement("div");
    card.setAttribute("class", nameOfClass);

    let paraName = document.createElement("p");
    let paraDesc = document.createElement("p");
    paraName.textContent = project.name;
    paraDesc.textContent = project.description;
    card.append(paraName, paraDesc);
    card.addEventListener("click", () => {
      if (project.todoLists.length < 1) {
        card.textContent = `There are no ToDo lists for: ${project.name}`;
      } else todosLoad(project.todoLists);
    });

    // card.setAttribute("id", project.projectId);
    parent.appendChild(card);
  });
}

function domLoad() {
  const container = document.getElementById("content");

  const sidebar = document.createElement("div");
  const dashboard = document.createElement("div");
  const header = document.createElement("header");
  const article = document.createElement("div");
  const linkList = document.createElement("ul");

  sidebar.setAttribute("class", "sidebar");
  dashboard.setAttribute("class", "dashboard");
  header.setAttribute("class", "header");
  article.setAttribute("class", "article");

  createCards(article, projectsArray, "card");

  document.body.prepend(header);
  container.append(sidebar, dashboard, article);
}

export { domLoad };
