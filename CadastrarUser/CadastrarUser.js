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
    if (login.value && password.value != '') {
        userInfo.push(new GetInfo(login.value, password.value));

        // Get the selected campaign and save it to the user's profile in localStorage
        const registeredCampaign = JSON.parse(localStorage.getItem('selectedCampaign'));
        const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];

        if (registeredCampaign) {
            userCampaigns.push(registeredCampaign);
            localStorage.setItem('userCampaigns', JSON.stringify(userCampaigns));
        }

        // Redirect to user profile page
        location.href = "../UserProfile.2/userprofile.html";
    } else {
        error.innerHTML = 'Algo deu errado, tente novamente';
        error.style.color = 'crimson';
    }
});
