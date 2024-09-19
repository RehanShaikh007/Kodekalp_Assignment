import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const __dirname = path.resolve();

const app = express();

connectDB();


app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST',
    credentials: true, 
  }));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
    
});


app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})