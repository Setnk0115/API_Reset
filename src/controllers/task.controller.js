import prisma from '../prismaClient.js';

//create Task
export const createTask = async (req, res) => {
    const { title, userID } = req.body;
    const newTask = await prisma.tasks.create({
        data: {
            title,
            userID,
        },
    });
    res.status(201).json(newTask);
}

//get All Tasks
export const getAllTasks = async (req, res) => {
    const tasks = await prisma.tasks.findMany();
    res.status(200).json(tasks);
}

//get Task By ID    
export const getTaskById = async (req, res) => {
    const { id } = req.params;
    const task = await prisma.tasks.findUnique({
        where: { id: parseInt(id) },
    });
    //Si el product no se encuentra va a devolver el error 404
    if (!task) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(task);
}