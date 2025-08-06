import request from 'supertest';
import app from '../../src/index';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

beforeAll(async () => {
  await cleanDatabase();
});

afterAll(async () => {
  await prisma.$disconnect();
});

async function cleanDatabase() {
  await prisma.$executeRaw`TRUNCATE TABLE "ProdutorCampanha" CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Tecnico" CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Campanha" CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Empresa" CASCADE`;
}

describe('Empresa API', () => {
  it('deve criar uma empresa com sucesso', async () => {
    const empresaData = {
      nome: 'AgroTech Ltda',
      cnpj: '12345678901234',
      telefone: '99999-9999',
      email: 'contato@agrotech.com'
    };

    const response = await request(app)
      .post('/api/empresas') 
      .send(empresaData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe(empresaData.nome);
  });

  it('não deve criar empresa com CNPJ duplicado', async () => {
    const cnpj = '12345678901234';
    
    await request(app)
      .post('/api/empresas')
      .send({
        nome: 'Primeira Empresa',
        cnpj,
        telefone: '77777-7777',
        email: 'primeira@empresa.com'
      });

    const response = await request(app)
      .post('/api/empresas')
      .send({
        nome: 'Segunda Empresa',
        cnpj,
        telefone: '88888-8888',
        email: 'segunda@empresa.com'
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});