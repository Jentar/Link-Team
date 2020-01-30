// 1. Get input values
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const btntulu = document.querySelector("#tulu");
const homebtnkulu = document.querySelector("#kulu");
const answer = document.querySelector("#totalanswer");
const tululist = document.querySelector("#tulu_list");
var currentvalue = 0

// 2. Create calc function
answer.innerText = currentvalue
function tulu() {
    // 4. Display output to user
    currentvalue = currentvalue + parseInt(first.value)
    answer.innerText = currentvalue;
}
function kulu() {
    // 4. Display output to user
    currentvalue = currentvalue - parseInt(first.value)
    answer.innerText = currentvalue;
}
// 3. Add Event listener to button
btntulu.addEventListener("click", tulu);
btnkulu.addEventListener("click", kulu);