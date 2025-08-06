import { Router } from "express";
import { EmpresaController } from "../controller/empresa.controller";

const Empresasrouter = Router();
Empresasrouter.post("/", EmpresaController.create); 

export default Empresasrouter;