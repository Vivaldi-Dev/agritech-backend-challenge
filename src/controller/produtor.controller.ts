import { Request, Response } from "express";
import { ProdutorService } from "../services/produtor.service";

export class ProdutorController {
    static async create(req: Request, res: Response) {
        try {
            const { nome, localizacao } = req.body;
            
            if (!nome || !localizacao) {
                return res.status(400).json({ error: 'Nome e localização são obrigatórios' });
            }
            
            const produtor = await ProdutorService.create({ nome, localizacao });
            return res.status(201).json(produtor);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async atribuir(req: Request, res: Response) {
        try {
            const { produtorId, tecnicoId, campanhaId } = req.body;
            
            if (!produtorId || !tecnicoId || !campanhaId) {
                return res.status(400).json({ error: 'Todos os IDs são obrigatórios' });
            }
            
            const relacionamento = await ProdutorService.atribuir(produtorId, tecnicoId, campanhaId);
            return res.status(201).json({ 
                message: "Produtor atribuído com sucesso", 
                data: relacionamento 
            });
        } catch (error: any) {
            const status = error.message.includes('não encontrado') ? 404 : 400;
            return res.status(status).json({ error: error.message });
        }
    }

    static async transferir(req: Request, res: Response) {
        try {
            const { produtorId, tecnicoAntigoId, tecnicoNovoId, campanhaId } = req.body;
            
            if (!produtorId || !tecnicoAntigoId || !tecnicoNovoId || !campanhaId) {
                return res.status(400).json({ error: 'Todos os IDs são obrigatórios' });
            }
            
            const atualizacao = await ProdutorService.transferir(
                produtorId, 
                tecnicoAntigoId, 
                tecnicoNovoId, 
                campanhaId
            );
            
            return res.status(200).json({ 
                message: "Produtor transferido com sucesso", 
                data: atualizacao 
            });
        } catch (error: any) {
            const status = error.message.includes('não encontrado') ? 404 : 400;
            return res.status(status).json({ error: error.message });
        }
    }
}