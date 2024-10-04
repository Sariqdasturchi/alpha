// Funksiyalar
// decloration, experition, arrow function

console.log(myFunc(2, 8));

function myFunc(a, b) {
    return a + b
}

const logger = function(name, age) {
    return(`Mening ismim ${name}, va yoshim ${age}`)
}

console.log(logger("Suhrob", 22));


const arrow = (speed) => {
    return `my car is speed ${speed}`
}

console.log(arrow(200));
