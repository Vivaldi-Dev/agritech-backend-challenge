import { Request, Response } from "express";
import { TecnicoService } from "../services/tecnico.service";


export class TecnicoController {
    static async create(req: Request, res: Response) {
        try {
            const { nome, campanhaId } = req.body;
            const tecnico = await TecnicoService.create({ nome, campanhaId });
            return res.status(201).json(tecnico);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async listarProdutores(req: Request, res: Response) {
        try {
            if (!req.params.id) {
                return res.status(400).json({ message: "ID do técnico é obrigatório" });
            }

            const tecnicoId = parseInt(req.params.id, 10);
            const produtores = await TecnicoService.listarProdutores(tecnicoId);

            return res.status(200).json(produtores);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

}
