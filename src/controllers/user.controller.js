import prisma from '../prismaClient.js';

// Create User
export const createUser = async (req, res) => {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
        },
    });
    res.status(201).json(newUser);
};

// Get All Users
export const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
};

// Get User By ID
export const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
    });
    res.status(200).json(user);
}

