import { Router } from "express";
import { TecnicoController } from "../controller/tecnico.controller";

const tecnicosrouter = Router();
tecnicosrouter.post("/tecnicos", TecnicoController.create);
tecnicosrouter.get("/tecnicos/produtores/:id", TecnicoController.listarProdutores);


export default tecnicosrouter;
