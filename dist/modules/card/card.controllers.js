"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Получить все карточки
const getAllCard = async (req, res) => {
    try {
        const cards = await prisma.card.findMany();
        res.status(200).send({
            success: true,
            result: cards,
        });
    }
    catch (e) {
        console.error(`Error in getAllCard: ${e}`);
        res.status(500).send({
            success: false,
            message: `Error in getAllCard: ${e}`,
        });
    }
};
// Создать новую карточку
const createCard = async (req, res) => {
    const { title, description, image } = req.body;
    try {
        const newCard = await prisma.card.create({
            data: {
                title,
                description,
                image,
            },
        });
        res.status(201).send(newCard);
    }
    catch (e) {
        console.error(`Error in createCard: ${e}`);
        res.status(500).send({
            success: false,
            message: `Error in createCard: ${e}`,
        });
    }
};
// Редактировать карточку
const editCard = async (req, res) => {
    const { id } = req.params;
    const { title, description, image } = req.body;
    try {
        const updatedCard = await prisma.card.update({
            where: {
                id: Number(id),
            },
            data: {
                title,
                description,
                image,
            },
        });
        res.status(200).send(updatedCard);
    }
    catch (e) {
        console.error(`Error in editCard: ${e}`);
        res.status(500).send({
            success: false,
            message: `Error in editCard: ${e}`,
        });
    }
};
// Удалить карточку
const deleteCard = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCard = await prisma.card.delete({
            where: {
                id: Number(id),
            },
        });
        res
            .status(200)
            .send({ success: true, message: "Card deleted", deletedCard });
    }
    catch (e) {
        console.error(`Error in deleteCard: ${e}`);
        res.status(500).send({
            success: false,
            message: `Error in deleteCard: ${e}`,
        });
    }
};
exports.default = {
    getAllCard,
    createCard,
    editCard,
    deleteCard,
};
