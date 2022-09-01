function Add(){
    var result=Number(document.getElementById("fn").value)+Number(document.getElementById("sn").value);
    document.getElementById("b1").value=result;
}
function Subtract(){
    var result=Number(document.getElementById("fn").value)-Number(document.getElementById("sn").value);
    document.getElementById("b2").value=result;
}

function Multiply(){
    var result=Number(document.getElementById("fn").value)*Number(document.getElementById("sn").value);
    document.getElementById("b3").value=result;
}

function Divide(){
    var result=Number(document.getElementById("fn").value)/Number(document.getElementById("sn").value);
    document.getElementById("b4").value=result;

}