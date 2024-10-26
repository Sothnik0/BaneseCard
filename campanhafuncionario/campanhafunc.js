newName = localStorage.getItem("campName")
newDesc = localStorage.getItem("campDesc")
imgValue = localStorage.getItem("img")

const title = document.getElementById("title")
const desc = document.getElementById("desc")
const imgCamp = document.getElementById("imgTest")

title.innerHTML = newName
desc.innerHTML = newDesc
imgCamp.src = imgValue
imgCamp.style.width = "160px"
imgCamp.style.height = "160px"
imgCamp.style.filter = "grayscale(100%)"

