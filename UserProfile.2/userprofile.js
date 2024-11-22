const userName = localStorage.getItem('userName');
const mny = document.getElementById("mny");
const rngMny = Math.floor(Math.random() * 5000);

mny.innerHTML = `R$${rngMny},0 `;

localStorage.setItem('rngMny', rngMny);

const hello = document.getElementById("hello");
hello.innerHTML = `Olá, ${userName}`;

// Carrega campanhas associadas ao usuário
document.addEventListener('DOMContentLoaded', () => {
    const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];
    const rootContainer = document.getElementById('root');

    userCampaigns.forEach(camp => {
        const campaignDiv = document.createElement('div');
        campaignDiv.className = 'card';

        const img = document.createElement('img');
        img.src = camp.ImgSrc || '../images/default.png'; // Imagem padrão se não houver
        img.classList.add('man1'); // Garantir estilo consistente

        const title = document.createElement('p');
        title.classList.add('tip');
        title.textContent = camp.Nome;

        const description = document.createElement('p');
        description.classList.add('second-text');
        description.textContent = camp.Desc;

        campaignDiv.appendChild(img);
        campaignDiv.appendChild(title);
        campaignDiv.appendChild(description);

        // Adiciona cada card de campanha à seção de root
        rootContainer.appendChild(campaignDiv);
    });
});
