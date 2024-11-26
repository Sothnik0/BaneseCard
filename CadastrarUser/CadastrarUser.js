// Seleção dos elementos DOM
const login = document.getElementById("login");
const password = document.getElementById("psw");
const error = document.getElementById("error");
const terms = document.getElementById("terms-container");
const quit = document.getElementById("quit");
const cancelButton = document.getElementById("getButton");
const cancelConfirmation = document.getElementById("miniCard");
const confirmCancel = document.getElementById("okIGetOut");
const closeCancel = document.getElementById("gettingOut");

// Função para aceitar os termos e aderir à campanha
window.accept = () => {
    const registeredCampaign = JSON.parse(localStorage.getItem('selectedCampaign'));

    if (registeredCampaign) {
        const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];
        userCampaigns.push(registeredCampaign);
        localStorage.setItem('userCampaigns', JSON.stringify(userCampaigns));

        const userInfo = { login: login?.value || "Usuário Anônimo" };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        location.href = "../UserProfile.2/userprofile.html";
    } else {
        error.innerHTML = 'Nenhuma campanha foi selecionada. Volte e escolha uma campanha antes de aderir.';
        error.style.color = 'crimson';
    }
};

// Função para exibir o modal de cancelamento
window.cancelCampaign = () => {
    cancelConfirmation.style.visibility = 'visible';
};

// Evento para confirmar o cancelamento
confirmCancel.addEventListener('click', () => {
    location.href = "../UserProfile.2/userprofile.html";
});

// Evento para fechar o modal de cancelamento
closeCancel.addEventListener('click', () => {
    cancelConfirmation.style.visibility = 'hidden';
});

// Função para abrir os termos de condições
window.openTab = () => {
    terms.style.visibility = 'visible';
};

// Evento para fechar os termos de condições
quit.addEventListener('click', () => {
    terms.style.visibility = 'hidden';
});

// Evento para cancelar a campanha
cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.cancelCampaign();
});
