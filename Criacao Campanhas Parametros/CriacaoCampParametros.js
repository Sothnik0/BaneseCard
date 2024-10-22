CampParamList = []

function CampParam(minValue, date, produto, mcc, estab, pan){
    this.minValue = minValue
    this.date = date
    this.produto = produto
    this.mcc = mcc
    this.estab = estab
    this.pan = pan
}

const form = document.getElementById("form")
const minValue = document.getElementById("minValue")
const date = document.getElementById("date")
const produto = document.getElementById("produto")
const mcc = document.getElementById("mcc")
const estab = document.getElementById("estabelecimento")
const pan = document.getElementById("pan")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    if(minValue.value == 0 || date.value == 0 || produto.value == "" || mcc.value == 0 || estab.value == "" || pan.value == 0){
        Exception()
    } else if (minValue <= 0 || minValue >= 99999){
        Exception()
    } else if (mcc.value > 10000) {
        Exception()
    } else if (date.value == ''){
        Exception()
    }else if (estab.value.length >= 30){
        Exception()
    } else if(pan.value > 623){
        Exception()
    } else {
        CampParamList.push(new CampParam(minValue.value, date.value, produto.value, mcc.value, estab.value, pan.value))
        location.href = "../CriacaoCampanhas/criacamp.html"
    }
})

document.getElementById('produto').addEventListener('change', function() {
    console.log("Produto selecionado: " + this.value);
});

function Exception(){
    error.innerHTML = "Dado(s) inválido(s) detectado(s)"
    error.style.color = "crimson"
}
