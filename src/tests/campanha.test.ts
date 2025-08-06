import request from 'supertest';
import app from '../../src/index';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();
let empresaId: number;

beforeAll(async () => {
  await prisma.produtorCampanha.deleteMany();
  await prisma.tecnico.deleteMany();
  await prisma.campanha.deleteMany();
  await prisma.empresa.deleteMany();

  const empresa = await prisma.empresa.create({
    data: {
      nome: 'Empresa Teste',
      cnpj: '99999999999999',
      telefone: '11111-1111',
      email: 'empresa@teste.com'
    }
  });

  empresaId = empresa.id;
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Campanha API', () => {
  it('deve criar uma campanha', async () => {
    const response = await request(app)
      .post('/api/campanhas')
      .send({
        nome: 'Safra Teste',
        empresaId,
        dataInicio: '2025-01-01',
        dataFim: '2025-12-31'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe('Safra Teste');
  });
});
