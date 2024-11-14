const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const basicAuth = require('express-basic-auth');

const app = express();
const PORT = 3000;

app.use(
  basicAuth({
    users: {
      admin: '90Rahul@9918#',
      test: 'password123',
    },
    challenge: true,
  })
);

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.get('/files', (req, res) => {
  fs.readdir('./uploads', (err, files) => {
    if (err) res.status(500).send('Could not list files');
    else res.json(files);
  });
});

app.get('/files/:filename', (req, res) => {
  const file = path.join(__dirname, 'uploads', req.params.filename);
  res.download(file);
});

app.delete('/files/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.params.filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send('File not found');
      }
      return res.status(500).send('Could not delete file');
    }
    res.send('File deleted successfully');
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
