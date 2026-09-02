const userProjects = [];

class Project {
  constructor(name, description) {
    this.projectId = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.todoLists = [];
  }
}

export { Project, userProjects };
