funcList = []

function Func(login, psw){
    this.login = login,
    this.psw = psw
}

const form = document.getElementById("form")
const loginFunc = document.getElementById("logonFunc")
const pswFunc = document.getElementById("pswFunc")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (loginFunc.value.length == 0 || pswFunc.length == 0){
        Exception()
    } else if (loginFunc.value.length >= 26 || pswFunc.length >= 26){
        Exception()
    } else {
        funcList.push(new Func(loginFunc.value, pswFunc.value))
        localStorage.setItem("funcName", loginFunc.value);
        localStorage.setItem("funcPassword", pswFunc.value)
        location.href = "../VisaoAdm/visaoadm.html"
    }
})

function Exception(){
        error.innerHTML = "Login ou usuário inválidos, tente novamente"
        error.style.color = "crimson"
}
