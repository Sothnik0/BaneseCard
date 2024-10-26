let CampDecorList = [];

function CampDecor(campName, campDate, img) {
    this.campName = campName;
    this.campDate = campDate;
    this.img = img;
}

const form = document.getElementById("form");
const campName = document.getElementById("campName");
const campDesc = document.getElementById("campDesc");
const campDate = document.getElementById("campDate");
const img = document.getElementById("img");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (campName.value === '' || campDate.value === '') {
        Exception();
    } else {
        const file = img.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const campDecor = new CampDecor(campName.value, campDate.value, event.target.result);
                CampDecorList.push(campDecor);
                console.log(CampDecorList[0]);

                localStorage.setItem("campName", campName.value);
                localStorage.setItem("campDesc", campDesc.value);
                localStorage.setItem("img", event.target.result);

                location.href = "../campanhafuncionario/campanhafunc.html";
            };

            reader.readAsDataURL(file);
        } else {
            alert('Por favor, escolha uma imagem.');
        }
    }
});

function Exception() {
    const error = document.getElementById("error");
    error.innerHTML = "Valores inválidos, tente novamente";
    error.style.color = "crimson";
}
