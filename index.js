let currentsum = '';
document.querySelector('#b1').onclick=function(){
    currentsum=currentsum+'1';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b2').onclick=function(){
    currentsum=currentsum+'2';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b3').onclick=function(){
    currentsum=currentsum+'3';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b4').onclick=function(){
    currentsum=currentsum+'4';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b5').onclick=function(){
    currentsum=currentsum+'5';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b6').onclick=function(){
    currentsum=currentsum+'6';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b7').onclick=function(){
    currentsum=currentsum+'7';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b8').onclick=function(){
    currentsum=currentsum+'8';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b9').onclick=function(){
    currentsum=currentsum+'9';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#b0').onclick=function(){
    currentsum=currentsum+'0';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#Add').onclick=function(){
    currentsum=currentsum+'+';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#Sub').onclick=function(){
    currentsum=currentsum+'-';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#Divide').onclick=function(){
    currentsum=currentsum+'/';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#Mul').onclick=function(){
    currentsum=currentsum+'*';
    document.querySelector('#display').value=currentsum;
};
document.querySelector('#Dot').onclick=function(){
    currentsum=currentsum+'.';
    document.querySelector('#display').value=currentsum;
}
   
document.querySelector('#Left').onclick=function(){
        currentsum=currentsum+'(';
        document.querySelector('#display').value=currentsum;
    };
   
 document.querySelector('#Right').onclick=function(){
        currentsum=currentsum+')';
        document.querySelector('#display').value=currentsum;
    };
    document.querySelector('#AC').onclick = function() {
       // document.getElementById('AC').style.backgroundColor = 'red';  // Corrected property name
        currentsum = '';
        document.querySelector('#display').value = currentsum;
    };


    document.querySelector('#Eq').onclick=function(){
        let resultt = eval(currentsum);
        currentsum=resultt;
        document.querySelector('#display').value=currentsum;
    };
    var aaa= document.getElementById("AC");
    aaa.style.backgroundColor="rgb(248, 64, 64)";
    var aaa= document.getElementById("Add");
    aaa.style.backgroundColor="rgb(236, 229, 108)";
    var aaa= document.getElementById("Sub");
    aaa.style.backgroundColor="rgb(236, 229, 108)";
    var aaa= document.getElementById("Mul");
    aaa.style.backgroundColor="rgb(236, 229, 108)";
    var aaa= document.getElementById("Divide");
    aaa.style.backgroundColor="rgb(236, 229, 108)";
    var aaa= document.getElementById("Eq");
    aaa.style.backgroundColor="rgb(141, 216, 132)";
    var aaa= document.getElementById("Dot");
    aaa.style.backgroundColor="rgb(236, 229, 108)";

    
    
    
    
    document.querySelector('#display').value=currentsum;


