
CREATE DATABASE IF NOT EXISTS unifecaf_flix
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE unifecaf_flix;


CREATE TABLE IF NOT EXISTS filmes (
  id             INT          NOT NULL AUTO_INCREMENT,
  nome           VARCHAR(200) NOT NULL,
  sinopse        TEXT         NOT NULL,
  ano            INT          NOT NULL,
  duracao        INT          NOT NULL COMMENT 'Duração em minutos',
  genero         VARCHAR(100) NOT NULL,
  diretor        VARCHAR(150) NOT NULL,
  classificacao  VARCHAR(10)  NOT NULL,
  posterUrl      VARCHAR(500) NULL,
  createdAt      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updatedAt      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



INSERT INTO filmes (nome, sinopse, ano, duracao, genero, diretor, classificacao, posterUrl) VALUES
(
  'O Poderoso Chefão',
  'A saga da família Corleone e sua ascensão no mundo do crime organizado nos Estados Unidos.',
  1972, 175, 'Drama', 'Francis Ford Coppola', '16',
  'https://example.com/posters/poderoso-chefao.jpg'
),
(
  'Matrix',
  'Um hacker descobre que a realidade é uma simulação controlada por máquinas e se junta à resistência.',
  1999, 136, 'Ficção Científica', 'Lana e Lilly Wachowski', '14',
  'https://example.com/posters/matrix.jpg'
),
(
  'Interestelar',
  'Em busca de um novo lar para a humanidade, astronautas viajam por um buraco de minhoca no espaço.',
  2014, 169, 'Ficção Científica', 'Christopher Nolan', '10',
  'https://example.com/posters/interestelar.jpg'
),
(
  'Cidade de Deus',
  'Retrato da violência e da esperança nas favelas do Rio de Janeiro ao longo de duas décadas.',
  2002, 130, 'Drama', 'Fernando Meirelles', '16',
  'https://example.com/posters/cidade-de-deus.jpg'
),
(
  'Vingadores: Ultimato',
  'Os heróis restantes tentam reverter o estalo de Thanos e restaurar o universo.',
  2019, 181, 'Ação', 'Anthony e Joe Russo', '12',
  'https://example.com/posters/vingadores-ultimato.jpg'
);
