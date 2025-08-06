import { Router } from "express";
import { ProdutorController } from "../controller/produtor.controller";


const produtoresrouter = Router();
produtoresrouter.post("/produtores", ProdutorController.create);
produtoresrouter.post("/produtores/atribuir", ProdutorController.atribuir);
produtoresrouter.put("/produtores/transferir", ProdutorController.transferir);



export default produtoresrouter;
