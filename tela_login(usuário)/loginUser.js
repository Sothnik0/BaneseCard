const form = document.getElementById("logonForm");
const userLogin = document.getElementById("logonInput");
const userPsw = document.getElementById("psswInput");
const error = document.getElementById("errorHandle");
let UserList = []

function User(login, password){
    this.login = login,
    this.password = password
}    

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (userLogin.value.length == 0 || userPsw.value.length == 0){
        Exception()
    } else if (userLogin.value.length >= 26 || userPsw.value.length >= 26){
        Exception()
    } else {
        UserList.push(new User(userLogin.value, userPsw.value))
        localStorage.setItem("userName", userLogin.value);
        localStorage.setItem("userPassword", userPsw.value)
        location.href = "../UserProfile/userprofile.html"
    }
})

function Exception(){
        error.innerHTML = "Login ou usuário inválidos, tente novamente"
        error.style.color = "crimson"
}