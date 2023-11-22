const age = [8, 13, 27, 22, 30, 40]
const agePar = age.filter(function (item) {
    return item % 2 === 0
})
console.log(agePar)