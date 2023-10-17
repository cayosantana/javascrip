function verif() {
    var ano = window.document.getElementById('iano')
    var res = window.document.getElementById('res')
    var data = new Date();
    var agora = data.getFullYear();
    if (ano.value.length == 0 || Number(ano.value) > agora) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var cal = agora - Number(ano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gen = 'um Homem'
            if (cal < 18) {
                img.setAttribute('src', 'boy.png')                           
            } else if (cal < 60) {
                img.setAttribute('src', 'men.png') 
            } else {
                img.setAttribute('src', 'grandfather.png') 
            }
        } else {
            gen = 'uma Mulher'
            if (cal < 18) {
                img.setAttribute('src', 'girl.png')
            } else if (cal < 60) {
                img.setAttribute('src', 'woman.png')
            } else {
                img.setAttribute('src', 'grandmother.png')
            }
        }
        res.innerHTML = `Detectamos  ${gen} com ${cal} anos!`
        res.appendChild(img)
    }
}