const response = require('../utils/response');
const {User} =require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { where } = require('sequelize');

const secretKey = 'salwafadillah#123';

const userService = {

    register: async (req, res) => {
        try {
            const {username, email, password} = req.body;
            if (!username || !email || !password){
                return response.error(res, 'Username, Email dan password harus di isi!', 400);
            }
            const existingUser = await User.findOne({where : {email}});
            if (existingUser){
                return response.error(res, 'email sudah terdaftar', 400);
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            let role = 'Pasien';
            if (email.includes('Dr.')){
                role = 'Dokter';
            } else if (
                email.includes('.admin')) {
                    role = 'Admin';
                }

                const newUser = await User.create({
                    username,
                    email,
                    password: hashedPassword,
                    role
                });

                return response.success(res, 'User berhasil terdaftar', {
                    id: newUser.id,
                    username: newUser.username,
                    email: newUser.email,
                    role: newUser.role
                });
        } catch (error){
            return response.error(res, 'Terjadi Kesalahan Serve', 500);
        }
    },

    login: async (req, res) => {
        try {
            const {email, password} = req.body;
            if(!email || !password){
                return response.error(res, 'Email dan password tidak boleh Kosong', 400);
            }
        
            const user = await User.findOne({where: {email}});
            if(!user){
                return response.error(
                    res, 'User tidak ditemukan', 404);
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid){
                return response.error(res, 'Password Salah!', 401);
            }

            const token = jwt.sign(
                {
                    id: user.id, email: user.email},
                    secretKey,
                    {expiresIn: '1h'}
            );
            return response.success(res, 'Login Success', {
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                },
            }); 
        } catch (error){
            console.error('Login Error :',  error);
            return response.error(res, 'Terjadi Kesalahan pada server', 500);
        }
    },
};

module.exports = userService;