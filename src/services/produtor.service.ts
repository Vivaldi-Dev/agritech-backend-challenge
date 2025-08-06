import { PrismaClient } from '../../generated/prisma';


const prisma = new PrismaClient();

interface ProdutorDTO {
    nome: string;
    localizacao: string;
}

export class ProdutorService {
    static async create(data: ProdutorDTO) {
        return prisma.produtor.create({ data });
    }

    static async atribuir(produtorId: number, tecnicoId: number, campanhaId: number) {
        return prisma.produtorCampanha.create({
            data: { produtorId, tecnicoId, campanhaId },
        });
    }

    static async transferir(
        produtorId: number,
        tecnicoAntigoId: number,
        tecnicoNovoId: number,
        campanhaId: number
    ) {
        return prisma.$transaction(async (tx) => {
            
            const tecnicoNovo = await tx.tecnico.findUnique({ where: { id: tecnicoNovoId } });
            if (!tecnicoNovo) {
                throw new Error("O novo técnico informado não existe.");
            }

            
            const relacionamento = await tx.produtorCampanha.findFirst({
                where: { produtorId, tecnicoId: tecnicoAntigoId, campanhaId },
            });

            if (!relacionamento) {
                throw new Error("Relacionamento não encontrado para transferência.");
            }

            return tx.produtorCampanha.update({
                where: { id: relacionamento.id },
                data: {
                    tecnicoId: tecnicoNovoId,
                    dataTransferencia: new Date(),
                },
            });
        });
    }
}



