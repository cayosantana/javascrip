function carregar() {
    var msg = window.document.getElementById('time')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    msg.innerText = `Agora são ${hora} Horas!`
    if (hora < 12) {
        document.body.style.background = 'deepskyblue'
    } else if (hora <= 18) {
        document.body.style.background = 'orange'
        img.src = '../ex001/Imagens/foto-tarde.jpg'
    } else {
        document.body.style.background = 'indigo'
        img.src = '../ex001/Imagens/foto-noite.jpg'
    }
}
