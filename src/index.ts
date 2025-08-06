import express from 'express';
import Empresasrouter from './routes/empresa.routes';
import Campaignrouter from './routes/Campaign.routes';
import tecnicosrouter from './routes/tecnico.routes';
import produtoresrouter from './routes/produtor.routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is oky');
});

app.use('/api/empresas', Empresasrouter);
app.use('/api/campanhas', Campaignrouter);
app.use('/api/tecnicos', tecnicosrouter);
app.use('/api/produtores', produtoresrouter);

export default app;
