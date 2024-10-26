class Func {
    constructor(login, password, type){
        this.login = login,
        this.password = password,
        this.type = type
    }
}

const funcList = [
    { login: "admin", password: "admin123", type: "adm" },
    { login: "func1", password: "func123", type: "funcionario" },
    { login: "func2", password: "func456", type: "funcionario" }
];

const form = document.getElementById("form");
const loginFunc = document.getElementById("logonFunc");
const pswFunc = document.getElementById("pswFunc");
const error = document.getElementById("errorHandle");

function authenticateFunc(login, password) {
    return funcList.find(func => func.login === login && func.password === password);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (loginFunc.value.length === 0 || pswFunc.value.length === 0) {
        showError("Login ou senha inválidos, tente novamente");
        return;
    }

    const authenticatedFunc = authenticateFunc(loginFunc.value, pswFunc.value);

    if (authenticatedFunc) {
        localStorage.setItem("funcName", authenticatedFunc.login);
        localStorage.setItem("funcType", authenticatedFunc.type);
        location.href = "../VisaoAdm/visaoadm.html";
    } else {
        showError("Login ou senha incorretos, tente novamente");
    }
});

function showError(message) {
    error.innerHTML = message;
    error.style.color = "crimson";
    error.style.marginLeft = "30px"
    setTimeout(() => error.innerHTML = "", 3000); 
}
