/**
 * @swagger
 * tags:
 *   name: User
 *   description: Product management (create, read, update, delete)
 */
/**
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
