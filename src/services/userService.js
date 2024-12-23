const response = require('../utils/response');
const {User} =require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secretKey = 'salwafadillah#123';

const userService = {

    login: async (req, res) => {
        try {
            const {email, password} = req.body;
            if(!email, !password){
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