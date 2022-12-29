function validaNumero(chute) {
    const numero = +chute;

    if(verificaChute(numero)){
        elementChute.innerHTML +='<p>Valor inválido!</p>'
        return
    }

    if(numeroOutRange(numero)){
        
        elementChute.innerHTML += 
        `
            <div>Valor inválido: Fale um numero entre ${menorValor} e ${menorValor}!</div>
        `
        return
    }

    if(numero === numSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número era ${numSecreto}</h3>
        `
    } else if(numero > numSecreto){
        elementChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>'
    } else {
        elementChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>'

    }
}

function verificaChute(numero) {
    return Number.isNaN(numero)
}

function numeroOutRange(numero) {
    return numero > maiorValor || numero < menorValor;
}