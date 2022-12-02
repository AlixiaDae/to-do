const nav = () => {
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')

    const header = document.createElement('h1')
    header.textContent = 'Todo or not Todo'
    navBar.appendChild(header)

    const projectsBtn = document.createElement('button')
    projectsBtn.textContent = 'Projects'
    projectsBtn.addEventListener('click', () => {

    })
    navBar.appendChild(projectsBtn)

    const projectsMenu = document.createElement('div')
    projectsMenu.classList.add('projects-menu')
    navBar.appendChild(projectsMenu)

    const createNewProject = document.createElement('button')
    createNewProject.id = 'create-new-project'
    createNewProject.textContent = '+ New Project'
    projectsMenu.appendChild(createNewProject)

    return navBar
}

export default nav