
const button = document.getElementById("todobutton")

button.addEventListener('click',()=>{
 var val = document.getElementById("textfield").value
 document.getElementById("textfield").value=""
 if(val.length!=0){
    var listitem =document.createElement('li')
    listitem.innerText=val
    listitem.id =val
    listitem.addEventListener('click',()=>{
        if(listitem.style.backgroundColor=='green'){
            listitem.style.backgroundColor=='white';
        }
        else{
            listitem.style.backgroundColor=='green'

        }
    })
   
    var list= document.getElementById("todo-list")
    list.appendChild(listitem)
 }
 
 
})


