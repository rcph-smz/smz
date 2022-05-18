let encryptText = ""

let decryptedText = [["A","E","F","H","I","K","L","M","N","T","V","W","X","Y","Z"],["C","O","S"],["D","J","P","Q","U"],["B","G","R"]]
let encryptedText = [["_¹","_²","_³","_⁴","_⁵","_⁶","_⁷","_⁸","_⁹","_¹⁰","_¹¹","_¹²","_¹³","_¹⁴","_¹⁵"],["-¹","-²","-³"],[";¹",";²",";³",";⁴",";⁵"],[":¹",":³",":³"]]
let convertCharText = ["_","-",";",":"]
let decryptCharText = ["FI","S","T","FO"];


for(let operatingText = 0; operatingText < decryptedText.length; ++operatingText){
    for(let operatingTextSub = 0; operatingTextSub < decryptedText[operatingText].length ; ++ operatingTextSub){
        let globalSearch = new RegExp(decryptedText[operatingText][operatingTextSub],"g")

        encryptText = encryptText.toUpperCase().replace(globalSearch,encryptedText[operatingText][operatingTextSub])

        console.log(encryptText)
    }
}
for(let convertChar = 0; convertChar < convertCharText.length; ++convertChar){
    let convertSearch = new RegExp(convertCharText[convertChar],"g")
    encryptText = encryptText.replace(convertSearch,decryptCharText[convertChar])
    console.log(encryptText);
}



