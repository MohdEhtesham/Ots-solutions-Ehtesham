

var calculateButton = document.querySelector(".calculate");

let previousbmi = [];
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    var weightInput = parseFloat(document.getElementById("weight").value);
    var heightInput = parseFloat(document.getElementById("height").value);
    console.log(heightInput);
    height = heightInput;
    weight = weightInput;
    BMI = weight/(height*height); 
    previousbmi.push(BMI)
    var result = document.querySelector(".result").innerHTML=(BMI);
    const pbmis = document.querySelector(".Previousvalue").innerHTML =(previousbmi);
});
