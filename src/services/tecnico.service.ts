import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

interface TecnicoDTO {
    nome: string;
    campanhaId: number;
}

export class TecnicoService {
    static async create(data: TecnicoDTO) {
        return prisma.$transaction(async (tx) => {
            if (!data.nome) {
                throw new Error('Nome do técnico é obrigatório');
            }

            const campanha = await tx.campanha.findUnique({
                where: { id: data.campanhaId }
            });

            if (!campanha) {
                throw new Error('Campanha não encontrada');
            }

            return tx.tecnico.create({ 
                data: {
                    nome: data.nome,
                    campanhaId: data.campanhaId
                }
            });
        });
    }

    static async listarProdutores(tecnicoId: number) {
        return prisma.$transaction(async (tx) => {
            const tecnico = await tx.tecnico.findUnique({
                where: { id: tecnicoId }
            });

            if (!tecnico) {
                throw new Error('Técnico não encontrado');
            }

            const produtores = await tx.produtorCampanha.findMany({
                where: { tecnicoId },
                include: { produtor: true },
            });

            return produtores.map((pc) => ({
                id: pc.produtor.id,
                nome: pc.produtor.nome,
                localizacao: pc.produtor.localizacao,
                campanhaId: pc.campanhaId
            }));
        });
    }
}