const counter = document.getElementById("counter");
const button = document.getElementById("gotoCreateCamp");

function exibirContador() {
    const quantidadeCamp = parseInt(localStorage.getItem("quantidadeCamp")) || 0;
    counter.innerHTML = quantidadeCamp < 10 ? `0${quantidadeCamp}` : `${quantidadeCamp}`;
}

window.onload = () => {
    exibirContador();
    window.addEventListener("storage", exibirContador); // Atualiza contador ao detectar mudanças no localStorage
};

button.addEventListener('click', () => {
    exibirContador();
});
