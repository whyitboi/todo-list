class userProjects {
  constructor(user) {
    this.userId = 1; //create dynamic userIDs
    this.user = user;
    this.userProjectsArray = [];
  }
  addProjects(...project) {
    this.userProjectsArray.push(...project);
  }
}

class Project {
  constructor(name, description) {
    this.projectId = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.todoLists = [];
  }
  addTodo(...todo) {
    this.todoLists.push(...todo);
  }
  deleteTodo(todo) {
    const index = this.todoLists.indexOf(todo);

    if (index === -1) return;

    this.todoLists.splice(index, 1);
  }
}

export { Project, userProjects };
