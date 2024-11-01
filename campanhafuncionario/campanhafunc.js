const CreateCamp = document.getElementById("createCamp");
const CreatingCamp = document.getElementById("container-Parameters");
const StylingCamp = document.getElementById("container-Style");
const mother = document.getElementsByClassName("grid-container")[0];

let quantCamp = []

const ParamButton = document.getElementById("subParam");
const StyleButton = document.getElementById("subStyle");

let styleCampName = document.getElementById("campName");
let styleCampDesc = document.getElementById("campDesc");
let image = document.getElementById("img");


CreateCamp.addEventListener('click', (event) => {
    event.preventDefault();
    CreatingCamp.style.visibility = 'visible';
});

ParamButton.addEventListener('click', (event) => {
    event.preventDefault();
    StylingCamp.style.visibility = 'visible';
});

StyleButton.addEventListener('click', (event) => {
    event.preventDefault();

    quantCamp.push(styleCampName.value)
    localStorage.setItem('quantCamp', quantCamp.length)
    console.log(localStorage.getItem('quantCamp'))


    if (!styleCampName.value || !styleCampDesc.value || !image.value) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const divisory = document.createElement('div');
    divisory.setAttribute("class", "card");

    const imgCamp = document.createElement('img'); 
    imgCamp.src = image.value; 

    const campTitle = document.createElement('h3');
    campTitle.setAttribute("id", "title");
    campTitle.innerHTML = styleCampName.value;

    const campDesc = document.createElement('p');
    campDesc.setAttribute("id", "desc");
    campDesc.innerHTML = styleCampDesc.value;

    const campCad = document.createElement('button');
    campCad.setAttribute('class', 'cadastre-se');
    campCad.innerHTML = "Cadastrar";

    mother.appendChild(divisory);
    divisory.appendChild(imgCamp);
    divisory.appendChild(campTitle);
    divisory.appendChild(campDesc);
    divisory.appendChild(campCad);

    StylingCamp.style.visibility = 'hidden';
    CreatingCamp.style.visibility = 'hidden';
    
    styleCampName.value = '';
    styleCampDesc.value = '';
    image.value = '';
});
