const login = document.getElementById("login");
const password = document.getElementById("psw");
const error = document.getElementById("error");
const terms = document.getElementById("terms-container");
const quit = document.getElementById("quit");
const cancelButton = document.getElementById("getButton");
const cancelConfirmation = document.getElementById("miniCard");
const confirmCancel = document.getElementById("okIGetOut");
const closeCancel = document.getElementById("gettingOut");

accept = () => {
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

cancelCampaign = () => {
    cancelConfirmation.style.visibility = 'visible';
};

confirmCancel.addEventListener('click', () => {
    location.href = "../UserProfile.2/userprofile.html";
});

closeCancel.addEventListener('click', () => {
    cancelConfirmation.style.visibility = 'hidden';
});

openTab = () => {
    terms.style.visibility = 'visible';
};

quit.addEventListener('click', () => {
    terms.style.visibility = 'hidden';
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    cancelCampaign();
});
