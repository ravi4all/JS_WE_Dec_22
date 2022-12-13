let fnum;
let snum;
let result;

// Event Binding
// load event will let HTML load first
window.addEventListener("load", function() {
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    result = document.querySelector("#box_3");
    // document.querySelector("#add").addEventListener("click", calc);
    // document.querySelector("#sub").addEventListener("click", calc);
    // document.querySelector("#div").addEventListener("click", calc);
    // document.querySelector("#mul").addEventListener("click", calc);

    var btnArr = document.querySelectorAll("button");
    for(var i = 0; i < btnArr.length; i++) {
        btnArr[i].addEventListener("click", calc);
    }
});

function calc() {
    // console.log(this.value);
    var opr = this.value;
    if(opr == "+") {
        result.value = parseInt(fnum.value) + parseInt(snum.value);
    }
    else if(opr == "-") {
        result.value = parseInt(fnum.value) - parseInt(snum.value);
    }
    else if(opr == "/") {
        result.value = parseInt(fnum.value) / parseInt(snum.value); 
    }
    else {
        result.value = parseInt(fnum.value) * parseInt(snum.value);
    }
    // result.value = parseInt(fnum.value) + parseInt(snum.value);
}

// function add() {
//     result.value = parseInt(fnum.value) + parseInt(snum.value);
// }

// function sub() {
//     result.value = parseInt(fnum.value) - parseInt(snum.value);
// }

// function div() {
//     result.value = parseInt(fnum.value) / parseInt(snum.value);
// }

// function mul() {
//     result.value = parseInt(fnum.value) * parseInt(snum.value);
// }