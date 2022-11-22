
var addButton = document.querySelector(".todo-button");

let previoustodo = [];

addButton.addEventListener("click", ()=>{
    var Input = document.querySelector("todo-input").value;
    previoustodo.push(Input)

    const pbmis = document.querySelector(".todo-list").innerHTML =(previoustodo);
       
  
});
