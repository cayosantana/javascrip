//coletanto as dados do usuario nas variaveis 
const clicar = window.document.getElementById('botao')
const nome = window.document.getElementById('iname')
const email = window.document.getElementById('iemail')
const itens = window.document.querySelector('.itens')


clicar.addEventListener("click", function(evento) { //Ao clicar no botao, gerar um evento
    evento.preventDefault()
    //tranformando os dados em valores
    const nomeValor = nome.value
    const emailValor = email.value
    if (nomeValor === '' || emailValor === '') {
        window.alert('Por Favor, Preencha todos os campos!')
        nome.style.backgroundColor = 'rgb(255, 154, 154)'
        email.style.backgroundColor = 'rgb(255, 154, 154)'
    } else {
        itens.firstElementChild.textContent = nomeValor //Colocando o valor de nome no iten primeiro filho
        itens.children[1].textContent = emailValor //Colocando o valor de email no iten com indice 1
    }
    
})