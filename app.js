// input nrs
const first = document.querySelector("#first");
const homeinput = document.querySelector("#homeinput");
const uncatinput = document.querySelector("#uncatinput");
const shoppinginput = document.querySelector("#shoppinginput");
const autoinput = document.querySelector("autoinput");
const kidsinput = document.querySelector("#kidsinput");
// buttons
const btntulu = document.querySelector("#tulu");
const homebtnkulu = document.querySelector("#homekulu");
const uncatbtnkulu = document.querySelector("#uncatkulu");
const shoppingbtnkulu = document.querySelector("#shoppingkulu");
const billsbtnkulu = document.querySelector("#billskulu");
const autobtnkulu = document.querySelector("#autokulu");
const kidsbtnkulu = document.querySelector("#kidskulu");
// ?
const answer = document.querySelector("#totalanswer");
var currentvalue = 0



// 2. Create calc function
answer.innerText = currentvalue
function tulu() {
    currentvalue = currentvalue + parseInt(first.value)
    answer.innerText = currentvalue;
}
function homekulu() {
    currentvalue = currentvalue - parseInt(homeinput.value)
    answer.innerText = currentvalue;
}
function uncatkulu() {
    currentvalue = currentvalue - parseInt(uncatinput.value)
    answer.innerText = currentvalue;
}
function shoppingkulu() {
    currentvalue = currentvalue - parseInt(shoppinginput.value)
    answer.innerText = currentvalue;
}
function billskulu() {
    currentvalue = currentvalue - parseInt(billsinput.value)
    answer.innerText = currentvalue;
}
function autokulu() {
    currentvalue = currentvalue - parseInt(autoinput.value)
    answer.innerText = currentvalue;
}
function kidskulu() {
    currentvalue = currentvalue - parseInt(kidsinput.value)
    answer.innerText = currentvalue;
}

// 3. Add Event listener to button
btntulu.addEventListener("click", tulu);
homebtnkulu.addEventListener("click", homekulu);
uncatbtnkulu.addEventListener("click", uncatkulu);
shoppingbtnkulu.addEventListener("click", shoppingkulu);
billsbtnkulu.addEventListener("click", billskulu);
kidsbtnkulu.addEventListener("click", kidskulu);