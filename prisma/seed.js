

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const filmes = [
  {
    nome: 'O Poderoso Chefão',
    sinopse:
      'A saga da família Corleone e sua ascensão no mundo do crime organizado nos Estados Unidos.',
    ano: 1972,
    duracao: 175,
    genero: 'Drama',
    diretor: 'Francis Ford Coppola',
    classificacao: '16',
    posterUrl: 'https://example.com/posters/poderoso-chefao.jpg',
  },
  {
    nome: 'Matrix',
    sinopse:
      'Um hacker descobre que a realidade é uma simulação controlada por máquinas e se junta à resistência.',
    ano: 1999,
    duracao: 136,
    genero: 'Ficção Científica',
    diretor: 'Lana e Lilly Wachowski',
    classificacao: '14',
    posterUrl: 'https://example.com/posters/matrix.jpg',
  },
  {
    nome: 'Interestelar',
    sinopse:
      'Em busca de um novo lar para a humanidade, astronautas viajam por um buraco de minhoca no espaço.',
    ano: 2014,
    duracao: 169,
    genero: 'Ficção Científica',
    diretor: 'Christopher Nolan',
    classificacao: '10',
    posterUrl: 'https://example.com/posters/interestelar.jpg',
  },
  {
    nome: 'Cidade de Deus',
    sinopse:
      'Retrato da violência e da esperança nas favelas do Rio de Janeiro ao longo de duas décadas.',
    ano: 2002,
    duracao: 130,
    genero: 'Drama',
    diretor: 'Fernando Meirelles',
    classificacao: '16',
    posterUrl: 'https://example.com/posters/cidade-de-deus.jpg',
  },
  {
    nome: 'Vingadores: Ultimato',
    sinopse:
      'Os heróis restantes tentam reverter o estalo de Thanos e restaurar o universo.',
    ano: 2019,
    duracao: 181,
    genero: 'Ação',
    diretor: 'Anthony e Joe Russo',
    classificacao: '12',
    posterUrl: 'https://example.com/posters/vingadores-ultimato.jpg',
  },
];

async function main() {
  console.log('Iniciando seed do banco de dados...');

  await prisma.filme.deleteMany();
  await prisma.filme.createMany({ data: filmes });

  console.log(`Seed concluído: ${filmes.length} filmes inseridos.`);
}

main()
  .catch((error) => {
    console.error('Erro ao executar seed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
