
var numeros = []

console.log(numeros)

paragrafo = document.getElementById('array_initial')

paragrafo.textContent = numeros.join (', ')

function adicionar() {


    var numUsuario = document.getElementById('entrada').value.trim()
    numUsuario = parseFloat(numUsuario)

    if (!isNaN(numUsuario)) {

        numeros.push(numUsuario)
        document.getElementById('entrada').value = ''
        document.getElementById('array_initial').value = numeros.join(', ')

    } else {
        alert('Por favor, insira um valor válido')
    }



}

function mediaAritmetica() {

    if (numeros.length === 0) {
        alert ('Nenhuma nota foi adicionada.')
        return
    } 

    var soma = numeros.reduce((accumulator,value) => accumulator + value,0);
    var media = soma/numeros.length
    document.getElementById('result_media').value = media.toFixed(2)
    console.log(media)
    
}