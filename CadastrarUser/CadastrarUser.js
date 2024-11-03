form = document.getElementById("form")
login = document.getElementById("login")
password = document.getElementById("psw")
error = document.getElementById("error")

class GetInfo{
    constructor(login, password){
        this.login = login
        this.password = password
    }
}

userInfo = []

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


