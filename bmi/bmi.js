

var calculateButton = document.querySelector(".calculate");

let previousbmi = [];

var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    var weightInput = parseFloat(document.getElementById("weight").value);
    document.getElementById("weight").value =" "
    var heightInput = parseFloat(document.getElementById("height").value);
    document.getElementById("height").value =" "
    console.log(heightInput);
    height = heightInput;
    weight = weightInput;
    BMI = weight/(height*height); 
    // BMI=Math.floor(BMI)
    BMI=BMI.toFixed(1)
    previousbmi.push(BMI)
  
    var result = document.querySelector(".result").innerHTML=(BMI);

    const pbmis = document.querySelector(".Previousvalue").innerHTML =(previousbmi);
        console.log(previousbmi.lenght)
  
    if(previousbmi.length==10){
      
        previousbmi.splice(0,1)


    }
       

    
   

    var statement = document.querySelector(".result-statement");
    if(BMI < 18.5){
        statement.innerHTML = "Your BMI is underweight";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerHTML = "Your BMI  is  normal ";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerHTML = "Your BMI is overweight";
    }else{
        statement.innerHTML = "Your BMI is obese range";
    }
});
