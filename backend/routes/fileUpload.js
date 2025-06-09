import express from 'express';
import multer from 'multer';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.post('/', upload.single('csvFile'), (req, res) => {
  const isWin = process.platform === "win32";
  const pythonCmd = isWin ? "python" : "python3";
  const scriptPath = path.join(__dirname, '../ai/service.py');
  const filePath = path.resolve(req.file.path);

  console.log(`DEBUG: OS=${process.platform}, using python command: ${pythonCmd}`);
  console.log(`DEBUG: Spawning: ${pythonCmd} ${scriptPath} ${filePath}`);

  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`File does not exist: ${filePath}`);
        return res.status(500).json({ error: 'Uploaded file not found on server.' });
      }

      const python = spawn(pythonCmd, [scriptPath, filePath], { shell: isWin });

      let dataString = '';
      let errorString = '';

      python.stdout.on('data', (data) => {
        dataString += data.toString();
      });
      python.stderr.on('data', (data) => {
        errorString += data.toString();
      });

      python.on('close', (code) => {
        fs.unlink(filePath, () => {});
        if (code !== 0 || errorString) {
          console.error('Python error:', errorString);
          try {
            const errObj = JSON.parse(dataString);
            if (errObj && errObj.error) {
              return res.status(500).json({ error: errObj.error, traceback: errObj.traceback || "" });
            }
          } catch (_) { /* ignore */ }
          return res.status(500).json({ error: `Python script failed: ${errorString}` });
        }
        try {
          res.json(JSON.parse(dataString));
        } catch (e) {
          console.error('Parsing error:', e, dataString);
          res.status(500).json({ error: 'Error parsing Python output.' });
        }
      });

      python.on('error', (err) => {
        console.error('Failed to start Python process:', err);
        res.status(500).json({ error: 'Failed to start Python process. Ensure Python is installed and in your PATH.' });
      });
    });

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

export default router;