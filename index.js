import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;

const db_url = 'mongodb+srv://sweet-alcatel:1234567hj@cluster0.7ca1h.mongodb.net/Backend-site-resume?retryWrites=true&w=majority';

const app = express();

app.use(express.json());

app.use('/', router);

app.use(express.static(path.join(__dirname, 'Front/dist')));

app.get('/*', cors(), (req, res) => {
    res.sendFile(path.join(__dirname, 'Front/dist', 'index.html'));
}); // Для неизвестных путей

const startApp = async () => {
    try {
        await mongoose.connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));
    } catch (e) {
        console.log(e);
    };
};

startApp(); 