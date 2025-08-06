import { Router } from "express";
import { ProdutorController } from "../controller/produtor.controller";

const produtoresrouter = Router();
produtoresrouter.post("/", ProdutorController.create); 
produtoresrouter.post("/atribuir", ProdutorController.atribuir); 
produtoresrouter.put("/transferir", ProdutorController.transferir); 

export default produtoresrouter;