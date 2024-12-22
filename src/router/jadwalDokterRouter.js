const express = require('express');
const router = express.Router();
const jadwalDokterController = require('../controllers/jadwalDokterController');

router.post('/jadwal', jadwalDokterController.create);
router.get('/jadwal', jadwalDokterController.getAll);

module.exports = router;
