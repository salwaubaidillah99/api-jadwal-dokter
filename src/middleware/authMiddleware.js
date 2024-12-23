// src/middleware/authMiddleware.js
const response = require('../utils/response');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'salwafadillah#123';

const authMiddleware = {
    authenticate: (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1]; // Ambil token dari header
        if (!token) {
            return response.error(res, 'Token tidak ditemukan', 401); // Jika token tidak ditemukan
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET); // Verifikasi token
            req.user = decoded; // Tambahkan informasi user ke request object
            next(); // Lanjutkan ke controller
        } catch (error) {
            return response.error(res, 'Token expired, silahkan login kembali', 403); // Jika token expired
        }
    },
};

module.exports = authMiddleware;
