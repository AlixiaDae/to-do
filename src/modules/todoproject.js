const TodoProject = (name,description) => {
    let project = []

    const getProjectName = () => name

    const addTodo = (newTodo) => {
        if(project.find(todo => todo.name === newTodo.name)) return
        return project.push(newTodo)
    }

    const removeTodo = (toDelete) => {
        return project = project.filter(todo => todo.name !== toDelete.name)
    }

    const getTodos = () => {
        if(project.length == 0) return console.log('There are no todos here yet.')
        return project
    }

    return {
        addTodo,
        removeTodo,
        getTodos,
        getProjectName
    }
}

export default TodoProject