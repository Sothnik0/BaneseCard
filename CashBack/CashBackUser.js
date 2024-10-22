const userName = localStorage.getItem("userName")

const hello = document.getElementById("hello")
hello.innerHTML = `Olá ${userName}`