const userName = localStorage.getItem("userName")

const hello = document.getElementById("hello")
hello.innerHTML = `Olá ${userName}`

const adcname = document.getElementById("adcname")

adcname.addEventListener('click', () => {
    location.href = "../Campanhas ativas/CampanhasAtivas.html"
})