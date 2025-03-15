import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllGallery = async (req: Request, res: Response) => {
  try {
    const gallerys = await prisma.gallery.findMany();
    res.status(200).send({
      success: true,
      result: gallerys,
    });
  } catch (e) {
    console.error(`Error in getAllGallery: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in getAllGallery: ${e}`,
    });
  }
};

const createGallery = async (req: Request, res: Response) => {
  const { photo } = req.body;
  try {
    const newGallery = await prisma.gallery.create({
      data: {
        photo,
      },
    });
    res.status(201).send(newGallery);
  } catch (e) {
    console.error(`Error in createGallery: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in createGallery: ${e}`,
    });
  }
};

const editGallery = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { photo } = req.body;

  try {
    const updatedGallery = await prisma.gallery.update({
      where: {
        id: Number(id),
      },
      data: {
        photo,
      },
    });
    res.status(200).send(updatedGallery);
  } catch (e) {
    console.error(`Error in editGallery: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in editGallery: ${e}`,
    });
  }
};

const deleteGallery = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedGallery = await prisma.gallery.delete({
      where: {
        id: Number(id),
      },
    });
    res
      .status(200)
      .send({ success: true, message: "Gallery deleted", deletedGallery });
  } catch (e) {
    console.error(`Error in deleteGallery: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in deleteGallery: ${e}`,
    });
  }
};

export default {
  getAllGallery,
  createGallery,
  editGallery,
  deleteGallery,
};
