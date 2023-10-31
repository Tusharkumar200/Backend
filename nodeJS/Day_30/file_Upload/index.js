//  By PostMan 

const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname,'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.jpg')
        }
    })

}).single('uploads');

app.post('/upload',upload, (req, res) => {
    console.log(req.file);
    resp.send('File upload success');
});


app.listen(3000);


//  On Browser output 

// const express = require('express');
// const multer = require('multer');
// const app = express();
// const port = 3000;

// // Configure Multer for file handling
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, __dirname,'uploads/'); // Multer will automatically create the directory if it doesn't exist
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + '-' + file.originalname);
//     },
//   });
  
  
// const upload = multer({ storage: storage });

// // Set up a route to handle file uploads
// app.post('/upload', upload.single('file'), (req, res) => {
//   res.send('File uploaded successfully');
// });

// // Create an HTML form for file uploads
// app.get('/', (req, res) => {
//   res.send(
//     '<form action="/upload" method="post" enctype="multipart/form-data">' +
//       '<input type="file" name="file">' +
//       '<input type="submit" value="Upload File">' +
//       '</form>'
//   );
// });

// // Start the Node.js server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
