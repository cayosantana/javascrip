function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar...`
        window.alert('[ERRO!] - Impossivel Contar!')
    } else {
        res.innerHTML = 'Contando...'
        var rinicio = Number(inicio.value)
        var rfim = Number(fim.value)
        var rpasso = Number(passo.value)
        if (rpasso <= 0) {
            window.alert('ERRO DE PASSO! - Será considerado PASSO 1') 
            rpasso = 1
        }
        if (rinicio < rfim) {
            // Contagem Crescente
            for (var cont = rinicio; cont <= rfim; cont += rpasso) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        } else {
            // Contagem Decrecente
            for (var cont = rinicio; cont >= rfim; cont -= rpasso) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        }res.innerHTML += `\u{1F590}`
    }   
}
