// Seleção dos elementos DOM
const login = document.getElementById("login"); // Campo de login (caso exista no HTML)
const error = document.getElementById("error"); // Elemento para exibir erros
const terms = document.getElementById("terms-container"); // Container dos termos
const quit = document.getElementById("quit"); // Botão de fechar os termos
const cancelButton = document.getElementById("getButton"); // Botão de cancelar ação
const cancelConfirmation = document.getElementById("miniCard"); // Modal de confirmação de cancelamento
const confirmCancel = document.getElementById("okIGetOut"); // Botão para confirmar o cancelamento
const closeCancel = document.getElementById("gettingOut"); // Botão para fechar o modal de cancelamento

// Função para aceitar os termos e aderir à campanha
window.accept = () => {
    try {
        // Recuperar campanha selecionada
        const registeredCampaign = JSON.parse(localStorage.getItem('selectedCampaign'));

        if (registeredCampaign) {
            // Recuperar campanhas do usuário ou inicializar array vazio
            const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];
            userCampaigns.push(registeredCampaign);
            localStorage.setItem('userCampaigns', JSON.stringify(userCampaigns));

            // Salvar informações do usuário no localStorage
            const userInfo = { login: login?.value || "Usuário Anônimo" };
            localStorage.setItem("userInfo", JSON.stringify(userInfo));

            // Redirecionar para o perfil do usuário
            location.href = "/BaneseCard/UserProfile.2/userprofile.html";
        } else {
            // Exibir erro caso nenhuma campanha esteja selecionada
            if (error) {
                error.innerHTML = 'Nenhuma campanha foi selecionada. Volte e escolha uma campanha antes de aderir.';
                error.style.color = 'crimson';
            }
        }
    } catch (e) {
        console.error("Erro ao aceitar a campanha:", e);
    }
};

// Função para fechar a aba (redirecionar)
window.closeTab = () => {
    location.href = "/BaneseCard/UserProfile.2/userprofile.html";
};

// Função para exibir o modal de cancelamento
window.cancelCampaign = () => {
    if (cancelConfirmation) {
        cancelConfirmation.style.visibility = 'visible';
    }
};

// Evento para confirmar o cancelamento
if (confirmCancel) {
    confirmCancel.addEventListener('click', () => {
        location.href = "/BaneseCard/UserProfile.2/userprofile.html";
    });
}

// Evento para fechar o modal de cancelamento
if (closeCancel) {
    closeCancel.addEventListener('click', () => {
        if (cancelConfirmation) {
            cancelConfirmation.style.visibility = 'hidden';
        }
    });
}

// Função para abrir os termos de condições
window.openTab = () => {
    if (terms) {
        terms.style.visibility = 'visible';
    }
};

// Evento para fechar os termos de condições
if (quit) {
    quit.addEventListener('click', () => {
        if (terms) {
            terms.style.visibility = 'hidden';
        }
    });
}

// Evento para cancelar a campanha ao clicar no botão "Cancelar"
if (cancelButton) {
    cancelButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.cancelCampaign();
    });
}
