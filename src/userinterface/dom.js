import Projects from '../modules/projects'
import TodoProject from '../modules/todoproject'
import '../style.css'

const dom = (() => {
    const main = document.createElement('div')
    main.classList.add('main')
    document.body.appendChild(main)

    const content = document.createElement('div')
    content.classList.add('content')

    const contentScreen = document.createElement('div')
    contentScreen.classList.add('content-screen')
    content.appendChild(contentScreen)

    const projects = Projects()

    //test projects

    const firstProject = TodoProject('Default', 'First Project to Load')
    const secondProject = TodoProject('Another', 'Another project')

    projects.addProject(firstProject)
    projects.addProject(secondProject)

    console.log(firstProject.getTodos())

    console.log(projects.getProjects().map(project => project.getName()))

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

    const createNewProjectBtn = document.createElement('button')
    createNewProjectBtn.id = 'create-new-project'
    createNewProjectBtn.textContent = '+ New Project'
    createNewProjectBtn.addEventListener('click', () => {
        if(document.querySelector('.content-screen').style.opacity == '1') return
        document.querySelector('.content-screen').style.opacity = '1'
    })

    function createProjectBtns() {
        projectsMenu.textContent = ''
        for(let i = 0; i < projects.getProjects().length; i++) {
            const projectBtn = document.createElement('button')
            const project = projects.getProject(projects.getProjects()[i].getName())
            projectBtn.id = 'project-' + i
            projectBtn.textContent = projects.getProjects()[i].getName()
            projectBtn.addEventListener('click', (e) => {
                if(project.getTodos().length == 0) {
                    
                }
            })
            projectsMenu.appendChild(projectBtn)
        }
        projectsMenu.appendChild(createNewProjectBtn)
    }

    createProjectBtns()

    const projectForm = document.createElement('form')
    projectForm.id = 'new-project-form'
    contentScreen.appendChild(projectForm)

    const projectFormHeader = document.createElement('h2')
    projectFormHeader.textContent = 'New Project'
    projectForm.appendChild(projectFormHeader)

    const projectNameWrapper = document.createElement('div')
    projectForm.appendChild(projectNameWrapper)

    const projectNameLabel = document.createElement('label')
    projectNameLabel.textContent = 'Project Name: '
    projectNameWrapper.appendChild(projectNameLabel)

    const projectName = document.createElement('input')
    projectName.placeholder = 'Your Project Name...'
    projectNameWrapper.appendChild(projectName)

    const projectDescriptionWrapper = document.createElement('div')
    projectForm.appendChild(projectDescriptionWrapper)

    const projectDescriptionLabel = document.createElement('label')
    projectDescriptionLabel.textContent = 'Project Description: '
    projectDescriptionWrapper.appendChild(projectDescriptionLabel)

    const projectDescription = document.createElement('textarea')
    projectDescription.placeholder = 'Describe your project here...'
    projectDescription.classList.add('project-description')
    projectDescriptionWrapper.appendChild(projectDescription)

    const projectFormBtn = document.createElement('button')
    projectFormBtn.textContent = 'Create Project'
    projectFormBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const name = projectName.value
        const description = projectDescription.value
        const newProject = TodoProject(name,description)
        projects.addProject(newProject)
        createProjectBtns()
        contentScreen.style.opacity = '0'
    })
    projectForm.appendChild(projectFormBtn)

    const addTodoBtn = document


    main.appendChild(sideBar)
    main.appendChild(content)

})()

export default dom