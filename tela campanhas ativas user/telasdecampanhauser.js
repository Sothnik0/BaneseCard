// Function to load campaigns from localStorage and display them
function carregarCampanhas() {
    const campanhasSalvas = JSON.parse(localStorage.getItem('campanhas')) || [];
    campanhasSalvas.forEach(camp => {
        criarElementoCampanha(camp);
    });
}

// Function to create a campaign element in the grid container
function criarElementoCampanha(camp) {
    const divisory = document.createElement('div');
    divisory.setAttribute("class", "card");

    const imgCamp = document.createElement('img');
    imgCamp.src = camp.ImgSrc;
    imgCamp.style.width = '220px';
    imgCamp.style.height = '220px';
    imgCamp.style.filter = 'grayscale(100%)';

    const campTitle = document.createElement('h3');
    campTitle.innerHTML = camp.Nome;

    const campDesc = document.createElement('p');
    campDesc.innerHTML = camp.Desc;

    const campLink = document.createElement('a');
    campLink.href = '../CadastrarUser/CadastrarUser.html';
    campLink.innerHTML = "Cadastrar";
    campLink.addEventListener('click', () => {
        // Save the selected campaign to localStorage for registration
        localStorage.setItem('selectedCampaign', JSON.stringify(camp));
    });

    const campCad = document.createElement('button');
    campCad.setAttribute('class', 'cadastre-se');
    campCad.appendChild(campLink);

    divisory.appendChild(imgCamp);
    divisory.appendChild(campTitle);
    divisory.appendChild(campDesc);
    divisory.appendChild(campCad);

    const gridContainer = document.querySelector('.grid-container');
    gridContainer.appendChild(divisory);
}

// Load campaigns on page load
window.onload = carregarCampanhas;
