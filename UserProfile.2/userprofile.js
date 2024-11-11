const img1 = document.getElementsByClassName("campimg")[0];
const img2 = document.getElementsByClassName("campimg")[1];
const img3 = document.getElementsByClassName("campimg")[2];


const userName = localStorage.getItem('userName')
const mny = document.getElementById("mny")
rngMny = Math.floor(Math.random() * 5000);

mny.innerHTML = `R$${rngMny},0 `

localStorage.setItem('rngMny', rngMny)

const hello = document.getElementById("hello")
hello.innerHTML = `Olá ${userName}`

document.addEventListener('DOMContentLoaded', () => {
    const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];
    const rootContainer = document.getElementById('root');

    userCampaigns.forEach(camp => {
        const campaignDiv = document.createElement('div');
        campaignDiv.className = 'card';

        const img = document.createElement('img');
        img.src = camp.ImgSrc;
        img.classList.add('man1'); // Ensure it has consistent styling

        const title = document.createElement('p');
        title.classList.add('tip');
        title.textContent = camp.Nome;

        const description = document.createElement('p');
        description.classList.add('second-text');
        description.textContent = camp.Desc;

        campaignDiv.appendChild(img);
        campaignDiv.appendChild(title);
        campaignDiv.appendChild(description);

        // Append each campaign card to the root section
        rootContainer.appendChild(campaignDiv);
    });
});


