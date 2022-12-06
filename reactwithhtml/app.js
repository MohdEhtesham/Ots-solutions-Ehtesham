// const root = ReactDOM. createRoot (document.getElementById("root") ) ;
// const goodMorning= React.createElement("h1", null,"Good Morning");
// const goodEvening = React.createElement ("hl",null, "Good Evening");
// let currentHour = new Date().getHours();
// root.render( currentHour > 12? goodEvening : goodMorning);

// console.log("hello bhai")


//Akshay Khurana

window.onload = function () {
    let person = prompt("Please enter your age",);

    if (person != null) {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        const adult = React.createElement("h1", null, "you are adult");
        const notadult = React.createElement("h1", null, "you are not adult");

        root.render(person > 18 ? adult : notadult);

    }
}