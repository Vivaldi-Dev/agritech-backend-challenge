import express from 'express';
import { PORT } from './utils/secrets';
import Empresasrouter from './routes/empresa.routes';
import { PrismaClient } from '../generated/prisma';
import Campaignrouter from './routes/Campaign.routes';
import tecnicosrouter from './routes/tecnico.routes';
import produtoresrouter from './routes/produtor.routes';


const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Server is oky');
});

app.use('/api', Empresasrouter)
app.use('/api', Campaignrouter)
app.use('/api', tecnicosrouter)
app.use('/api', produtoresrouter)



export const primaClient = new PrismaClient({
    log: ['query']
})

app.listen(PORT, () => {
    console.log(`Server run on port:${PORT}`);
});
