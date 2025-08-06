import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

interface ProdutorDTO {
    nome: string;
    localizacao: string;
}

const validateRequiredFields = (data: any, fields: string[]) => {
    const missingFields = fields.filter(field => !data[field]);
    if (missingFields.length > 0) {
        throw new Error(`Campos obrigatórios faltando: ${missingFields.join(', ')}`);
    }
};

const checkEntityExists = async (tx: any, entity: string, id: number, customMessage?: string) => {
    const record = await tx[entity].findUnique({ where: { id } });
    if (!record) throw new Error(customMessage || `${entity} não encontrado`);
    return record;
};

export class ProdutorService {
    static async create(data: ProdutorDTO) {
        validateRequiredFields(data, ['nome', 'localizacao']);
        return prisma.produtor.create({ data });
    }

    static async atribuir(produtorId: number, tecnicoId: number, campanhaId: number) {
        return prisma.$transaction(async (tx) => {
            await Promise.all([
                checkEntityExists(tx, 'produtor', produtorId),
                checkEntityExists(tx, 'tecnico', tecnicoId),
                checkEntityExists(tx, 'campanha', campanhaId)
            ]);

            const existingRelation = await tx.produtorCampanha.findFirst({
                where: { produtorId, campanhaId }
            });

            if (existingRelation) {
                throw new Error('Este produtor já está atribuído a esta campanha');
            }

            return tx.produtorCampanha.create({
                data: { produtorId, tecnicoId, campanhaId },
            });
        });
    }

    static async transferir(
        produtorId: number,
        tecnicoAntigoId: number,
        tecnicoNovoId: number,
        campanhaId: number
    ) {
        return prisma.$transaction(async (tx) => {
            await Promise.all([
                checkEntityExists(tx, 'produtor', produtorId),
                checkEntityExists(tx, 'campanha', campanhaId),
                checkEntityExists(tx, 'tecnico', tecnicoAntigoId, 'Técnico antigo não encontrado'),
                checkEntityExists(tx, 'tecnico', tecnicoNovoId, 'Técnico novo não encontrado')
            ]);

            const relacionamento = await tx.produtorCampanha.findFirst({
                where: { produtorId, tecnicoId: tecnicoAntigoId, campanhaId }
            });

            if (!relacionamento) {
                throw new Error("Relacionamento não encontrado para transferência");
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