class Random {
    constructor(parameter) {
        if(parameter) console.log(parameter = "This class doesn't need argument")
    }
    randomInt(min,max,callback,adjust) {
        if(!adjust) adjust = 0
        let formula = Math.floor(Math.random() * ((max + adjust) - min)) + min
        if(!callback) {
            return formula
        }
        else callback(formula,min,(max + adjust))
    }
    randomFloat(min,max,decimal,callback,adjust) {
        if(!adjust) adjust = 0
        if(!decimal) decimal = 0
            let formula = parseFloat((Math.random() * ((max + adjust)- min) + min).toFixed(decimal))
        if(!callback) {
            return formula
        }
        else callback(formula,min,(max + adjust))
  }
}

module.exports = new Random()