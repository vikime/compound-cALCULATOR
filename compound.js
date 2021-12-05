function Compound_interest(){
    var  p,t,r,si;
    p = document.getElementById('First').value;
    t = document.getElementById('Second').value;
    r = document.getElementById('Third').value;
    si = ((p*r*t)/100);
   
    document.getElementById('num').innerHTML = "Simple Interest : " + si;
    
}

function Compound_interest(){
    var p,t,r,ci;
    p = document.getElementById('First').value;
    t = document.getElementById('Second').value;
    r = document.getElementById('Third').value;
    amount = p*Math.pow((1 +r/100),t );
    ci = (amount-p).toFixed(4);

    document.getElementById('num2').innerHTML = "Compound Interest : " + ci;

}