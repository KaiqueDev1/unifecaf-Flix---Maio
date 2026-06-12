
const prisma = require('../config/database');

const filmeModel = {
  /**
   * Retorna todos os filmes cadastrados, ordenados por nome.
   * @returns {Promise<Array>}
   */
  async findAll() {
    return prisma.filme.findMany({
      orderBy: { nome: 'asc' },
    });
  },

  /**
   * Busca um filme pelo ID.
   * @param {number} id
   * @returns {Promise<object|null>}
   */
  async findById(id) {
    return prisma.filme.findUnique({
      where: { id },
    });
  },

  /**
   * Filtra filmes por correspondência parcial no nome ou sinopse.
   * @param {string} termo - Termo de busca
   * @returns {Promise<Array>}
   */
  async findByNomeOuSinopse(termo) {
    return prisma.filme.findMany({
      where: {
        OR: [
          { nome: { contains: termo } },
          { sinopse: { contains: termo } },
        ],
      },
      orderBy: { nome: 'asc' },
    });
  },

  /**
   * Cadastra um novo filme.
   * @param {object} dados
   * @returns {Promise<object>}
   */
  async create(dados) {
    return prisma.filme.create({ data: dados });
  },
};

module.exports = filmeModel;
