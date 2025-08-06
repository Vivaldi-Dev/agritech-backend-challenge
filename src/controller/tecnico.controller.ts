import { Request, Response } from "express";
import { TecnicoService } from "../services/tecnico.service";

export class TecnicoController {
    static async create(req: Request, res: Response) {
        try {
            const { nome, campanhaId } = req.body;
            
            if (!nome || !campanhaId) {
                return res.status(400).json({ 
                    error: 'Nome e ID da campanha são obrigatórios' 
                });
            }

            const tecnico = await TecnicoService.create({ nome, campanhaId });
            return res.status(201).json(tecnico);
        } catch (error: any) {
            const status = error.message.includes('não encontrado') ? 404 : 400;
            return res.status(status).json({ error: error.message });
        }
    }

    static async listarProdutores(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(400).json({ 
                error: "ID do técnico é obrigatório" 
            });
        }

        const tecnicoId = parseInt(req.params.id, 10);
        
        if (isNaN(tecnicoId) || tecnicoId <= 0) {
            return res.status(400).json({ 
                error: "ID do técnico deve ser um número válido maior que zero" 
            });
        }

        const produtores = await TecnicoService.listarProdutores(tecnicoId);
        
        return res.status(200).json({ 
            success: true,
            data: produtores,
            message: produtores.length === 0 
                ? "Nenhum produtor encontrado para este técnico" 
                : "Produtores listados com sucesso"
        });
        
    } catch (error: any) {
        console.error('Erro ao listar produtores:', error);
        
        const status = error.message.toLowerCase().includes('não encontrado') ? 404 : 400;
        return res.status(status).json({ 
            success: false,
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
}