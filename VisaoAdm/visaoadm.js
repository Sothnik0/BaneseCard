counter = document.getElementById("counter");
button = document.getElementById("gotoCreateCamp")

let i = 6;

button.addEventListener('click', () => {
    i++
    result = (i < 10) ? `0${i}` : `${i}`;
    counter.innerHTML = result;

})