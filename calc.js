function add() {
    var fnum = document.getElementById("box_1");
    var snum = document.getElementById("box_2");
    var result = parseInt(fnum.value) + parseInt(snum.value);
    // console.log("Result is",result);
    // document.getElementById("res").innerHTML = result;
    document.getElementById("res").innerText = result;
}