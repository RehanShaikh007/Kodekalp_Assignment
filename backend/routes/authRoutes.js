import express from "express";

import { login, signup, verifyEmail } from "../controllers/authController.js";

const router = express.Router();

router.post('/signup', signup);
router.get('/verify/:token', verifyEmail);
router.post('/login', login);


export default router;