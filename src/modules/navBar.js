import TodoProject from "./todoproject"

const nav = () => {
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')

    const createProjectBtn = document.createElement('button')
    createProjectBtn.id = 'create-project'
    createProjectBtn.textContent = 'Create Project'
    createProjectBtn.addEventListener('click', () => {
        if(projectForm.style.opacity == '0') {
            projectForm.style.opacity = '1'
        } else {
            projectForm.style.opacity = '0'
        }
    })
    navBar.appendChild(createProjectBtn)

    const projectForm = document.createElement('form')
    projectForm.classList.add('project-form')
    navBar.appendChild(projectForm)

    const projectNameWrapper = document.createElement('div')
    projectForm.appendChild(projectNameWrapper)

    const projectNameLabel = document.createElement('label')
    projectNameLabel.textContent = 'Project Name: '
    projectNameWrapper.appendChild(projectNameLabel)

    const projectName = document.createElement('input')
    projectName.placeholder = 'Your project name...'
    projectNameWrapper.appendChild(projectName)

    const projectDescriptionWrapper = document.createElement('div')
    projectForm.appendChild(projectDescriptionWrapper)

    const projectDescriptionLabel = document.createElement('label')
    projectDescriptionLabel.textContent = 'Project Description: '
    projectDescriptionWrapper.appendChild(projectDescriptionLabel)

    const projectDescription = document.createElement('input')
    projectDescription.placeholder = 'Your project description...'
    projectDescriptionWrapper.appendChild(projectDescription)

    const projectSubmitBtn = document.createElement('button')
    projectSubmitBtn.textContent = 'Create'
    projectSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const name = projectName.value
        const description = projectDescription.value
        if(!name) return
        if(!description) return
        return newProject = TodoProject(name,description)
    })
    projectForm.appendChild(projectSubmitBtn)


    return navBar
}

export default nav