export const addTodo = (project, ...todo) => {
  project.todoLists.push(...todo);
};
