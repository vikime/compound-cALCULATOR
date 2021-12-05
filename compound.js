/**
 * Interest Calculator
 */

var counter = 0;

function updateCounter(val){
    if(val == "simple"){
        counter = 0;
        console.log(counter);
    }
    else if (val == "compound") {
        counter = 1;
        console.log(counter);
    }
}

function simpleInterest(p, r, t){
    console.log("Calculating SI");
    return  "Simple Interest: " + ((p*r*t)/100);
}

function compoundIterest(p, r, t){
    console.log("Calculating CI");
    let amount = p*Math.pow((1 +r/100),t);
    return "Compound Interest: " + (amount-p).toFixed(4);
}

function calcInterest() {
    let p = document.getElementById('First').value;
    let t = document.getElementById('Second').value;
    let r = document.getElementById('Third').value;
    if (p =="" || t=="" || r=="") {
        document.getElementById('num').innerHTML = "Please enter values!"   
    } else {
        if(counter == 0) {
            console.log("Starting SI Calc");
            document.getElementById('num').innerHTML = simpleInterest(p, r, t);
        }
        else if(counter == 1) {
            console.log("Starting CI Calc");
            document.getElementById('num').innerHTML = compoundIterest(p, r, t);
        }
    }
}