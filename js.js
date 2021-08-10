
    var options = document.getElementById('tip');
    
    options.addEventListener('click', e => {
        
        var input1 = document.getElementById('input1').value;
        
        var input2 = document.getElementById('input2').value;
        

    if(e.target.value == "5"){
        
        var total = (5 * input1 / input2) / 100;    
        var totalb = (input1 * 5) / 100;
        var Total = parseFloat(input1) + parseFloat(totalb); 

        document.getElementById("tipamount").innerHTML = '$' + total.toFixed(2);
        document.getElementById("totalperson").innerHTML = '$' + Total.toFixed(2);
        document.querySelector('')
    }
    else if(e.target.value == "10"){
        
        var total = (10 * input1 / input2) / 100;    
        var totalb = (input1 * 10) / 100;
        var Total = parseFloat(input1) + parseFloat(totalb); 
        document.getElementById("tipamount").innerHTML = '$' + total.toFixed(2);
        document.getElementById("totalperson").innerHTML = '$' + Total.toFixed(2);

     
    }
    else if(e.target.value == "15"){
        
        var total = (15 * input1 / input2) / 100;    
        var totalb = (input1 * 15) / 100;
        var Total = parseFloat(input1) + parseFloat(totalb); 

        document.getElementById("tipamount").innerHTML = '$' + total.toFixed(2);
        document.getElementById("totalperson").innerHTML = '$' + Total.toFixed(2);

    
    }

    else if(e.target.value == "25"){
        
        var total = (25 * input1 / input2) / 100;    
        var totalb = (input1 * 25) / 100;
        var Total = parseFloat(input1) + parseFloat(totalb); 

        document.getElementById("tipamount").innerHTML = '$' + total.toFixed(2);
        document.getElementById("totalperson").innerHTML = '$' + Total.toFixed(2);
    }

    else if(e.target.value == "50"){
        
        var total = (50 * input1 / input2) / 100;    
        var totalb = (input1 * 50) / 100;
        var Total = parseFloat(input1) + parseFloat(totalb); 

    
        document.getElementById("tipamount").innerHTML = '$' + total.toFixed(2);
        document.getElementById("totalperson").innerHTML = '$' + Total.toFixed(2);
    }
})

var a = document.getElementById('input1');

var b = document.getElementById('input2');

var input3 = document.querySelector(".custom")

a.addEventListener('click', () => {

    var input1 = document.getElementById('input1').value;
        
    var input2 = document.getElementById('input2').value;

    var input3 = document.querySelector(".custom").value;
        
        var total = (input3 * input1 / input2) / 100;    
        var totalb = (input1 * input3) / 100;
        var Total = parseFloat(input1) + parseFloat(totalb); 

        document.getElementById("tipamount").innerHTML = '$' + total.toFixed(2);
    document.getElementById("totalperson").innerHTML = '$' + Total.toFixed(2);
});

b.addEventListener('click', () => {

    var input1 = document.getElementById('input1').value;
        
    var input2 = document.getElementById('input2').value;

    var input3 = document.querySelector(".custom").value;
        
        var total = (input3 * input1 / input2) / 100;    
        var totalb = (input1 * input3) / 100;
        var Total = parseFloat(input1) + parseFloat(totalb); 

        document.getElementById("tipamount").innerHTML = '$' + total.toFixed(2);
    document.getElementById("totalperson").innerHTML = '$' + Total.toFixed(2);
});

input3.addEventListener('click', () => {

    var input1 = document.getElementById('input1').value;
        
    var input2 = document.getElementById('input2').value;

    var input3 = document.querySelector(".custom").value;
        
        var total = (input3 * input1 / input2) / 100;    
        var totalb = (input1 * input3) / 100;
        var Total = parseFloat(input1) + parseFloat(totalb); 

        document.getElementById("tipamount").innerHTML = '$' + total.toFixed(2);
    document.getElementById("totalperson").innerHTML = '$' + Total.toFixed(2);
});

var resetnumber = document.querySelector('.reset');

resetnumber.addEventListener('click', () => {
document.getElementById('tipamount').innerHTML = "$0.00";
document.getElementById('totalperson').innerHTML = "$0.00";

window.location.reload();
});


