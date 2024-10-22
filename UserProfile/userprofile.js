const img1 = document.getElementsByClassName("campimg")[0];
const img2 = document.getElementsByClassName("campimg")[1];
const img3 = document.getElementsByClassName("campimg")[2];

const userName = localStorage.getItem('userName')
const mny = document.getElementById("mny")
rngMny = Math.floor(Math.random() * 5000);

mny.innerHTML = `R$${rngMny},0 `

localStorage.setItem('rngMny', rngMny)

const hello = document.getElementById("hello")
hello.innerHTML = `Olá ${userName}`