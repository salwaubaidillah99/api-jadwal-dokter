const response = require('../utils/response');
const {User} =require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { where } = require('sequelize');

const secretKey = 'salwafadillah#123';

const userService = {

    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;
    
            if (!username || !email || !password) {
                return response.error(res, 'Username, Email, dan password harus diisi!', 400);
            }
    
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return response.error(res, 'Email sudah terdaftar', 400);
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
    
            let role = 'Pasien'; // Default role
            if (email.includes('.admin')) {
                role = 'Admin';
            } else if (email.includes('Dr.')) {
                role = 'Dokter';
            }
    
            const newUser = await User.create({
                username,
                email,
                password: hashedPassword,
                role,
            });
    
            return response.success(res, 'User berhasil terdaftar', {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
            });
        } catch (error) {
            console.error(error); // Log error untuk debugging
            return response.error(res, 'Terjadi Kesalahan Server', 500);
        }
    },    

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return response.error(res, 'Email dan password tidak boleh kosong', 400);
            }
    
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return response.error(res, 'User tidak ditemukan', 404);
            }
    
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return response.error(res, 'Password salah!', 401);
            }
    
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    role: user.role, // Pastikan `role` ditambahkan ke payload
                },
                secretKey,
                { expiresIn: '1h' }
            );
    
            return response.success(res, 'Login berhasil', {
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    role: user.role,
                },
            });
        } catch (error) {
            console.error('Login error:', error);
            return response.error(res, 'Terjadi kesalahan pada server', 500);
        }
    },    

    getById: async (req, res) => {
        try {
            const { id } = req.params;

            if (!id) {
                return response.error(res, 'ID tidak boleh kosong', 400);
            }

            const user = await User.findByPk(id);

            if (!user) {
                return response.error(res, 'User tidak ditemukan', 404);
            }

            return response.success(res, 'User ditemukan', {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            });
        } catch (error) {
            console.error('Get User By ID Error:', error);
            return response.error(res, 'Terjadi Kesalahan pada server', 500);
        }
    },
};

module.exports = userService;