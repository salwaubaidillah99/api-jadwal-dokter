const response = require('../utils/response');
const moment = require('moment');
const { Dokter, Jadwal } = require('../models');

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

            const dokter = await Dokter.findByPk(dokterId);
            if (!dokter) {
                return response.error(res, 'Dokter tidak ditemukan', 404);
            }

            const [startDate, endDate] = date_range.split('s/d').map(date => date.trim());
            const start = moment(startDate, 'YYYY-MM-DD');
            const end = moment(endDate, 'YYYY-MM-DD');

            if (!start.isValid() || !end.isValid()) {
                return response.error(res, 'Format date_range tidak valid (YYYY-MM-DD s/d YYYY-MM-DD)', 400);
            }

            const createdSchedules = [];
            for (
                let currentDate = start;
                currentDate.isSameOrBefore(end);
                currentDate.add(1, 'days')
            ) {
                const dayOfWeek = currentDate.format('dddd').toLowerCase();
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

            if (createdSchedules.length === 0) {
                return response.error(
                    res,
                    `Tidak ada jadwal yang cocok untuk hari ${day} dalam rentang tanggal`,
                    400
                );
            }

            return response.success(res, 'Jadwal Dokter Berhasil dibuat', createdSchedules);
        } catch (error) {
            console.error('Error in jadwalDokterService:', error);
            return response.error(res, 'Terjadi kesalahan pada server', 500);
        }
    },

    getAll: async (req, res) => {
        try {
            const schedules = await Jadwal.findAll({
                include: {
                    model: Dokter,
                    attributes: ['name'], 
                },
            });

            const formattedSchedules = schedules.map(schedule => ({
                id: schedule.id,
                doctor_id: schedule.dokterId,
                day: schedule.day,
                time_start: schedule.time_start,
                time_finish: schedule.time_finish,
                quota: schedule.quota,
                status: schedule.status,
                doctor_name: schedule.Dokter.name,
                date: schedule.date_range,
            }));

            return response.success(res, 'Berhasil mendapatkan jadwal dokter', formattedSchedules);
        } catch (error) {
            console.error('Error in jadwalDokterService:', error);
            return response.error(res, 'Terjadi kesalahan pada server', 500);
        }
    },
};

module.exports = jadwalDokterService;
