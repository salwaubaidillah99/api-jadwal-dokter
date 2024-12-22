const jadwalDokterService = require('../services/jadwalDokterService');
const response = require('../utils/response');

const jadwalDokterController = {
    
    create: async (req, res) => {
        try {
            await jadwalDokterService.create(req, res);
        } catch (error){
            console.error('Error in jadwalDokterController:', error);
            return response.error(res, 'Terjadi kesalahan di server' , 500);
        }
    },

    getAll: async (req,res) => {
        try{
            await jadwalDokterService.getAll(req, res);
        }catch (error){
            console.error('Error in jadwalDokterController:', error);
            return response.error(res, 'Terjadi kesalahan di server' , 500);
        }
    },
};

module.exports = jadwalDokterController