//create Todos as a class

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    //   this.checklist = checklist;
    //   this.notes = notes;
    this.completed = false;
  }
}
export { Todo };
