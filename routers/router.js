const express = require('express')
const projects = require('../models/projectsModel')
const router = express.Router();

// adding resources.
router.post('/resources', (req, res) => {
    projects.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add resource' });
        });
})
// retrieving a list of resources.
router.get('/resources', (req, res) => {
    projects.findResources()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
})
// adding projects.
router.post('/projects', (req, res) => {
    projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add project' });
        });
})
// retrieving a list of projects.
router.get('/projects', (req, res) => {
    projects.findProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
})
// adding tasks.
router.post('/tasks', (req, res) => {
    projects.addTask(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add task' });
        });
})
// retrieving a list of tasks. The list of tasks should include the project name and project description.
router.get('/:pid/tasks', (req, res) => {
    const pid = req.params.pid
    projects.findTasks(pid)
        .then(tasks => {
            res.status(201).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
})