var backdrop=document.querySelector('.backdrop');
var selectplanbutton=document.querySelectorAll('.buttons');
console.log(selectplanbutton);
var modal=document.querySelector('.modal');
var negativebutton=document.querySelector('.modal_action_negative');
var detail=document.querySelector('.ordering-details');
var orderbutton=document.querySelectorAll('.details');
var togglebutton=document.querySelectorAll('.toggle-button');
var mobileview=document.querySelector('.mobile');
for(var i=0; i<selectplanbutton.length;i++){
    selectplanbutton[i].addEventListener('click', function(){
        backdrop.classList.add('open');
        modal.classList.add('open');
        

    });
}
for(var j=0; j<orderbutton.length;j++){
    orderbutton[j].addEventListener('click' , function(){
        backdrop.classList.add('openx');
        detail.classList.add('openx');
    });
}

backdrop.addEventListener('click' , function(){
    backdrop.classList.remove('open');
    backdrop.classList.remove('openx');
    backdrop.classList.remove('openh');
    if(modal){
        modal.classList.remove('open'); 
    }
    if(detail){
        detail.classList.remove('openx');  
    }
    if(mobileview){
        mobileview.classList.remove('openh');
    }
});
if(negativebutton){
negativebutton.addEventListener('click' , function(){
    backdrop.classList.remove('open');
    
        modal.classList.remove('open'); 
    
});
}
for(var k=0; k<togglebutton.length;k++){
togglebutton[k].addEventListener('click' , function(){
    mobileview.classList.add('openh');
    backdrop.classList.add('openh');
}); 
}