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
const print = new Print()



