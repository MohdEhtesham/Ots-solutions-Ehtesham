let row=0;
const button = document.getElementById("todobutton")

button.addEventListener('click',()=>{
 var val = document.getElementById("textfield").value
 document.getElementById("textfield").value=""
 if(val.length!=0){
    var listitem =document.createElement('li')
    // listitem.innerText=val
    // listitem.id =val
    
    listitem.addEventListener('click',()=>{
        if(listitem.style.backgroundColor=='green'){
            listitem.style.backgroundColor='white';
        }
        else{
            listitem.style.backgroundColor='green'

        }
        
    })
    
 
    // var list= document.getElementById("todo-list")
    // list.appendChild(listitem)
    var textnode=document.createTextNode(val);
    listitem.appendChild(textnode)
    listitem.setAttribute("id","contentP"+row);
    document.getElementById('todo-list').appendChild(listitem);
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "X");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("onClick", "deleterow("+ row +");");

    listitem.appendChild(removeTask);
        row++;
   
 }
 
 
 
})

const buttton2 =document.getElementById("reset-button")

buttton2.addEventListener('click',()=>{
    document.getElementById("todo-list").innerHTML=" "
})


function deleterow(ID)
{
    document.getElementById('contentP'+ID).remove();
}
localStorage.setItem("firstName", "Mohd");
localStorage.setItem("LastName", "Ehtesham");
document.getElementById("demo").innerHTML = localStorage.getItem("firstName");
document.getElementById("demo").innerHTML = localStorage.getItem("LastName");