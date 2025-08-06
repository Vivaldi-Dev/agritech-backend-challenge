import app from './index';
import { PORT } from './utils/secrets';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient({ log: ['query'] });

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
