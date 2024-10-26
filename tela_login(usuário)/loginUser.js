const form = document.getElementById("logonForm");
const userLogin = document.getElementById("logonInput");
const userPsw = document.getElementById("psswInput");
const error = document.getElementById("errorHandle");

class User {
    constructor(login, password, type) {
        this.login = login;
        this.password = password;
        this.type = type;
    }
}

const UserList = [
    { login: "admin", password: "admin123", type: "adm" }
];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (userLogin.value.length === 0 || userPsw.value.length === 0) {
        showError("Login e senha não podem estar vazios.");
    } else if (UserList.some(user => user.login === userLogin.value)) {
        showError("Usuário já existe, tente outro.");
    } else {
        UserList.push(new User(userLogin.value, userPsw.value, "cliente"));
        localStorage.setItem("userName", userLogin.value);
        location.href = "../UserProfile/userprofile.html";
    }
});

function showError(message) {
    error.innerHTML = message;
    error.style.color = "crimson";
}
