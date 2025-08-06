import { PrismaClient } from '../../../generated/prisma';
const prisma = new PrismaClient();

export const empresaFactory = {
  create: async (data?: {
    nome?: string;
    cnpj?: string;
    telefone?: string;
    email?: string;
  }) => {
    return prisma.empresa.create({
      data: {
        nome: data?.nome || 'Empresa Teste',
        cnpj: data?.cnpj || '12345678901234',
        telefone: data?.telefone || '11999999999',
        email: data?.email || 'contato@empresa.com',
      }
    });
  }
};