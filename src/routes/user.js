import express from 'express';
import { createUser, getAllUsers, getUserById, } from '../controllers/user.controller.js';

const route = express.Router()

route.post('/', createUser);
route.get('/', getAllUsers);
route.get('/:id', getUserById);

export default route;