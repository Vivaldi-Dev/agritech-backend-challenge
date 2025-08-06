import { Request, Response } from "express";
import { Campaign } from "../services/Campaign.service";


export class CampaignController {
    static async create(req: Request, res: Response) {
        try {
            const { nome, empresaId, dataInicio, dataFim } = req.body;
            
            if (!nome || !empresaId || !dataInicio) {
                return res.status(400).json({ error: 'Nome, empresaId e dataInicio são obrigatórios' });
            }

            const campanha = await Campaign.create({ nome, empresaId, dataInicio, dataFim });
            return res.status(201).json(campanha);
            
        } catch (error: any) {
            if (error.message === 'Empresa não encontrada') {
                return res.status(404).json({ error: error.message });
            }
            return res.status(400).json({ error: error.message });
        }
    }
}
