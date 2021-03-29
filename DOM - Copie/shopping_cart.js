
let btnsPlus=document.getElementsByClassName( "plus-btn")
for (var i=0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(e){
        console.log( e.target.nextElementSibling)
    })
}