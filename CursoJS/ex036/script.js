//coletanto as dados do usuario nas variaveis 
const clicar = window.document.getElementById('botao')
const nome = window.document.getElementById('iname')
const email = window.document.getElementById('iemail')
const itens = window.document.querySelector('.itens')
const form = window.document.querySelector('#meuForm')
const msg = window.document.querySelector('.msg')
const li = window.document.createElement('li')

clicar.addEventListener("click", function(evento) { //Ao clicar no botao, gerar um evento
    evento.preventDefault()
    //tranformando os dados em valores
    const nomeValor = nome.value
    const emailValor = email.value
    if (nomeValor === '' || emailValor === '') { //Se não preencher todos os campos mostra erro!
        msg.textContent = 'Por favor, preencha todos os campos!'
        nome.style.backgroundColor = 'rgb(255, 154, 154)'
        email.style.backgroundColor = 'rgb(255, 154, 154)'

        setTimeout(() => { // apos exibir os erros, os erros vao desaparcer
            msg.textContent = ''
            nome.style.backgroundColor = ''
            email.style.backgroundColor = ''
        }, 3000) // o erro vai desaparecer nesse tempo em milessimo de segundos.
    } else { //Se não tiver erro, o valor dos campos vão aparecer em um campo abaixo do formulário.
        li.classList = 'itens'
        li.innerHTML = `Nome: ${nomeValor}<br/> Email: ${emailValor}`
        itens.appendChild(li)
        nome.value = '' // apos os dados serem exibidos abaixo do formulário o campo será limpo!
        email.value = '' // apos os dados serem exibidos abaixo do formulário o campo será limpo!
    }
})