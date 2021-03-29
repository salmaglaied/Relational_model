
var plus=document.getElementById('boutton-plus');
var moins=document.getElementById('boutton-moins');
var c1=document.getElementById('input1');
var r=1;;
var r1;
var r2;
plus.addEventListener('click', function(){ r1=c1.value++ ; r2=r1+r;});

moins.addEventListener('click',function(){if (c1.value>0){c1.value-- ;}});


let test=document.getElementsByClassName('article')
console.log(test)
for(let j=0;j<test.length;j++){
    test[j].addEventListener('click',function(e){
        console.log(e.target)
    })
}

var p2=document.getElementById('b2-plus');
var m2=document.getElementById('b2-moins');
var c2=document.getElementById('input2');
p2.addEventListener('click', function(){ c2.value++ ;});

m2.addEventListener('click',function(){if (c2.value>0){c2.value-- ;} ;});

var p3=document.getElementById('b3-plus');
var m3=document.getElementById('b3-moins');
var c3=document.getElementById('input3');
p3.addEventListener('click', function(){ c3.value++ ;});

m3.addEventListener('click',function(){if (c3.value>0){c3.value-- ;} ;});

var like1=document.getElementById('heart1');
like1.addEventListener('click', function(){ like1.classList.toggle("like");});
    
var like2=document.getElementById('heart2');
like2.addEventListener('click', function(){ like2.classList.toggle("like");});


var like3=document.getElementById('heart3');
like3.addEventListener('click', function(){ like3.classList.toggle("like");});

var delete1=document.getElementById('del1');
var element = document.getElementById("ar1");
delete1.addEventListener('click', function(){element.remove();});

var delete1=document.getElementById('del1');
var element = document.getElementById("ar1");
delete1.addEventListener('click', function(){element.remove();});

var delete2=document.getElementById('del2');
var element2 = document.getElementById("ar2");
delete2.addEventListener('click', function(){element2.remove();});

var delete3=document.getElementById('del3');
var element3 = document.getElementById("ar3");
delete3.addEventListener('click', function(){element3.remove();});

var t=document.getElementById('total-btn');
var prix1=document.getElementById('prix1').innerHTML;

var v=document.getElementById("tot").value;
var q=parseFloat(prix1);
var d=parseInt(c1.value);



t.addEventListener('click', function(){if (d=1){v=(q*r).toString();}});

t.addEventListener('click', function(){if (r2!==1){v=(q*r2).toString();} });




