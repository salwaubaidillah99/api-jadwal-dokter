const express = require('express');
const router = express.Router();
const jadwalDokterController = require('../controllers/jadwalDokterController');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const status = res.statusCode;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${status} - ${duration}ms`);
    });
    next();
});

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/jadwal', authMiddleware.authenticate, jadwalDokterController.create);
router.get('/jadwal',authMiddleware.authenticate,  jadwalDokterController.getAll);

module.exports = router;
