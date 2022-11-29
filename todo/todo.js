let row=0;
var arr =[]
const button = document.getElementById("todobutton")

button.addEventListener('click',()=>{
 var val = document.getElementById("textfield").value
 document.getElementById("textfield").value=""
 
 if(val.length!=0){
    arr.push(val)
    localStorage.setItem('tasks',JSON.stringify(arr))
    console.log(arr)
    var listitem =document.createElement('li')
   
    listitem.addEventListener('click',()=>{
        if(listitem.style.backgroundColor=='green'){
            listitem.style.backgroundColor='white';
        }
        else{
            listitem.style.backgroundColor='green'

        }
        
    })
    var textnode=document.createTextNode(val);
    listitem.appendChild(textnode)
    listitem.remove()
    listitem.setAttribute("id","contentP"+row);
    document.querySelector('ul').appendChild(listitem);
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
    document.querySelector("ul").innerHTML=" "
})





window.onload = function () {
    let row =0;
    let lists =JSON.parse(localStorage.getItem("tasks"))
    console.log(lists)
    arr =[...lists]
    for( let i=0;i<arr.length;i++){
       let ul = document.querySelector('ul')
       let li = document.createElement('li')
       let xrm =document.createElement('button')
       xrm.innerHTML="X"

       li.innerText=arr[i]
       ul.appendChild(li)
       li.appendChild(xrm)
       xrm.addEventListener('click',()=>{
        li.remove()
       })    
       
    }  
    
}


function deleterow(ID)
{
    document.getElementById('contentP'+ID).remove();
}

