const userService = require('../services/userService');
const response = require('../utils/response');
const bcrypt = require('bcryptjs');

const userController = {
  
    login: async (req, res) => {
    try {
      await userService.login(req, res);
    } catch (error){
        console.error('error in userController:', error);
        return response.error(res, 'Terjadi Kesalahan di server', 500);
    }
}
};

module.exports= userController;