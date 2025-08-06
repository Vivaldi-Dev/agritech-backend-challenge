
import { PrismaClient } from '../../generated/prisma';


const prisma = new PrismaClient();

interface EmpresaDTO {
  nome: string;
  cnpj: string;
  telefone?: string;
  email: string;
}

export class EmpresaService {
  static async create(data: EmpresaDTO) {
    return prisma.empresa.create({ data });
  }
}
