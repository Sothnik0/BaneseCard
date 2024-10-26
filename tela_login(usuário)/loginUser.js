const form = document.getElementById("logonForm");
const userLogin = document.getElementById("logonInput");
const userPsw = document.getElementById("psswInput");
const error = document.getElementById("errorHandle");

const UserList = [
    { login: "admin", password: "admin123", type: "adm" },
    { login: "cliente1", password: "cliente123", type: "cliente" },
    { login: "cliente2", password: "cliente456", type: "cliente" }
];

function authenticateUser(login, password) {
    return UserList.find(user => user.login === login && user.password === password);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (userLogin.value.length === 0 || userPsw.value.length === 0) {
        showError("Login ou senha inválidos, tente novamente");
        return;
    }
    const authenticatedUser = authenticateUser(userLogin.value, userPsw.value);

    if (authenticatedUser) {
        localStorage.setItem("userName", authenticatedUser.login);
        localStorage.setItem("userType", authenticatedUser.type);

        if (authenticatedUser.type === "adm") {
            showError("Utilize a área de funcionário para fazer login");
        } else {
            location.href = "../UserProfile/userprofile.html";
        }
    } else {
        showError("Login ou senha incorretos, tente novamente");
    }
});

function showError(message) {
    error.innerHTML = message;
    error.style.color = "crimson";
}
