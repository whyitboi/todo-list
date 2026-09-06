//create Todos as a class
//const todoArray = [];

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
function changePriority(todo, number) {
  if (!Number(number)) {
    alert("Enter a number: 1: High; 2: Normal; 3:Low");
  } else {
    const priority = {
      1: "high",
      2: "normal",
      3: "low",
    };
    todo.priority = priority[number];
  }
}

function editTodoDes(todo, description) {
  todo.description = description;
}

function editTodoDate(todo, date) {
  todo.dueDate = date;
}

export { Todo, editTodoDes, editTodoDate, changePriority };
