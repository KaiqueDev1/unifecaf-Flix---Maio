
const express = require('express');
const filmeController = require('../controllers/filmeController');

const router = express.Router();

router.get('/filtro/filme', filmeController.filtrarPorNome);

router.get('/filme', filmeController.listarTodos);
router.post('/filme', filmeController.criar);

router.get('/filme/:id', filmeController.buscarPorId);

module.exports = router;
