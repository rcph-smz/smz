const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readLine.question("<x axis>: ",(res) => {
    const relu = new ReLU()
    console.log(relu.x_axis(res),relu.y_axis(relu.x_axis(res)))
    readLine.close()
})

class ReLU{
    x_axis(arg) {
        return (arg * 1.70) + -0.85
    }
    y_axis(arg) {
        if(arg > 0) return arg
        else return 0
    }
}

module.exports = new ReLU