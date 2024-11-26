// Carregar campanhas ao iniciar a página
function carregarCampanhas() {
    const campanhasSalvas = JSON.parse(localStorage.getItem('campanhas')) || [];
    campanhasSalvas.forEach(camp => criarElementoCampanha(camp));
}

// Criar os elementos visuais das campanhas
function criarElementoCampanha(camp) {
    const divisory = document.createElement('div');
    divisory.className = "card";

    const imgCamp = document.createElement('img');
    imgCamp.src = camp.ImgSrc || '../images/default.png';
    imgCamp.style.width = '220px';
    imgCamp.style.height = '220px';
    imgCamp.style.filter = 'grayscale(100%)';

    const campTitle = document.createElement('h3');
    campTitle.textContent = camp.Nome;

    const campDesc = document.createElement('p');
    campDesc.textContent = camp.Desc;

    const campLink = document.createElement('a');
    campLink.href = '../CadastrarUser/CadastrarUser.html';
    campLink.textContent = "Cadastrar";
    campLink.className = "camp-link";
    campLink.addEventListener('click', () => {
        localStorage.setItem('selectedCampaign', JSON.stringify(camp));
    });

    const campCad = document.createElement('button');
    campCad.className = 'cadastre-se';
    campCad.appendChild(campLink);

    divisory.appendChild(imgCamp);
    divisory.appendChild(campTitle);
    divisory.appendChild(campDesc);
    divisory.appendChild(campCad);

    const gridContainer = document.querySelector('.grid-container');
    gridContainer.appendChild(divisory);
}

// Inicializar as campanhas ao carregar a página
window.onload = carregarCampanhas;
