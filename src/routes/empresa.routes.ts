import { Router } from "express";
import { EmpresaController } from "../controller/empresa.controller";


const Empresasrouter = Router();
Empresasrouter.post("/empresas", EmpresaController.create);

export default Empresasrouter;
