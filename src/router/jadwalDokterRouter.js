const express = require('express');
const router = express.Router();
const jadwalDokterController = require('../controllers/jadwalDokterController');
const userController = require('../controllers/userController');

router.post('/jadwal', jadwalDokterController.create);
router.get('/jadwal', jadwalDokterController.getAll);
router.post('/user', userController.login);

module.exports = router;
