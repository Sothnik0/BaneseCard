// Seleção de elementos do DOM
const form = document.getElementById("form");
const login = document.getElementById("login");
const password = document.getElementById("psw");
const error = document.getElementById("error");

const button = document.getElementById("getButton");
const getOut = document.getElementById("miniCard");
const gettingOut = document.getElementById("gettingOut");
const okIGetOut = document.getElementById("okIGetOut");

// Classe para representar o usuário
class GetInfo {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
}

// Recupera usuários do localStorage ou cria um array vazio
let userInfo;
try {
    userInfo = JSON.parse(localStorage.getItem("users")) || [];
} catch (error) {
    console.error("Erro ao carregar usuários do localStorage:", error);
    userInfo = [];
}

// Verifica se os elementos existem antes de adicionar eventos
if (button) {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (getOut) getOut.style.visibility = 'visible';
    });
}

if (gettingOut) {
    gettingOut.addEventListener('click', (event) => {
        event.preventDefault();
        if (getOut) getOut.style.visibility = 'hidden';
    });
}

if (okIGetOut) {
    okIGetOut.addEventListener('click', () => {
        location.href = "/UserProfile.2/userprofile.html"; // Caminho absoluto
    });
}

// Função de cadastro de usuários e associação de campanhas
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validação de campos de entrada
        if (!login || !password || login.value.trim() === '' || password.value.trim() === '') {
            if (error) {
                error.innerHTML = 'Por favor, preencha todos os campos corretamente.';
                error.style.color = 'crimson';
            }
            console.warn("Erro: Campos de login ou senha estão vazios.");
            return;
        }

        // Cria e salva o novo usuário
        try {
            const newUser = new GetInfo(login.value, password.value);
            userInfo.push(newUser);
            localStorage.setItem("users", JSON.stringify(userInfo));
            console.log("Usuário cadastrado com sucesso:", newUser);

            // Salva campanhas associadas (se houver)
            const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];
            const registeredCampaign = JSON.parse(localStorage.getItem('selectedCampaign'));
            if (registeredCampaign) {
                userCampaigns.push(registeredCampaign);
                localStorage.setItem('userCampaigns', JSON.stringify(userCampaigns));
                console.log("Campanhas associadas salvas:", registeredCampaign);
            }

            // Salva o nome do usuário para exibição na página de perfil
            localStorage.setItem("userName", login.value);

            // Redireciona para o perfil do usuário
            location.href = "/UserProfile.2/userprofile.html"; // Caminho absoluto
        } catch (err) {
            console.error("Erro ao processar o cadastro:", err);
            if (error) {
                error.innerHTML = 'Ocorreu um erro. Tente novamente.';
                error.style.color = 'crimson';
            }
        }
    });
}
