const express = require('express');

const taskController = require('../controllers/task.controller');

const router = express.Router();

router.post('/api/v1/tasks', taskController.addTask);
router.get('/api/v1/tasks', taskController.getTasks);
router.get('/api/v1/tasks/:id', taskController.getTask);
router.put('/api/v1/tasks/:id', taskController.editTask);
router.delete('/api/v1/tasks/:id', taskController.deleteTask);

module.exports = router;
