const fs = require('fs')

const require_ext = ['png','jpeg','jpg']
let appendTo = `image_list.txt`

function array_format(path,nested_path) {

    if(nested_path){
        path = `${path}/${nested_path}`
    }
    fs.readdir(path,(serr,files) => {
        for(file of files){
            if(fs.statSync(`${path}/${file}`).isDirectory()) {
                array_format(path,file)
            }
            else if(fs.statSync(`${path}/${file}`).isFile()) {
                for(ext of require_ext){

                    file_array = file.split(".")

                    if(ext == file_array[file_array.length - 1]){
                        let appendText
                        if(path.includes("../")) {
                            appendText = `"${path.slice(3,path.length)}/${file.trim()}", \n`
                        }
                        else if(path.includes("./")) {
                            appendText = `"${path.slice(2,path.length)}/${file.trim()}", \n`
                        }
                        else {
                            appendText = `"${path}/${file.trim()}", \n`
                        }
                        

                        fs.appendFile(appendTo,appendText,(err) => {

                        })
                    }
                }
                
            }
        }
    })
}

function plain_format(path,nested_path) {

    if(nested_path){
        path = `${path}/${nested_path}`
    }
    fs.readdir(path,(serr,files) => {
        for(file of files){
            if(fs.statSync(`${path}/${file}`).isDirectory()) {
                plain_format(path,file)
            }
            else if(fs.statSync(`${path}/${file}`).isFile()) {
                for(ext of require_ext){

                    file_array = file.split(".")

                    if(ext == file_array[file_array.length - 1]){
                        let appendText
                        if(path.includes("../")) {
                            appendText = `${path.slice(3,path.length)}/${file.trim()} \n`
                        }
                        else if(path.includes("./")) {
                            appendText = `${path.slice(2,path.length)}/${file.trim()} \n`
                        }
                        else {
                            appendText = `${path}/${file.trim()} \n`
                        }
                        

                        fs.appendFile(appendTo,appendText,(err) => {

                        })
                    }
                }
                
            }
        }
    })
}
plain_format(".")







