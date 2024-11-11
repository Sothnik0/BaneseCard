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

const userInfo = [];

button.addEventListener('click', (event) => {
    event.preventDefault();
    getOut.style.visibility = 'visible';
});

gettingOut.addEventListener('click', (event) => {
    event.preventDefault();
    getOut.style.visibility = 'hidden';
});

okIGetOut.addEventListener('click', () => {
    location.href = "../UserProfile.2/userprofile.html";
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.preventDefault();
    if (login.value && password.value !== '') {
        // Retrieve or initialize the userCampaigns array from localStorage
        const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];

        // Get the selected campaign (assuming it’s stored in selectedCampaign)
        const registeredCampaign = JSON.parse(localStorage.getItem('selectedCampaign'));
        if (registeredCampaign) {
            userCampaigns.push(registeredCampaign);
            localStorage.setItem('userCampaigns', JSON.stringify(userCampaigns));
        }

        // Redirect to user profile after saving
        location.href = "../UserProfile.2/userprofile.html";
    } else {
        error.innerHTML = 'Algo deu errado, tente novamente';
        error.style.color = 'crimson';
    }
});


