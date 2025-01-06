const response = require('../utils/response');
const moment = require('moment');
const { Dokter, Jadwal } = require('../models');
const { getAll } = require('../controllers/jadwalDokterController');

moment.locale('id');

const jadwalDokterService = {
    create: async (req, res) => {
        try {
            const {
                dokterId,
                day,
                time_start,
                time_finish,
                quota,
                status,
                date_range,
            } = req.body;

            // Validasi input
            if (
                !dokterId ||
                !day ||
                !time_start ||
                !time_finish ||
                !quota ||
                status === undefined ||
                !date_range
            ) {
                return response.error(res, 'Semua field harus diisi', 400);
            }

            // Periksa apakah dokter ada
            const dokter = await Dokter.findByPk(dokterId);
            if (!dokter) {
                return response.error(res, 'Dokter tidak ditemukan', 404);
            }

            // Parsing dan validasi date_range
            const [startDate, endDate] = date_range.split('s/d').map(date => date.trim());
            const start = moment(startDate, 'YYYY-MM-DD');
            const end = moment(endDate, 'YYYY-MM-DD');

            if (!start.isValid() || !end.isValid()) {
                return response.error(res, 'Format date_range tidak valid (YYYY-MM-DD s/d YYYY-MM-DD)', 400);
            }

            // Buat jadwal untuk hari yang cocok
            const createdSchedules = [];
            for (
                let currentDate = start.clone();
                currentDate.isSameOrBefore(end);
                currentDate.add(1, 'days')
            ) {
                const dayOfWeek = currentDate.format('dddd').toLowerCase(); // Hari dalam format "minggu", "senin", dll
                if (dayOfWeek === day.toLowerCase()) {
                    const jadwal = await Jadwal.create({
                        dokterId,
                        day: currentDate.format('dddd'),
                        time_start,
                        time_finish,
                        quota,
                        status,
                        date_range: currentDate.format('YYYY-MM-DD'),
                    });
                    createdSchedules.push(jadwal);
                }
            }

            // Tidak ada jadwal yang cocok
            if (createdSchedules.length === 0) {
                return response.error(
                    res,
                    `Tidak ada jadwal yang cocok untuk hari ${day} dalam rentang tanggal ${date_range}`,
                    400
                );
            }

            return response.success(res, 'Jadwal dokter berhasil dibuat', createdSchedules);
        } catch (error) {
            console.error('Error in jadwalDokterService:', error);
            return response.error(res, 'Terjadi kesalahan pada server', 500);
        }
    },
    getAll: async (req, res) => {
        try {
            console.log('User role in getAll:', req.user.role); // Debugging

            if (req.user.role === 'Admin') {
                const jadwal = await Jadwal.findAll();
                return response.success(res, 'Berhasil mengambil semua jadwal', jadwal);
            } else if (req.user.role === 'Dokter') {
                const dokter = await Dokter.findOne({
                    where: { userId: req.user.id },
                });

                if (!dokter) {
                    return response.error(res, 'Dokter tidak ditemukan', 404);
                }

                const jadwalDokter = await Jadwal.findAll({
                    where: { dokterId: dokter.id },
                });

                return response.success(res, 'Berhasil mengambil jadwal dokter', jadwalDokter);
            } else {
                return response.error(res, 'Role tidak dikenali', 400);
            }
        } catch (error) {
            console.error('Error pada getAll jadwal:', error);
            return response.error(res, 'Terjadi kesalahan di server', 500);
        }
    },
};


module.exports = jadwalDokterService;