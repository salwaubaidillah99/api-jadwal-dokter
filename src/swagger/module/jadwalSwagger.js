/**
 * @swagger
 * tags:
 *   name: Jadwal Dokter
 *   description: Product management (create, read, update, delete)
 */
/**
 * @swagger
 * /api/jadwal/:
 *   post:
 *     summary: Create a new jadwal for a doctor
 *     tags: [Jadwal Dokter]
 *     description: Create a new schedule for a doctor based on the provided details.
 *     operationId: createJadwal
 *     requestBody:
 *       description: Jadwal object to be created
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - dokterId
 *               - day
 *               - time_start
 *               - time_finish
 *               - quota
 *               - status
 *               - date_range
 *             properties:
 *               dokterId:
 *                 type: integer
 *                 description: The ID of the doctor.
 *                 example: 1
 *               day:
 *                 type: string
 *                 description: Day of the week (e.g., Monday, Tuesday).
 *                 example: "Monday"
 *               time_start:
 *                 type: string
 *                 format: time
 *                 description: The starting time of the schedule (e.g., 09:00).
 *                 example: "09:00"
 *               time_finish:
 *                 type: string
 *                 format: time
 *                 description: The ending time of the schedule (e.g., 11:00).
 *                 example: "11:00"
 *               quota:
 *                 type: integer
 *                 description: The number of patients the doctor can accommodate.
 *                 example: 10
 *               status:
 *                 type: boolean
 *                 description: The status of the schedule, whether active or not.
 *                 example: true
 *               date_range:
 *                 type: string
 *                 description: The date range for the schedule in the format "YYYY-MM-DD s/d YYYY-MM-DD".
 *                 example: "2024-12-01 s/d 2024-12-31"
 *     responses:
 *       200:
 *         description: Jadwal created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Jadwal Dokter Berhasil dibuat"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       doctor_id:
 *                         type: integer
 *                         example: 32
 *                       day:
 *                         type: string
 *                         example: "Monday"
 *                       time_start:
 *                         type: string
 *                         example: "09:00"
 *                       time_finish:
 *                         type: string
 *                         example: "11:00"
 *                       quota:
 *                         type: integer
 *                         example: 10
 *                       status:
 *                         type: boolean
 *                         example: true
 *                       doctor_name:
 *                         type: string
 *                         example: "Dr. Ghani Imam Cesyo"
 *                       date:
 *                         type: string
 *                         example: "2024-12-01"
 *       400:
 *         description: Invalid input or missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Semua field harus diisi"
 *       404:
 *         description: Doctor not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Dokter tidak ditemukan"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Terjadi kesalahan pada server"
 */

/**
 * @swagger
 * /api/jadwal/:
 *   get:
 *     summary: Get all jadwals for doctors
 *     tags: [Jadwal Dokter]
 *     description: Retrieve all available jadwals (doctor schedules) with associated doctor details.
 *     operationId: getAllJadwals
 *     responses:
 *       200:
 *         description: Successfully retrieved jadwals
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Berhasil mendapatkan jadwal dokter"
 *                 body:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       doctor_id:
 *                         type: integer
 *                         example: 32
 *                       day:
 *                         type: string
 *                         example: "Monday"
 *                       time_start:
 *                         type: string
 *                         example: "09:00"
 *                       time_finish:
 *                         type: string
 *                         example: "11:00"
 *                       quota:
 *                         type: integer
 *                         example: 10
 *                       status:
 *                         type: boolean
 *                         example: true
 *                       doctor_name:
 *                         type: string
 *                         example: "Dr. Ghani Imam Cesyo"
 *                       date:
 *                         type: string
 *                         example: "2024-12-01"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Terjadi kesalahan pada server"
 */
