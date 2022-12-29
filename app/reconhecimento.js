const elementChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang='pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak);


function onSpeak(event) {
    let chute = event.results[0][0].transcript;
    let chuteFormatado = chute.replace(".","");
    validaNumero(chuteFormatado);
    exibirChute(chuteFormatado);
}

function exibirChute(chute){
    elementChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => {
    recognition.start();
})