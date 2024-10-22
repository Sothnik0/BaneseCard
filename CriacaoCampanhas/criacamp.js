let CampDecorList = [];

function CampDecor(campName, campDate, img){
    this.campName = campName,
    this.campDate = campDate,
    this.img = img
}

const form = document.getElementById("form")

const campName = document.getElementById("campName")
const campDate = document.getElementById("campDate")
const img = document.getElementById("img")

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (campName.value == '' || campDate.value == ''){
        Exception()
    } else {
        CampDecorList.push(new CampDecor(campName.value, campDate.value, img.value))
        console.log(CampDecorList[0])

        localStorage.setItem("campName", campName.value)
        localStorage.setItem("img", img.value)
        location.href = "../campanhafuncionario/campanhafunc.html"
    }
})

function Exception(){
    error.innerHTML = "Login ou usuário inválidos, tente novamente"
    error.style.color = "crimson"
}