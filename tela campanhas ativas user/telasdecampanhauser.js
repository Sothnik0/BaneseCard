// Função para carregar campanhas do localStorage
function carregarCampanhas() {
    const campanhasSalvas = JSON.parse(localStorage.getItem('campanhas')) || [];
    campanhasSalvas.forEach(camp => {
        criarElementoCampanha(camp);
    });
}

// Função para criar elementos de campanha
function criarElementoCampanha(camp) {
    const divisory = document.createElement('div');
    divisory.setAttribute("class", "card");

    const imgCamp = document.createElement('img');
    imgCamp.src = camp.ImgSrc;
    imgCamp.style.width = '220px';  // Ajuste conforme necessário
    imgCamp.style.height = '220px'; // Ajuste conforme necessário
    imgCamp.style.filter = 'grayscale(100%)';

    const campTitle = document.createElement('h3');
    campTitle.innerHTML = camp.Nome;

    const campDesc = document.createElement('p');
    campDesc.innerHTML = camp.Desc;

    const campLink = document.createElement('a'); // Corrigido para criar um link
    campLink.href = '../CadastrarUser/CadastrarUser.html'; // Usar href em vez de src
    campLink.innerHTML = "Cadastrar"; // Definindo o texto do link

    const campCad = document.createElement('button');
    campCad.setAttribute('class', 'cadastre-se');
    campCad.appendChild(campLink); // O link é adicionado ao botão

    divisory.appendChild(imgCamp);
    divisory.appendChild(campTitle);
    divisory.appendChild(campDesc);
    divisory.appendChild(campCad); // Adicionando o botão ao divisory

    // Adicionar o elemento à grid-container
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.appendChild(divisory);
}

// Carregar campanhas ao iniciar a página
window.onload = carregarCampanhas;
