const Projects = () => {
    let projects = []

    const getProjects = () => projects

    const getProject = (projectName) => {
       return projects.find(project => project.getProjectName() == projectName.getProjectName()).getProjectName()
    }

    const addProject = (newProject) => {
        if(projects.find(project => project.getProjectName() === newProject.name)) return
        projects.push(newProject)
    }

    const removeProject = (projectName) => {
        const projectToDelete = projects.find(project => project.getProjectName() === projectName.getProjectName())
        projects.splice(projects.indexOf(projectToDelete),1)
    }

    return {
        getProjects,
        getProject,
        addProject,
        removeProject
    }
}

export default Projects