form = document.getElementById("form")
login = document.getElementById("login")
password = document.getElementById("psw")
error = document.getElementById("error")

button = document.getElementById("getButton")
getOut = document.getElementById("miniCard")
gettingOut = document.getElementById("gettingOut")
okIGetOut = document.getElementById("okIGetOut")

class GetInfo{
    constructor(login, password){
        this.login = login
        this.password = password
    }
}

userInfo = []

button.addEventListener('click', (event) => {
    event.preventDefault()

    getOut.style.visibility = 'visible'
})

gettingOut.addEventListener('click', (event) => {
    event.preventDefault()

    getOut.style.visibility = 'hidden'
})

okIGetOut.addEventListener('click', () => {
    location.href = "../UserProfile.2/userprofile.html"
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (login.value && password.value != ''){
        userInfo.push(new GetInfo(login.value, password.value))
        location.href = '../UserProfile/userprofile.html'
    } else {
        error.innerHTML = 'Algo deu errado, tente novamente'
        error.style.color = 'crimson'
    }
})


