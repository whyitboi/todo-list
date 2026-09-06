import { store, retrieve } from "./storage.js";

class userProjects {
  constructor(user) {
    this.userId = 1; //create dynamic userIDs
    this.user = user;
    this.userProjectsArray = [];
  }
}
function addProjects(userProjects, ...project) {
  userProjects.userProjectsArray.push(...project);
  //store after add
}

class Project {
  constructor(name, description) {
    this.projectId = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.todoLists = [];
  }
}

function addTodo(project, ...todo) {
  if (!project.todoLists) {
    project.todoLists = [];
  }
  project.todoLists.push(...todo);
}

function deleteTodo(project, ...todos) {
  //straightforward with filter and includes
  project.todoLists = project.todoLists.filter((todo) => {
    return !todos.includes(todo);
  });
}
function getProjectId(project) {
  return project.projectId;
}

export {
  Project,
  userProjects,
  getProjectId,
  addProjects,
  addTodo,
  deleteTodo,
};
