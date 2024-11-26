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

    if (userCampaigns.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "Você ainda não aderiu a nenhuma campanha.";
        emptyMessage.style.color = 'black'
        rootContainer.appendChild(emptyMessage);
        return;
    }

    userCampaigns.forEach((camp, index) => {
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

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖'; // Ícone agradável para exclusão
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => confirmarExclusao(index));

        campaignDiv.appendChild(deleteButton);
        campaignDiv.appendChild(img);
        campaignDiv.appendChild(title);
        campaignDiv.appendChild(description);

        rootContainer.appendChild(campaignDiv);
    });
});

// Função para confirmar exclusão
function confirmarExclusao(index) {
    const confirmar = confirm("Você tem certeza que deseja excluir esta campanha?");
    if (confirmar) {
        excluirCampanha(index);
    }
}

// Função para excluir campanha
function excluirCampanha(index) {
    const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];
    userCampaigns.splice(index, 1);
    localStorage.setItem('userCampaigns', JSON.stringify(userCampaigns));
    atualizarCampanhas();
}

// Atualiza a lista de campanhas no DOM
function atualizarCampanhas() {
    const rootContainer = document.getElementById('root');
    rootContainer.innerHTML = ''; // Limpa o conteúdo atual
    const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];

    if (userCampaigns.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "Você ainda não aderiu a nenhuma campanha.";
        rootContainer.appendChild(emptyMessage);
    } else {
        userCampaigns.forEach((camp, index) => {
            const campaignDiv = document.createElement('div');
            campaignDiv.className = 'card';

            const img = document.createElement('img');
            img.src = camp.ImgSrc || '../images/default.png';
            img.classList.add('man1');

            const title = document.createElement('p');
            title.classList.add('tip');
            title.textContent = camp.Nome;

            const description = document.createElement('p');
            description.classList.add('second-text');
            description.textContent = camp.Desc;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✖'; // Ícone agradável para exclusão
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', () => confirmarExclusao(index));

            campaignDiv.appendChild(deleteButton);
            campaignDiv.appendChild(img);
            campaignDiv.appendChild(title);
            campaignDiv.appendChild(description);

            rootContainer.appendChild(campaignDiv);
        });
    }
}
