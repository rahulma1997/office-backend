// controller/fileController.js

import multer from 'multer';
import File from '../model/fileModel.js';

// सेटअप multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // इसे अस्थायी रूप से रखते हैं
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const newFile = new File({
    name: req.file.originalname,
    path: req.file.path, // आप इसे URL या अन्य स्थान पर परिवर्तित कर सकते हैं।
  });

  try {
    await newFile.save();
    return res.status(200).json(newFile);
  } catch (error) {
    return res.status(500).json({ message: 'Error saving file', error });
  }
};

const getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching files', error });
  }
};

// export { upload, uploadFile, getFiles };


const deleteFile = async (req, res) => {
  const { id } = req.params; // Expecting the ID of the file to delete

  try {
    const deletedFile = await File.findByIdAndDelete(id);
    if (!deletedFile) {
      return res.status(404).json({ message: 'File not found' });
    }
    return res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting file', error });
  }
};

export { upload, uploadFile, getFiles, deleteFile };

