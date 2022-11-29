
var itemlist=document.querySelectorAll('li')
for(let i=0;i<itemlist.length;i++){
    
itemlist[i].addEventListener('click',()=>{

    if(itemlist[i].style.backgroundColor=='white'){
        itemlist[i].style.backgroundColor='green';
    }
    else{
        itemlist[i].style.backgroundColor='white'

    }
})                   
}