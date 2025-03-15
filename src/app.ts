import { config } from "dotenv";
config();
import express from "express";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { readFileSync } from "fs";
import cors from "cors";

const swaggerPath = path.join(process.cwd(), "src", "swagger.json");
const swaggerDocumentation = JSON.parse(readFileSync(swaggerPath, "utf-8"));

export const buildServer = () => {
  const server = express();
  server.use(
    cors({
      origin: "*",
    })
  );

  server.use(express.json());

  server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocumentation)
  );

  server.get("/swagger.json", (req, res) => {
    res.status(200).json(swaggerDocumentation);
  });

  server.use("/api/v1", routes);

  return server;
};
