var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var CriarcovidTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel === 'Primario') {
    //
    CriarcovidTempo = 2000

} else if (nivel === 'Secundário') {
    //1500
    CriarcovidTempo = 1500
} else if (nivel === 'Terciário') {
    //600
    CriarcovidTempo = 600
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(Criarcovid)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }


}, 2000)

function posicaoRandomica() {


    //remover o covid anterior (caso exista)
    if (document.getElementById('covid')) {
        document.getElementById('covid').remove()

        //console.log('elemento selecionado foi: v' + vidas)
        if (vidas > 3) {

            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var covid = document.createElement('img')
    covid.src = 'imagens/covid.png'
    covid.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    covid.style.left = posicaoX + 'px'
    covid.style.top = posicaoY + 'px'
    covid.style.position = 'absolute'
    covid.id = 'covid'
    covid.onclick = function() {
        this.remove()
    }

    document.body.appendChild(covid)


}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'covid1'

        case 1:
            return 'covid2'

        case 2:
            return 'covid3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}