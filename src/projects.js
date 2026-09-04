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
  project.todoLists.push(...todo);
  //store after add
}

function deleteTodo(project, ...todos) {
  //straightforward with filter and includes
  project.todoLists.filter = project.todoLists.filter((todo) => {
    return !todos.includes(todo);
  });
  //store after del

  // todo.forEach((todo) => {
  //   const index = project.todoLists.indexOf(todo);
  //   if (index !== -1) {
  //     project.todoLists.splice(index, 1);
  //   }
  // });
}

export { Project, userProjects, addProjects, addTodo, deleteTodo };
