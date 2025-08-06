import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();


interface CampanhaDTO {
    nome: string;
    empresaId: number;
    dataInicio: string;
    dataFim?: string;
}

export class Campaign {
    static async create(data: CampanhaDTO) {
        const empresaExistente = await prisma.empresa.findUnique({
            where: { id: data.empresaId }
        });

        if (!empresaExistente) {
            throw new Error('Empresa não encontrada');
        }

        return prisma.campanha.create({
            data: {
                nome: data.nome,
                empresaId: data.empresaId,
                dataInicio: new Date(data.dataInicio),
                dataFim: data.dataFim ? new Date(data.dataFim) : null,
            },
        });
    }
}
