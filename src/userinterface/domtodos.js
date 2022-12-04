const domTodos = () => {
    const todosContent = document.createElement('div')
    todosContent.classList.add('todos-content')
    const addTodoBtn = document.createElement('button')
    addTodoBtn.textContent = '+ New Todo'

    todosContent.appendChild(addTodoBtn)

    return todosContent
}

export default domTodos