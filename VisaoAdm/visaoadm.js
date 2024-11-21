const counter = document.getElementById("counter");
const button = document.getElementById("gotoCreateCamp");

function exibirContador() {
    const quantidadeCamp = parseInt(localStorage.getItem("quantidadeCamp")) || 0;
    counter.innerHTML = quantidadeCamp < 10 ? `0${quantidadeCamp}` : `${quantidadeCamp}`;
}

window.onload = exibirContador;

button.addEventListener('click', exibirContador);
