import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
});

(global as any).prisma = prisma;