// console.log("hello1");

// Promise.resolve().then((p1) => console.log("promise1"));

// console.log("helllo 2");

// setTimeout(function y()  {
//     console.log("timeout 1!")

// }, 500);

// setTimeout(function x() {
//     Promise.resolve().then((p1) => console.log("promise 2"))
//     setTimeout(() => {
//         Promise.resolve().then((p1) => console.log("promise 3"))

//     },0);
//     console.log("hello 3");

// Promise.resolve().then((p1) => console.log("promise4"));

// console.log("helllo 4");

// }, 500);

// console.log("bye!")






///17 november


// function getcountryData (c){
//     const getcountryData = fetch(`https://restcountries.com/v2/name/${c}`)
//     .then(data=>data.json())
//     .then(result=>console.log(result[0].borders));


// }
// getcountryData("china");

// const fetchedData = (c) =>{
//     const fetchedData =fetch(`https://restcountries.com/v2/name/${c}`)
//     .then(data => data.json())
//     .then(result => console.log(result))

// }
// fetchedData("america")

// Assingment of the shakshi singh 

const dataofcountry = (c) => {
    const fetchedData = fetch(`https://restcountries.com/v2/name/${c}`)
   .then(result =>{
    if(!result.ok){
        throw new Error('something went wrong');
    }
    return result.json();
   })
   .then(result =>console.log(result));
}

dataofcountry("india")

