
function toCelsius(temp){
    return (temp - 32) * (5/9);
}
function toFahranite(fvalue){
    return (fvalue * 9/5) + 32;
}

document.getElementById("Btn").onclick = function(){

    let tem;

if(document.getElementById("CR").checked){

    tem = document.getElementById("inputTemp").value;
    tem = Number(tem); 
    tem = toCelsius(tem);
    document.getElementById("Label").innerHTML = tem +" C";

}   
else if(document.getElementById("CF").checked){

    tem = document.getElementById("inputTemp").value;
    tem = Number(tem);
    tem = toFahranite(tem);
    document.getElementById("Label").innerHTML = tem + " F"

}


}