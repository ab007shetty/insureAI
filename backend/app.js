import express from 'express';
import cors from 'cors';
import fileUploadRouter from './routes/fileUpload.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/upload', fileUploadRouter);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});