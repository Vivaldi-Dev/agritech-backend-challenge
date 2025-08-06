import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

interface TecnicoDTO {
    nome: string;
    campanhaId: number;
}

export class TecnicoService {
    static async create(data: TecnicoDTO) {
        return prisma.tecnico.create({ data });
    }

    static async listarProdutores(tecnicoId: number) {
        const produtores = await prisma.produtorCampanha.findMany({
            where: { tecnicoId },
            include: {
                produtor: true,
            },
        });

        return produtores.map((pc) => ({
            id: pc.produtor.id,
            nome: pc.produtor.nome,
            localizacao: pc.produtor.localizacao,
        }));
    }

    
}
