function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var realYears = years - 1
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(realYears);
    document.getElementById("result").innerHTML = "If you deposit: " + principal + "<br/>" +
        "at an interest rate of: " + rate + "<br/>" +
        "You will receive an amount of: " + interest + "<br/> " +
        "in the year: " + year + "</mark>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
     
