let indicate = 0;
let arithmeticSequence = 0;
function runIndicator() {
    indicate < 10 && arithmeticSequence == 1000 ? ++indicate : indicate == 10 ? indicate = 0 : indicate
    arithmeticSequence == 1000 ? arithmeticSequence = 0 : arithmeticSequence 
}
function randomValue() {
    return (Math.random() * 10) < 6 ? 1 : 0
}
function Run() {
    for(let i = 0; i < 1; ++i) {
        let valueHolderer = ` ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())}  || ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())}  || ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())}  || ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} ${parseInt(randomValue())} `
        ++arithmeticSequence
        runIndicator()
        console.log(valueHolderer + valueHolderer + " " + "|".repeat(indicate))
        
    }
}
function Start() {
    setInterval(Run,1);
}
Start()