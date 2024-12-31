/**
 * @swagger
 * tags:
 *   name: User
 *   description: Product management (create, read, update, delete)
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: User registration
 *     tags: [User]
 *     description: Endpoint untuk registrasi pengguna baru dengan menentukan role berdasarkan email.
 *     operationId: registerUser
 *     requestBody:
 *       description: User's information to register
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nama pengguna.
 *                 example: "Salwa Fadillah"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email pengguna.
 *                 example: "salwafadillah@gmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Password pengguna.
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Registrasi berhasil
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
 *                   example: "User berhasil terdaftar"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID pengguna
 *                       example: 1
 *                     username:
 *                       type: string
 *                       description: Nama pengguna
 *                       example: "Salwa Fadillah"
 *                     email:
 *                       type: string
 *                       description: Email pengguna
 *                       example: "salwafadillah@gmail.com"
 *                     role:
 *                       type: string
 *                       description: Role pengguna berdasarkan email
 *                       example: "pasien"
 *       400:
 *         description: Semua field harus diisi
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
 *       409:
 *         description: Email sudah terdaftar
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
 *                   example: "Email sudah terdaftar"
 *       500:
 *         description: Terjadi kesalahan pada server
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
 *                   example: "Terjadi Kesalahan pada server"
 */

/**
 * 
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     description: Endpoint untuk login pengguna dan mendapatkan token autentikasi.
 *     operationId: loginUser
 *     requestBody:
 *       description: User's email and password to login
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email pengguna yang terdaftar.
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Password pengguna yang terdaftar.
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login berhasil dan token dikembalikan
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
 *                   example: "Login Success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       description: Token autentikasi yang digunakan untuk akses API.
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNjc4ODMyMzY5LCJleHBpcmVzSW4iOiIxY2hJZFJFdG1vb2tnc1JrRTA4TGdYa3BBQnhVUmhBOSJ9.NjU-5J-2b4tKxsPIqz2h6ZFFLfBd7bLvLhtFHvfdNN4"
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: ID pengguna
 *                           example: 1
 *                         email:
 *                           type: string
 *                           description: Email pengguna
 *                           example: "user@example.com"
 *                         username:
 *                           type: string
 *                           description: Nama pengguna
 *                           example: "user123"
 *       400:
 *         description: Email dan password tidak boleh kosong
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
 *                   example: "Email dan password tidak boleh Kosong"
 *       404:
 *         description: Pengguna tidak ditemukan
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
 *                   example: "User tidak ditemukan"
 *       401:
 *         description: Password salah
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
 *                   example: "Password Salah!"
 *       500:
 *         description: Terjadi kesalahan pada server
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
 *                   example: "Terjadi Kesalahan pada server"
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get User By ID
 *     tags: [User]
 *     description: Endpoint untuk mendapatkan detail pengguna berdasarkan ID.
 *     operationId: getUserById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID pengguna yang ingin dicari.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Data pengguna berhasil ditemukan
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
 *                   example: "User ditemukan"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID pengguna
 *                       example: 1
 *                     username:
 *                       type: string
 *                       description: Nama pengguna
 *                       example: "user123"
 *                     email:
 *                       type: string
 *                       description: Email pengguna
 *                       example: "user@example.com"
 *                     role:
 *                       type: string
 *                       description: Role pengguna
 *                       example: "Pasien"
 *       400:
 *         description: ID tidak valid atau tidak diberikan
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
 *                   example: "ID tidak boleh kosong"
 *       404:
 *         description: Pengguna dengan ID tersebut tidak ditemukan
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
 *                   example: "User tidak ditemukan"
 *       500:
 *         description: Terjadi kesalahan pada server
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
