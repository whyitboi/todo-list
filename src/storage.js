function store(userProjects) {
  //first read the Projects array into a variable
  localStorage.setItem("Projects", JSON.stringify(userProjects));
}

function retrieve() {
  const userProjects = JSON.parse(localStorage.getItem("Projects"));
  return userProjects;
}

export { store, retrieve };
