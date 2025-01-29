import express from 'express';
import authenticateToken from '../../middlewares/authenticateToken.js';
import {
  registerAdmin,
  sendVerifyOtp,
  verifyOtp,
  sendResetOtp,
  resetPassword,
  logOut,
  updateAdmin,
  loginAdmin,
} from '../../controllers/Auth/adminauth.controllers.js';

const route = express.Router();

// Authentication routes

/**
 * @swagger
 * /admin/register:
 *   post:
 *     summary: Register a new admin
 *     description: Allows a new admin to register with their details
 *     tags:
 *       - Admin Authentication
 *     parameters:
 *       - in: body
 *         name: adminData
 *         description: The admin registration details
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - email
 *             - password
 *           properties:
 *             username:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Admin registered successfully
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               type: boolean
 *               example: true
 *             message:
 *               type: string
 *               example: "Admin registered successfully."
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
route.post('/register', registerAdmin);

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin login
 *     description: Allows an admin to login by providing credentials
 *     tags:
 *       - Admin Authentication
 *     parameters:
 *       - in: body
 *         name: loginData
 *         description: The admin login details
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Admin logged in successfully
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               type: boolean
 *               example: true
 *             message:
 *               type: string
 *               example: "Login successful."
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
route.post('/login', loginAdmin);

/**
 * @swagger
 * /admin/register/{id}:
 *   patch:
 *     summary: Update admin information
 *     description: Allows an authenticated admin to update their information
 *     tags:
 *       - Admin Authentication
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the admin to update
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: adminData
 *         description: The admin update details
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Admin information updated successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
route.patch('/register/:id', authenticateToken, updateAdmin);

// Admin-specific routes, protected with authenticateToken and authorizeRoles

/**
 * @swagger
 * /admin/send-verify-otp:
 *   post:
 *     summary: Send OTP for email verification
 *     description: Sends an OTP to the admin's email for verification
 *     tags:
 *       - Admin Authentication
 *     parameters:
 *       - in: body
 *         name: email
 *         description: The admin's email to send the OTP
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       400:
 *         description: Invalid email address
 *       500:
 *         description: Server error
 */
route.post('/send-verify-otp', authenticateToken, sendVerifyOtp);

/**
 * @swagger
 * /admin/verify-otp:
 *   post:
 *     summary: Verify OTP for email verification
 *     description: Verifies the OTP sent to the admin's email
 *     tags:
 *       - Admin Authentication
 *     parameters:
 *       - in: body
 *         name: otpData
 *         description: The OTP and email for verification
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             otp:
 *               type: string
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP
 *       500:
 *         description: Server error
 */
route.post('/verify-otp', authenticateToken, verifyOtp);

/**
 * @swagger
 * /admin/send-reset-otp:
 *   post:
 *     summary: Send OTP for password reset
 *     description: Sends an OTP to the admin's email to reset their password
 *     tags:
 *       - Admin Authentication
 *     parameters:
 *       - in: body
 *         name: email
 *         description: The admin's email to send the OTP
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       400:
 *         description: Invalid email address
 *       500:
 *         description: Server error
 */
route.post('/send-reset-otp', sendResetOtp);

/**
 * @swagger
 * /admin/reset-password:
 *   post:
 *     summary: Reset admin password
 *     description: Allows the admin to reset their password using OTP
 *     tags:
 *       - Admin Authentication
 *     parameters:
 *       - in: body
 *         name: resetPasswordData
 *         description: The OTP and new password for resetting
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             otp:
 *               type: string
 *             newPassword:
 *               type: string
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Invalid OTP or password
 *       500:
 *         description: Server error
 */
route.post('/reset-password', resetPassword);

/**
 * @swagger
 * /admin/logout:
 *   post:
 *     summary: Logout admin
 *     description: Logs out the admin by invalidating the authentication token
 *     tags:
 *       - Admin Authentication
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: JWT token for authentication
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Admin logged out successfully
 *       401:
 *         description: Unauthorized request
 *       500:
 *         description: Server error
 */
route.post('/logout', authenticateToken, logOut);

export default route;
