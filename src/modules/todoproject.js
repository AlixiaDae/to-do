const TodoProject = (name,description) => {
    let project = []

    const getName = () => name

    const addTodo = (newTodo) => {
        if(project.find(todo => todo.name === newTodo.name)) return
        return project.push(newTodo)
    }

    const removeTodo = (toDelete) => {
        return project = project.filter(todo => todo.name !== toDelete.name)
    }

    const getTodos = () => project

    return {
        addTodo,
        removeTodo,
        getTodos,
        getName
    }
}

export default TodoProject