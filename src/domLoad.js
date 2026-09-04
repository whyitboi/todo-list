import { currentProject, projectsArray } from "./app.js";

function createCards(parent, array, nameOfClass) {
  //create the cards loop
  array.forEach((project) => {
    let card = document.createElement("div");
    card.setAttribute("class", nameOfClass);
    card.setAttribute("id", project.projectId);
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
