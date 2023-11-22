const age = [8, 13, 27, 22, 30, 40]
const somAge = age.reduce(function (idade, accumulator) {
    return accumulator + idade
},0)
console.log(somAge)