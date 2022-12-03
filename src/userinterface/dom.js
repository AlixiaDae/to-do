import Projects from '../modules/projects'
import TodoProject from '../modules/todoproject'
import '../style.css'

const dom = (() => {
    const main = document.createElement('div')
    main.classList.add('main')
    document.body.appendChild(main)

    const projects = Projects()

    //test projects

    const firstProject = TodoProject('Default', 'First Project to Load')
    const secondProject = TodoProject('Another', 'Another project')

    projects.addProject(firstProject)
    projects.addProject(secondProject)

    //sidebar

    const sideBar = document.createElement('div')
    sideBar.classList.add('side-bar')

    const header = document.createElement('h1')
    header.textContent = 'Todo or not Todo'
    sideBar.appendChild(header)

    const projectsBtn = document.createElement('button')
    projectsBtn.textContent = 'Projects'
    projectsBtn.addEventListener('click', () => {
        document.querySelector('.projects-menu').classList.toggle('active')
    })
    sideBar.appendChild(projectsBtn)

    const projectsMenu = document.createElement('div')
    projectsMenu.classList.add('projects-menu')
    sideBar.appendChild(projectsMenu)

    for(let i = 0; i < projects.getProjects().length; i++) {
        const projectBtn = document.createElement('button')
        projectBtn.id = 'project-' + i
        projectBtn.textContent = projects.getProjects()[i].getProjectName()
        projectsMenu.appendChild(projectBtn)
    }

    const createNewProjectBtn = document.createElement('button')
    createNewProjectBtn.id = 'create-new-project'
    createNewProjectBtn.textContent = '+ New Project'
    projectsMenu.appendChild(createNewProjectBtn)

    main.appendChild(sideBar)

})()

export default dom