const response = require('../utils/response');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'salwafadillah#123';

const authMiddleware = {
    authenticate: (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return response.error(res, 'Token tidak ditemukan', 401);
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded; // Pastikan `role` ada di token
            console.log('Authenticated user:', req.user); // Debugging
            next();
        } catch (error) {
            console.error('Authentication error:', error);
            return response.error(res, 'Token expired atau tidak valid', 403);
        }
    },
};

module.exports = authMiddleware;
