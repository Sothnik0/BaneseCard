const userName = localStorage.getItem("userName")

const hello = document.getElementById("hello")
hello.innerHTML = `Olá ${userName}`

const button = document.getElementById("camp")

button.addEventListener('click', () => {
    location.href = "../Campanhas ativas/CampanhasAtivas.html"
})