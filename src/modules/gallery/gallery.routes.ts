import { Router } from "express";
import galleryControllers from "./gallery.controllers";

const router = Router();

router.get("/get-all", galleryControllers.getAllGallery);
router.post("/create", galleryControllers.createGallery);
router.delete("/delete/:id", galleryControllers.deleteGallery);
router.put("/edit/:id", galleryControllers.editGallery);

export default router;
