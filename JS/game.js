
let N =Math.floor(Math.random()*20+1);

let guess = 1;

document.getElementById("Btn").onclick = function(){

    let number = document.getElementById("inputN").value;

    if(N==number){
        document.getElementById('Label').innerHTML = "Rightnumber"
    }
    else if(N>number){
        document.getElementById('Label').innerHTML = "small number"
    }
    else if(N<number){
        document.getElementById('Label').innerHTML = "big number"
    }

}