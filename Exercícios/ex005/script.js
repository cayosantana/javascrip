let num = window.document.getElementById('txtnum')
let lis = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //* Para adicionar os valores
        let item = document.createElement('option') //* Para mostar o valor dentro do campo
        item.text = `Valor ${num.value} adicionado!` //* Para mostar o valor dentro do campo
        lis.appendChild(item) //* Para mostar o valor dentro do campo
        res.innerHTML = '' //* Quando eu add um novo numero a uma lista ja exibida, o resultado será apagado.
    } else {
        window.alert('[ERRO!] - Número Invalido ou já encontrado na lista.')
    }
    num.value = '' //* Serve p/ apos add o numero o campo ficar vazio para digitar outro numero.
    num.focus()  //* apos add o numero o curso já fica piscando dentro do campo p digitar novamente.
}
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione algum valor!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é: ${media}.</p>`
    }
}