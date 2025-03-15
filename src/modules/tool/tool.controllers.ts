import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllTool = async (req: Request, res: Response) => {
  try {
    const tools = await prisma.tool.findMany();
    res.status(200).send({
      success: true,
      result: tools,
    });
  } catch (e) {
    console.error(`Error in getAllTool: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in getAllTool: ${e}`,
    });
  }
};

const createTool = async (req: Request, res: Response) => {
  const { photo } = req.body;
  try {
    const newTool = await prisma.tool.create({
      data: {
        photo,
      },
    });
    res.status(201).send(newTool);
  } catch (e) {
    console.error(`Error in createTool: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in createTool: ${e}`,
    });
  }
};

const editTool = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { photo } = req.body;

  try {
    const updatedTool = await prisma.tool.update({
      where: {
        id: Number(id),
      },
      data: {
        photo,
      },
    });
    res.status(200).send(updatedTool);
  } catch (e) {
    console.error(`Error in editTool: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in editTool: ${e}`,
    });
  }
};

const deleteTool = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTool = await prisma.tool.delete({
      where: {
        id: Number(id),
      },
    });
    res
      .status(200)
      .send({ success: true, message: "Tool deleted", deletedTool });
  } catch (e) {
    console.error(`Error in deleteTool: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in deleteTool: ${e}`,
    });
  }
};

export default {
  getAllTool,
  createTool,
  editTool,
  deleteTool,
};
