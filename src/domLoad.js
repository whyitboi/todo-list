function domLoad() {
  const content = document.getElementById("content");
  const con = document.querySelector(".con");
  //con.setAttribute("class", "con");
  //con.appendChild(sidebar);

  const sidebar = document.createElement("div");
  const dashboard = document.createElement("div");
  const header = document.createElement("div");
  const article = document.createElement("div");
  const linkList = document.createElement("ul");

  content.textContent = "some stuff";
  con.textContent = "Yo";

  sidebar.setAttribute("class", "sidebar");
  dashboard.setAttribute("class", "dashboard");
  header.setAttribute("class", "header");
  article.setAttribute("class", "article");

  for (let i = 0; i < 6; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "todo-cards");
    card.setAttribute("id", `card${i}`);
  }

  const cards = document.querySelectorAll(".todo-cards");

  //   article.appendChild(cards);
  //   dashboard.appendChild(header);
  //   sidebar.append(dashboard, article);
  //   container.appendChild(sidebar);
}

export { domLoad };
