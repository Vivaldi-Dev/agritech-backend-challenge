import { Router } from "express";
import { TecnicoController } from "../controller/tecnico.controller";

const tecnicosrouter = Router();
tecnicosrouter.post("/", TecnicoController.create); 
tecnicosrouter.get("/:id/produtores", TecnicoController.listarProdutores); 
export default tecnicosrouter;