const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let folderName = ''
function requestFolder() {
    return new Promise((resolved,rejected) => {
        readLine.question("folderName : ",(res) => {
            folderName = res.toString()
            resolved()
            readLine.close()
        })
    })
}

const fs = require('fs')
async function run() {
    await  requestFolder()

    fs.readdir(folderName, function(err,file){
        for(i of file){
            fs.appendFile('./yield.txt','\"'+ i.trim() + '\",\n', function(err){
    
            })
        }
    })
}
run()