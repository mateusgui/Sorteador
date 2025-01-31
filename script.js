const sorteado = document.querySelector('.sorteado');
const minStart = document.querySelector('.min');
const maxStart = document.querySelector('.max');

minStart.value = 1;
maxStart.value = 100;


function pickNumber() {
    min = Math.ceil(document.querySelector('.min').value)
    max = Math.floor(document.querySelector('.max').value)

    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    sorteado.innerHTML = numeroAleatorio
}