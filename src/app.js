
const express = require('express');
const cors = require('cors');
const filmeRoutes = require('./routes/filmeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({
    sucesso: true,
    mensagem: 'UniFECAF Flix API está online.',
  });
});

app.use('/v1/controle-filmes', filmeRoutes);

app.use((_req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: 'Rota não encontrada.',
  });
});

app.use((err, _req, res, _next) => {
  console.error('[Erro não tratado]', err);
  res.status(500).json({
    sucesso: false,
    mensagem: 'Erro interno do servidor.',
  });
});

module.exports = app;
