const db = require('./data/dbsprint.db3')

module.exports = {
    addResource,
    findResources,
    addProject,
    findProjects,
    addTask,
    findTasks
}

// adding resources
function addResource(resource) {
    return db('resources').insert(resource)
}
// retrieving a list of resources
function findResources() {
    return db('resources')
}
// adding projects
function addProject(project) {
    return db('projects').insert(project)
}
// retrieving a list of projects
function findProjects() {
    return db('projects')
}
// adding tasks
function addTask(task) {
    return db('tasks').insert(task)
}
// retreiving a list of tasks. should include the project name and description
function findTasks(project_id) {
    return db('tasks').where({ project_id: project_id})
}