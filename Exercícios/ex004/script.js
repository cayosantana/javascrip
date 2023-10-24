function tabuada() {
    var num = window.document.getElementById('txtnum')
    var res = window.document.getElementById('res')
    var rnum = Number(num.value)
    if (num.value.length == 0 || rnum <= 0) {
        window.alert('[ERRO!] - Impossivel Calcular! - Insira um número válido!!!')
    } else {
        var tabuada = '';
        for (var cont = 1; cont <= 10; cont++) {
            tabuada += rnum+ " X " +cont+ " = " +rnum * cont+ "</br>";
            res.innerHTML = tabuada
        }
    }
}