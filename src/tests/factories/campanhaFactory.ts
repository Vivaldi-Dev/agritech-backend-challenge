import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();


export const campanhaFactory = {
    create: async (empresaId: number, data?: Partial<Parameters<typeof prisma.campanha.create>[0]['data']>) => {
        return prisma.campanha.create({
            data: {
                nome: 'Campanha Teste',
                empresaId,
                dataInicio: new Date('2023-01-01'),
                dataFim: new Date('2023-12-31'),
                ...data
            }
        });
    }
};


