var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são: ${hora}H.`)
if (hora < 12) {
    console.log('BOM DIA!')
} else if (hora <= 18) {
    console.log('BOA TARDE!')
} else {
    console.log('BOA NOITE!')
}