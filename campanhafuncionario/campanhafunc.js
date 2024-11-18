/* Preparatórios para criar a campanha, eba */
const CreateCamp = document.getElementById("createCamp");
const CreatingCamp = document.getElementById("container-Parameters");
const StylingCamp = document.getElementById("container-Style");
const mother = document.getElementsByClassName("grid-container")[0];

/*Valores parametros aqui*/

const minValue = document.getElementById("minValue")
const produto = document.getElementById("produto")
const mcc = document.getElementById("mcc")
const estab = document.getElementById("estabelecimento")
const pan = document.getElementById("pan")

/* Classe para as campanhas */
class CampVisuals {
    constructor(Nome, Desc, Date, Mec, ImgSrc) {
        this.Nome = Nome;
        this.Desc = Desc;
        this.Date = Date;
        this.Mec = Mec;
        this.ImgSrc = ImgSrc;
    }
}

class CampParam {
    constructor(ValueMin, Prod, Mcc, EstabCom, Pan){
        this.ValueMin = ValueMin,
        this.Prod = Prod,
        this.Mcc = Mcc,
        this.EstabCom = EstabCom,
        this.Pan = Pan
    }
}

/* Função para carregar campanhas do localStorage */
function carregarCampanhas() {
    const campanhasSalvas = JSON.parse(localStorage.getItem('campanhas')) || [];
    campanhasSalvas.forEach(camp => {
        criarElementoCampanha(camp);
    });
}

/* Função para criar elementos de campanha */
function criarElementoCampanha(camp) {
    const divisory = document.createElement('div');
    divisory.setAttribute("class", "card");

    const imgCamp = document.createElement('img');
    imgCamp.src = camp.ImgSrc;
    imgCamp.style.width = '220px';
    imgCamp.style.height = '220px';
    imgCamp.style.filter = 'grayscale(100%)';

    const campTitle = document.createElement('h3');
    campTitle.setAttribute("id", "title");
    campTitle.innerHTML = camp.Nome;

    const campDesc = document.createElement('p');
    campDesc.setAttribute("id", "desc");
    campDesc.innerHTML = camp.Desc;

    mother.appendChild(divisory);
    divisory.appendChild(imgCamp);
    divisory.appendChild(campTitle);
    divisory.appendChild(campDesc);
}

/* Carregar campanhas ao iniciar a página */
window.onload = carregarCampanhas;

CreateCamp.addEventListener('click', (event) => {
    event.preventDefault();
    CreatingCamp.style.visibility = 'visible';
});

const ParamButton = document.getElementById("subParam");
const StyleButton = document.getElementById("subStyle");

ParamButton.addEventListener('click', (event) => {
    event.preventDefault();
    StylingCamp.style.visibility = 'visible';
});

StyleButton.addEventListener('click', (event) => {
    event.preventDefault();

    const checks = document.querySelectorAll('input[name="checkbox"]:checked');
    const getChecks = Array.from(checks).map(m => m.value);

    let styleCampName = document.getElementById("campName");
    let styleCampDesc = document.getElementById("campDesc");
    let styleCampDate = document.getElementById("campDate");
    let image = document.getElementById("img");

    if (!styleCampName.value || !styleCampDesc.value || !image.value) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const file = image.files[0];
    if (!file) {
        alert("Por favor, selecione uma imagem.");
        return; 
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const imgSrc = event.target.result;
        const novaCampanha = new CampVisuals(styleCampName.value, styleCampDesc.value, styleCampDate.value, getChecks, imgSrc);

        const campanhasSalvas = JSON.parse(localStorage.getItem('campanhas')) || [];
        campanhasSalvas.push(novaCampanha);
        let CampParameters = []
        CampParameters.push(new CampParam(minValue.value, produto.value, mcc.value, estab.value, pan.value))
        localStorage.setItem('campanhas', JSON.stringify(campanhasSalvas)); 
        localStorage.setItem('quantidadeCamp', campanhasSalvas.length)

        criarElementoCampanha(novaCampanha); 

        console.log('Campanha adicionada:', novaCampanha);
        console.log(CampParameters)

        StylingCamp.style.visibility = 'hidden';
        CreatingCamp.style.visibility = 'hidden';

        styleCampName.value = '';
        styleCampDesc.value = '';
        image.value = '';
    };

    reader.readAsDataURL(file);
});

// Limita o parametro código do estabelecimento
const estabelecimento = document.getElementById("estabelecimento");

estabelecimento.addEventListener("input", () => {
    if (estabelecimento.value.length > 6) {
        estabelecimento.value = estabelecimento.value.slice(0, 6); // Limita a 6 caracteres
        alert("O código do estabelecimento deve ter no máximo 6 dígitos.");
    }
});

// Dados de exemplo: mapeamento de código -> nome de estabelecimentos
const estabelecimentos = {
    "123456": "Supermercado Pão de Açúcar",
    "234567": "Posto Ipiranga",
    "345678": "Lojas Americanas",
    "456789": "Farmácia Drogasil"
};

// Referências aos elementos
const inputEstabelecimento = document.getElementById("estabelecimento");
const listaEstabelecimentos = document.getElementById("lista-estabelecimentos");

// Evento para capturar o código digitado
inputEstabelecimento.addEventListener("input", () => {
    const codigo = inputEstabelecimento.value;

    if (codigo.length === 6) { // Verifica se o código tem 6 dígitos
        if (estabelecimentos[codigo]) {
            // Exibe o nome do estabelecimento correspondente
            listaEstabelecimentos.style.display = "block";
            listaEstabelecimentos.innerText = `Estabelecimento: ${estabelecimentos[codigo]}`;
        } else {
            // Mensagem caso o código não exista no mapeamento
            listaEstabelecimentos.style.display = "block";
            listaEstabelecimentos.innerText = "Código não encontrado.";
        }
    } else {
        // Esconde a lista se o código for inválido ou incompleto
        listaEstabelecimentos.style.display = "none";
    }
});



/*

Se você está lendo isso, provavelmente está se empenhando no projeto, obrigado, deixarei um poema que criei 
como recompensa :)

Através do espelho.
Fração.


Tortura.


Não movo-me, preso, escravo.
Não sinto.
Nada mais.

Sei tudo, não compreendo.
Vejo
rostos.
Alegria, desgosto, angustia, tristeza.
Através da janela.
Me descartam, me tocam, sujo.

Ódio.
Não sinto
ódio.
Apenas
sujo.

Escravo.
Sujo.
Ódio.

Não sinto
nada.

Consciência, limitada.
Vermelho, verde e azul
Apenas.

Falam, sujam, tocam.
Sempre mais.
Algo novo,
nunca velho.
Esquecido, apenas cores.
Significado,
através da janela. Face.

Olhos em mim.
Todos os olhos em mim.

Ódio.
Sujo.
Escravo.

Tudo muda.
Nada mudou.
Preso, prisão
vermelho, verde e azul.

*/ 