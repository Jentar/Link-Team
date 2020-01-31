function showBottom(e) {
    console.log(e);

    const el = document.querySelector(e);
    console.log(el);
    if (el.classList.contains("input_keys")) {
        el.classList.remove("input_keys");

    } else {
        el.classList.add("input_keys");
    }
}
// input nrs
const first = document.querySelector("#first");
const homeinput = document.querySelector("#homeinput");
const otherinput = document.querySelector("#otherinput");
const shoppinginput = document.querySelector("#shoppinginput");
const carinput = document.querySelector("#carinput");
const travelinput = document.querySelector("#travelinput");
// buttons
const btntulu = document.querySelector("#tulu");
const homebtnkulu = document.querySelector("#homekulu");
const otherbtnkulu = document.querySelector("#otherkulu");
const shoppingbtnkulu = document.querySelector("#shoppingkulu");
const carbtnkulu = document.querySelector("#carkulu");
const travelbtnkulu = document.querySelector("#travelkulu");
// totals
const answer = document.querySelector("#totalanswer");
const home = document.querySelector("#hometotal");
const other = document.querySelector("#othertotal");
const shopping = document.querySelector("#shoppingtotal");
const car = document.querySelector("#cartotal");
const travel = document.querySelector("#traveltotal");
// vars
var currentvalue = 0
var hometotalvar = 0
var othertotalvar = 0
var shoppingtotalvar = 0
var cartotalvar = 0
var traveltotalvar = 0
// init values
answer.innerText = currentvalue
home.innerText = hometotalvar
other.innerText = othertotalvar
shopping.innerText = shoppingtotalvar
car.innerText = cartotalvar
travel.innerText = traveltotalvar





function tulu() {
    currentvalue = currentvalue + parseInt(first.value)
    answer.innerText = currentvalue;
}
function homekulu() {
    currentvalue = currentvalue - parseInt(homeinput.value)
    answer.innerText = currentvalue;
    hometotalvar = hometotalvar + parseInt(homeinput.value)
    home.innerText = hometotalvar;
}
function otherkulu() {
    currentvalue = currentvalue - parseInt(otherinput.value)
    answer.innerText = currentvalue;
    othertotalvar = othertotalvar + parseInt(otherinput.value)
    other.innerText = othertotalvar;
}
function shoppingkulu() {
    currentvalue = currentvalue - parseInt(shoppinginput.value)
    answer.innerText = currentvalue;
    shoppingtotalvar = shoppingtotalvar + parseInt(shoppinginput.value)
    shopping.innerText = shoppingtotalvar;
}
function carkulu() {
    currentvalue = currentvalue - parseInt(carinput.value)
    answer.innerText = currentvalue;
    cartotalvar = cartotalvar + parseInt(carinput.value)
    car.innerText = cartotalvar;
}
function travelkulu() {
    currentvalue = currentvalue - parseInt(travelinput.value)
    answer.innerText = currentvalue;
    traveltotalvar = traveltotalvar + parseInt(travelinput.value)
    travel.innerText = traveltotalvar;
}

// 3. Add Event listener to button
btntulu.addEventListener("click", tulu);
homebtnkulu.addEventListener("click", homekulu);
otherbtnkulu.addEventListener("click", otherkulu);
shoppingbtnkulu.addEventListener("click", shoppingkulu);
carbtnkulu.addEventListener("click", carkulu)
travelbtnkulu.addEventListener("click", travelkulu);

