import { Request, Response } from "express";
import { EmpresaService } from "../services/empresa.service";


export class EmpresaController {
    static async create(req: Request, res: Response) {
        try {
            const { nome, cnpj, telefone, email } = req.body;
            console.log('aquixxccz:' ,req.body)

            const empresa = await EmpresaService.create({ nome, cnpj, telefone, email });
            return res.status(201).json(empresa);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
