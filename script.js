
var numeros = []

console.log(numeros)

paragrafo = document.getElementById('array_initial')

paragrafo.textContent = numeros.join (', ')


//função para adicionar novos elementos no array
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

//função para calcular a média dos valores digitados pelo usuário
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

//função para limpar os números do array e dos input
function limpar() {

    if (numeros.length === 0) {
        alert ('Nenhuma nota foi adicionada.')
        return
    } 

    while(numeros.length) {
        numeros.pop()
    }
    media = ''
    

    console.log(numeros, media)

    document.getElementById('array_initial').value = ''
    document.getElementById('result_media').value = ''
    
}