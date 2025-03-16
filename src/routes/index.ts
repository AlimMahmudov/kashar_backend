// import { Router } from "express";
// import cors from "cors";
// import cardRoutes from "../modules/card/card.routes";
// import galleryRoutes from "../modules/gallery/gallery.routes";
// import toolRoutes from "../modules/tool/tool.routes";

// const corsConfig = {
//   origin: [
//     "http://localhost:5000",
//     "http://localhost:3000",
//     "https://alimmah.dev/",
//   ],
// };

// const router = Router();

// router.use("/card", cors(corsConfig), cardRoutes);
// router.use("/gallery", cors(corsConfig), galleryRoutes);
// router.use("/tool", cors(corsConfig), toolRoutes);

// export default router;

import { Router } from "express";
import cardRoutes from "../modules/card/card.routes";
import galleryRoutes from "../modules/gallery/gallery.routes";
import toolRoutes from "../modules/tool/tool.routes";
const router = Router();
router.get("/", (req, res) => {
  res.status(200).send({
    status: true,
  });
});
router.use("/auth", cardRoutes);
router.use("/post", galleryRoutes);
router.use("/upload", toolRoutes);

export default router;
