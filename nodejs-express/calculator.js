
function sum(a, b){
    return a + b
}

function diff(a, b){
    return a - b
}

function mult(a, b){
    return a * b
}

function divide(a, b){

    if(b === 0){
        return "You can't divide by zero"
    }
    return a / b
}

module.exports = {
    sum: sum,
    diff: diff,
    mult: mult,
    divide: divide
};