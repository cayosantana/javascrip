let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
for (let pos in valores) {
    console.log(`Aposição: ${pos} tem o valor: ${valores[pos]}`)
}