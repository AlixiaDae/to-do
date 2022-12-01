const TodoProject = (name,description) => {
    let project = []
    let todosToday = []
    let todosThisWeek = []

    const getProjectName = () => name

    const addTodo = (newTodo) => {
        if(project.find(todo => todo.name === newTodo.name)) return
        project.push(newTodo)
    }

    const removeTodo = (toDelete) => {
        project = project.filter(todo => todo.name !== toDelete.name)
        if(todosToday.includes(toDelete)) {
            todosToday = todosToday.filter(todo => todo.name !== toDelete.name)
        } else if(todosThisWeek.includes(toDelete)) {
            todosThisWeek = todosThisWeek.filter(todo => todo.name !== toDelete.name)
        }
    }

    const setTodoPriority = (todo) => {
        if(todo.priority.toLowerCase() == 'today') {
            todosToday.push(todo)
        } else if(todo.priority.toLowerCase() == 'this week') {
            todosThisWeek.push(todo)
        }
    }

    const getTodos = () => project
    const getTodosToday = () => todosToday
    const getTodosThisWeek = () => todosThisWeek

    return {
        addTodo,
        removeTodo,
        getTodos,
        getProjectName,
        setTodoPriority,
        getTodosToday,
        getTodosThisWeek
    }
}

export default TodoProject