const fs = require('fs')
const folderName = ''
fs.readdir(folderName, function(err,file){
    for(i of file){
        fs.appendFile('./yield.txt','\"'+ i.trim() + '\",\n', function(err){

        })
    }
})