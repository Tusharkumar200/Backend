// const express = require('express');
// const multer = require('multer');
// const app = express();

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, 'uploads/')
//         },
//         filename: (req, file, cb) => {
//             cb(null, file.fieldname + '-' + Date.now() + '.jpg')
//         }
//     }).single('image');

//     app.post('/upload', (req, res) => {

//         res.send('File upload success');
//     });

const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('user_file'), (req, res) => {
    res.send('File upload success');
});

app.listen(3000);

