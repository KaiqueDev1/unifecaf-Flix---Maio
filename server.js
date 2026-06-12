
require('dotenv').config();

const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`UniFECAF Flix API rodando em http://localhost:${PORT}`);
  console.log('Endpoints disponíveis:');
  console.log('  GET  /v1/controle-filmes/filme');
  console.log('  POST /v1/controle-filmes/filme');
  console.log('  GET  /v1/controle-filmes/filme/:id');
  console.log('  GET /v1/controle-filmes/filtro/filme?nome=xxx');
});
