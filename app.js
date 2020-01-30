document.body.onload = addElement(10, 20, 30, 40, 50, 60);

function addElement (x1, x2, x3, x4, x5, x6) { 
    var total = x1 + x2 + x3 + x4 + x5 + x6;
    var values = [x1, x2, x3, x4, x5, x6];
    var offset = 0;

    for (i = 0; i < 6; i++) {
        var value = (values[i] / total) * 100;
        var overHalf = 0;
        var index = i;

        if (value > 50) {
            overHalf = 1;
        }

        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule('#slice' +  index.toString() + '{--offset: ' + offset.toString() + '; --value: ' +
        value.toString() + '; --over50: ' + overHalf.toString() + '0;}');
        offset += value;
    }
}

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