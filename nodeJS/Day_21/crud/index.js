const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;


// To create  a file in a directory
// try {
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath);
//   }
//   fs.writeFileSync(filePath, 'This is a simple text file');
//   console.log('File written successfully');
// } catch (err) {
//   console.error(err);
// }


// To read a file from a directory
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });


// To append a file in a directory
// fs.appendFile(filePath,'and file name is apple.txt', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File appended successfully');
// });

// To rename a file in a directory
// fs.rename(filePath, `${dirPath}/apple.txt`, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File renamed successfully');
// });

// To delete a file in a directory
// fs.unlink(filePath, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File deleted successfully');
// });