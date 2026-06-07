
const filmeModel = require('../models/filmeModel');

const filmeController = {
  async listarTodos(req, res) {
    try {
      const filmes = await filmeModel.findAll();

      return res.status(200).json({
        sucesso: true,
        total: filmes.length,
        dados: filmes,
      });
    } catch (error) {
      console.error('[filmeController.listarTodos]', error);
      return res.status(500).json({
        sucesso: false,
        mensagem: 'Erro interno ao listar os filmes.',
      });
    }
  },
  async buscarPorId(req, res) {
    try {
      const id = Number.parseInt(req.params.id, 10);

      if (Number.isNaN(id) || id <= 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: 'O parâmetro "id" deve ser um número inteiro positivo.',
        });
      }

      const filme = await filmeModel.findById(id);

      if (!filme) {
        return res.status(404).json({
          sucesso: false,
          mensagem: `Filme com id ${id} não encontrado.`,
        });
      }

      return res.status(200).json({
        sucesso: true,
        dados: filme,
      });
    } catch (error) {
      console.error('[filmeController.buscarPorId]', error);
      return res.status(500).json({
        sucesso: false,
        mensagem: 'Erro interno ao buscar o filme.',
      });
    }
  },
  async filtrarPorNome(req, res) {
    try {
      const { nome } = req.query;

      if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        return res.status(400).json({
          sucesso: false,
          mensagem: 'O parâmetro de query "nome" é obrigatório e não pode ser vazio.',
        });
      }

      const termo = nome.trim();
      const filmes = await filmeModel.findByNomeOuSinopse(termo);

      return res.status(200).json({
        sucesso: true,
        termo,
        total: filmes.length,
        dados: filmes,
      });
    } catch (error) {
      console.error('[filmeController.filtrarPorNome]', error);
      return res.status(500).json({
        sucesso: false,
        mensagem: 'Erro interno ao filtrar os filmes.',
      });
    }
  },
};

module.exports = filmeController;
