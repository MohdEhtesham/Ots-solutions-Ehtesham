let row=0;

const button = document.getElementById("todobutton")

button.addEventListener('click',()=>{
 var val = document.getElementById("textfield").value
 
 
 if(val.length!=0){
    var arr =[]
    localStorage.setItem('tasks',JSON.stringify(arr))
    arr.push(val)
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
    listitem.setAttribute("id","contentP"+row);
    document.querySelector('ul').appendChild(listitem);
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "X");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("onClick", "deleterow("+ row +");");

    listitem.appendChild(removeTask);
        row++;
   
        document.getElementById("textfield").value=""
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




window.onload = function () {
    let row=0;
    let lists =JSON.parse(localStorage.getItem("tasks"))
    console.log(lists)
    arr =[...lists]
    for( let i=0;i<lists.length;i++){
       let ul = document.querySelector('ul')
       let li = document.createElement('li')
       li.innerText=lists[i]
       ul.appendChild(li)
       ul.setAttribute("id","contentP"+row);
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "X");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("onClick", "deleterow("+ row +");");

    ul.appendChild(removeTask);
        row++;
    
    }

  
}

 
