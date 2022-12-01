import Todo from "./modules/todo"
import TodoProject from "./modules/todoproject"

const defaultProject = TodoProject('General')

const defaultTodoToday = Todo('Default', 'Something', 'Today')
const defaultTodoToday2 = Todo('Default', 'Something', 'Today')
const defaultTodoThisWeek = Todo('This Week', 'Something', 'This week')

defaultProject.addTodo(defaultTodoToday)
defaultProject.addTodo(defaultTodoToday2)
defaultProject.setTodoPriority(defaultTodoToday)

defaultProject.addTodo(defaultTodoThisWeek)
defaultProject.setTodoPriority(defaultTodoThisWeek)

console.log(defaultProject.getTodos())

