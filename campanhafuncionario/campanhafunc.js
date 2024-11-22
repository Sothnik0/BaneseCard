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

const estabelecimentos = {
    "123456": "Supermercado Pão de Açúcar",
    "234567": "Posto Ipiranga",
    "345678": "Lojas Americanas",
    "456789": "Farmácia Drogasil",
};

function carregarCampanhas() {
    const campanhasSalvas = JSON.parse(localStorage.getItem("campanhas")) || [];
    campanhasSalvas.forEach((camp) => criarElementoCampanha(camp));
}

function criarElementoCampanha(camp) {
    const divisory = document.createElement("div");
    divisory.setAttribute("class", "card");

    const imgCamp = document.createElement("img");
    imgCamp.src = camp.ImgSrc;
    imgCamp.style.width = "220px";
    imgCamp.style.height = "220px";
    imgCamp.style.filter = "grayscale(100%)";

    const campTitle = document.createElement("h3");
    campTitle.setAttribute("id", "title");
    campTitle.innerHTML = camp.Nome;

    const campDesc = document.createElement("p");
    campDesc.setAttribute("id", "desc");
    campDesc.innerHTML = camp.Desc;

    // Botão de editar
    const editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.classList.add("optionsCard");
    editButton.onclick = () => editarCampanha(camp);

    // Botão de excluir
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.classList.add("optionsCard");
    deleteButton.onclick = () => excluirCampanha(camp);

    divisory.appendChild(imgCamp);
    divisory.appendChild(campTitle);
    divisory.appendChild(campDesc);
    divisory.appendChild(editButton);
    divisory.appendChild(deleteButton);
    mother.appendChild(divisory);
}

function editarCampanha(camp) {
    const campanhasSalvas = JSON.parse(localStorage.getItem("campanhas")) || [];
    const index = campanhasSalvas.findIndex(c => c.Nome === camp.Nome);
    if (index >= 0) {
        const novoNome = prompt("Digite o novo nome da campanha:", camp.Nome);
        const novaDesc = prompt("Digite a nova descrição da campanha:", camp.Desc);
        if (novoNome && novaDesc) {
            campanhasSalvas[index].Nome = novoNome;
            campanhasSalvas[index].Desc = novaDesc;
            localStorage.setItem("campanhas", JSON.stringify(campanhasSalvas));
            location.reload(); // Atualizar página
        }
    }
}

function excluirCampanha(camp) {
    let campanhasSalvas = JSON.parse(localStorage.getItem("campanhas")) || [];
    campanhasSalvas = campanhasSalvas.filter(c => c.Nome !== camp.Nome);
    localStorage.setItem("campanhas", JSON.stringify(campanhasSalvas));
    localStorage.setItem("quantidadeCamp", campanhasSalvas.length);
    location.reload(); // Atualizar página
}

// Abrir o card de criação de campanha
CreateCamp.addEventListener("click", (event) => {
    event.preventDefault();
    CreatingCamp.style.visibility = "visible";
    StylingCamp.style.visibility = "hidden"; // Oculta o próximo card
    listaEstabelecimentos.style.visibility = "hidden"; // Oculta mensagens antigas
});

// Botão para prosseguir para o próximo card
const ParamButton = document.getElementById("subParam");
ParamButton.addEventListener("click", (event) => {
    event.preventDefault();
    CreatingCamp.style.visibility = "hidden"; // Oculta o card atual
    StylingCamp.style.visibility = "visible"; // Mostra o próximo card
});

// Botão para salvar a campanha no último card
const StyleButton = document.getElementById("subStyle");
StyleButton.addEventListener("click", (event) => {
    event.preventDefault();

    const checks = document.querySelectorAll('input[name="checkbox"]:checked');
    const getChecks = checks.length ? Array.from(checks).map((m) => m.value) : [];

    const styleCampName = document.getElementById("campName");
    const styleCampDesc = document.getElementById("campDesc");
    const styleCampDate = document.getElementById("campDate");
    const image = document.getElementById("img");

    if (!styleCampName.value || !styleCampDesc.value || !image.files[0]) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const file = image.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        const imgSrc = event.target.result;
        const novaCampanha = new CampVisuals(
            styleCampName.value,
            styleCampDesc.value,
            styleCampDate.value,
            getChecks,
            imgSrc
        );

        const campanhasSalvas = JSON.parse(localStorage.getItem("campanhas")) || [];
        campanhasSalvas.push(novaCampanha);
        localStorage.setItem("campanhas", JSON.stringify(campanhasSalvas));
        localStorage.setItem("quantidadeCamp", campanhasSalvas.length);

        criarElementoCampanha(novaCampanha);

        StylingCamp.style.visibility = "hidden"; // Oculta o último card
        CreatingCamp.style.visibility = "hidden";

        styleCampName.value = "";
        styleCampDesc.value = "";
        image.value = "";
    };

    reader.readAsDataURL(file);

    // Oculta a mensagem do estabelecimento ao confirmar
    listaEstabelecimentos.style.visibility = "hidden";
});

// Função para exibir o nome do estabelecimento baseado no código
const inputEstabelecimento = document.getElementById("estabelecimento");
const listaEstabelecimentos = document.getElementById("lista-estabelecimentos");

inputEstabelecimento.addEventListener("input", () => {
    const codigo = inputEstabelecimento.value;

    if (codigo.length === 6) {
        if (estabelecimentos[codigo]) {
            listaEstabelecimentos.style.visibility = "visible";
            listaEstabelecimentos.innerText = `Estabelecimento: ${estabelecimentos[codigo]}`;
        } else {
            listaEstabelecimentos.style.visibility = "visible";
            listaEstabelecimentos.innerText = "Código não encontrado.";
        }
    } else {
        listaEstabelecimentos.style.visibility = "hidden";
    }
});

// Sempre exibe a mensagem do estabelecimento ao começar uma nova campanha
CreateCamp.addEventListener("click", () => {
    listaEstabelecimentos.style.visibility = "visible";
    listaEstabelecimentos.innerText = "";
});

window.onload = () => {
    carregarCampanhas();
};
