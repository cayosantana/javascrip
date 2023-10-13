var idade = 15
console.log(`Você tem ${idade} !`)
if (idade < 16) {
    console.log('NÃO vota!!!')
} else {
    if (idade < 18 || idade > 70) {
        console.log('O voto é OPCIONAL!!!')
    } else {
        console.log('O voto é OBRIGATÓRIO!!!')
    }
}