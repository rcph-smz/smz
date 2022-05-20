class Print {
    constructor() {
        return function print(...log) {
            let i 
            for(i of log){
                console.log(i)
            }
        }    
    }
}
module.exports = new Print()