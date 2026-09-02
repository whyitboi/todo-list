//create Todos as a class
//const todoArray = [];

export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    //   this.checklist = checklist;
    //   this.notes = notes;
    this.completed = false;
  }

  //can just include the methid here, but I want to pass objects via modules

  //   markComplete() {
  //     this.completed = true;
  //   }
}
//export { Todo, todoArray };
