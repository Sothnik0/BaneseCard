const CreateCamp = document.getElementById("createCamp");
const CreatingCamp = document.getElementById("container-Parameters");
const StylingCamp = document.getElementById("container-Style");
const mother = document.getElementsByClassName("grid-container")[0];
const minValue = document.getElementById("minValue");
const produto = document.getElementById("produto");
const mcc = document.getElementById("mcc");
const estab = document.getElementById("estabelecimento");
const pan = document.getElementById("pan");

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
    constructor(ValueMin, Prod, Mcc, EstabCom, Pan) {
        this.ValueMin = ValueMin;
        this.Prod = Prod;
        this.Mcc = Mcc;
        this.EstabCom = EstabCom;
        this.Pan = Pan;
    }
}

function atualizarContadorCampanhas() {
    const campanhas = JSON.parse(localStorage.getItem('campanhas')) || [];
    const quantidadeCamp = campanhas.length;
    localStorage.setItem('quantidadeCamp', quantidadeCamp);
}

function carregarCampanhas() {
    const campanhasSalvas = JSON.parse(localStorage.getItem('campanhas')) || [];
    campanhasSalvas.forEach((camp, index) => {
        criarElementoCampanha(camp, index);
    });
}

function criarElementoCampanha(camp, index) {
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

    const editButton = document.createElement('button');
    editButton.innerText = "Editar";
    editButton.setAttribute("class", "options");
    editButton.addEventListener('click', () => editarCampanha(index));

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Deletar";
    deleteButton.setAttribute("class", "options");
    deleteButton.addEventListener('click', () => deletarCampanha(index));

    mother.appendChild(divisory);
    divisory.appendChild(imgCamp);
    divisory.appendChild(campTitle);
    divisory.appendChild(campDesc);
    divisory.appendChild(editButton);
    divisory.appendChild(deleteButton);
}

function editarCampanha(index) {
    const campanhas = JSON.parse(localStorage.getItem('campanhas'));
    const camp = campanhas[index];
    document.getElementById("campName").value = camp.Nome;
    document.getElementById("campDesc").value = camp.Desc;
    document.getElementById("campDate").value = camp.Date;
    CreatingCamp.style.visibility = 'visible';
    StylingCamp.style.visibility = 'visible';

    document.getElementById("subStyle").addEventListener('click', () => {
        const updatedCamp = new CampVisuals(
            document.getElementById("campName").value,
            document.getElementById("campDesc").value,
            document.getElementById("campDate").value,
            camp.Mec,
            camp.ImgSrc
        );
        campanhas[index] = updatedCamp;
        localStorage.setItem('campanhas', JSON.stringify(campanhas));
        atualizarContadorCampanhas();
        location.reload();
    });
}

function deletarCampanha(index) {
    const campanhas = JSON.parse(localStorage.getItem('campanhas'));
    campanhas.splice(index, 1);
    localStorage.setItem('campanhas', JSON.stringify(campanhas));
    atualizarContadorCampanhas();
    location.reload();
}

window.onload = carregarCampanhas;

CreateCamp.addEventListener('click', (event) => {
    event.preventDefault();
    CreatingCamp.style.visibility = 'visible';
});

const ParamButton = document.getElementById("subParam");
const StyleButton = document.getElementById("subStyle");

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
        localStorage.setItem('campanhas', JSON.stringify(campanhasSalvas));
        atualizarContadorCampanhas();

        criarElementoCampanha(novaCampanha, campanhasSalvas.length - 1);

        StylingCamp.style.visibility = 'hidden';
        CreatingCamp.style.visibility = 'hidden';

        styleCampName.value = '';
        styleCampDesc.value = '';
        image.value = '';
    };

    reader.readAsDataURL(file);
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