import express from "express";

import { login, logout, signup, verifyEmail } from "../controllers/authController.js";

const router = express.Router();

router.post('/signup', signup);
router.get('/verify/:token', verifyEmail);
router.post('/login', login);
router.get('/logout', logout);


export default router;