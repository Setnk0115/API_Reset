import express from 'express';

import { createTask, getAllTasks, getTaskById, } from '../controllers/task.controller.js';

const route = express.Router()

route.post('/', createTask);
route.get('/', getAllTasks);
route.get('/:id', getTaskById);

export default route;