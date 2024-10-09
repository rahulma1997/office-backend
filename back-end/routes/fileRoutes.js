// import express from 'express';
// import { upload, uploadFile, getFiles } from '../controller/fileController.js';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const router = express.Router();

// // __dirname की वैकल्पिक प्राप्ति
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // अपलोड रूट
// router.post('/upload', upload.single('file'), uploadFile);

// // फ़ाइलों की सूची प्राप्त करने के लिए रूट
// router.get('/files', getFiles);

// // फ़ाइल डाउनलोड रूट
// router.get('/download/:filename', (req, res) => {
//   const filename = req.params.filename;
//   const fileLocation = path.join(__dirname, '../uploads', filename); // सही पथ सेट करें
//   res.download(fileLocation, filename, (err) => {
//     if (err) {
//       console.error('File download error:', err);
//       res.status(500).send('Error downloading file');
//     }
//   });
// });

// export default router;





import express from 'express';
import { upload, uploadFile, getFiles, deleteFile } from '../controller/fileController.js';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// __dirname की वैकल्पिक प्राप्ति
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// अपलोड रूट
router.post('/upload', upload.single('file'), uploadFile);

// फ़ाइलों की सूची प्राप्त करने के लिए रूट
router.get('/files', getFiles);

// फ़ाइल डाउनलोड रूट
router.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const fileLocation = path.join(__dirname, '../uploads', filename); // सही पथ सेट करें
  res.download(fileLocation, filename, (err) => {
    if (err) {
      console.error('File download error:', err);
      res.status(500).send('Error downloading file');
    }
  });
});

// फ़ाइल हटाने के लिए रूट
router.delete('/files/:id', deleteFile);

export default router;
