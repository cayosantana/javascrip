let carros = [8, 6, 4, 7, 3, 2, 0]
carros.push(1)
carros.sort()
console.log(carros)
console.log(`O vetor carros tem: ${carros.length} posições.`)
console.log(`O primeiro valor é: ${carros[0]}`)
let pos = carros.indexOf(5)
if (pos == -1) {
    console.log(`Valor não ENCONTRADO!`)
} else {
    console.log(`O valor está na ${pos} posição!`) 
}
