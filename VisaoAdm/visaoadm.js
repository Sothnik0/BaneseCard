counter = document.getElementById("counter");
button = document.getElementById("gotoCreateCamp")

i = localStorage.getItem("quantCamp")

if (i == null){
    counter.innerHTML = 0
} else {
    counter.innerHTML = i
}



button.addEventListener('click', () => {
    result = (i < 10) ? `0${i}` : `${i}`;
    counter.innerHTML = result;

})