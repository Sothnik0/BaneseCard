const form = document.getElementById("form");
const login = document.getElementById("login");
const password = document.getElementById("psw");
const error = document.getElementById("error");

const button = document.getElementById("getButton");
const getOut = document.getElementById("miniCard");
const gettingOut = document.getElementById("gettingOut");
const okIGetOut = document.getElementById("okIGetOut");

class GetInfo {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
}

// Array para armazenar usuários cadastrados
const userInfo = JSON.parse(localStorage.getItem("users")) || [];

// Exibe o miniCard ao clicar no botão
button.addEventListener('click', (event) => {
    event.preventDefault();
    getOut.style.visibility = 'visible';
});

// Esconde o miniCard ao clicar no botão de sair
gettingOut.addEventListener('click', (event) => {
    event.preventDefault();
    getOut.style.visibility = 'hidden';
});

// Redireciona para o perfil do usuário
okIGetOut.addEventListener('click', () => {
    location.href = "../UserProfile.2/userprofile.html";
});

// Função de cadastro de usuários e associação de campanhas
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Validação dos campos
    if (login.value.trim() !== '' && password.value.trim() !== '') {
        // Cria novo usuário
        const newUser = new GetInfo(login.value, password.value);
        userInfo.push(newUser);

        // Salva os usuários no localStorage
        localStorage.setItem("users", JSON.stringify(userInfo));

        // Salva campanhas associadas (se houver)
        const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];
        const registeredCampaign = JSON.parse(localStorage.getItem('selectedCampaign'));
        if (registeredCampaign) {
            userCampaigns.push(registeredCampaign);
            localStorage.setItem('userCampaigns', JSON.stringify(userCampaigns));
        }

        // Salva o nome do usuário para exibição na página de perfil
        localStorage.setItem("userName", login.value);

        // Redireciona para o perfil do usuário após salvar
        location.href = "../UserProfile.2/userprofile.html";
    } else {
        // Mostra mensagem de erro se os campos estiverem vazios
        error.innerHTML = 'Por favor, preencha todos os campos corretamente.';
        error.style.color = 'crimson';
    }
});
