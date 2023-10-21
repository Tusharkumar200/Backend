const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');


// To create a file
// for(i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/file${i}.txt`, `This is file ${i}`)
// }

// To read a file
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is : ",item);
    })
})