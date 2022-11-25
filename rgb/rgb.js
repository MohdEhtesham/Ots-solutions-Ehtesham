function colorpicker() {
  
    var firstcolor = document.getElementById("red");
    var secondcolor = document.getElementById("green");
    var thirdcolor = document.getElementById("blue");
    let redcolor = document.getElementById('Red');
    let greencolor = document.getElementById('Green');
    let bluecolor = document.getElementById('Blue');

    redcolor.innerHTML = firstcolor.value;
    var redvalue = firstcolor.value

    greencolor.innerHTML = secondcolor.value;
    var greenvalue = secondcolor.value

    bluecolor.innerHTML = thirdcolor.value;
    var bluevalue = thirdcolor.value

  var mixvalue =   "rgb("+ redvalue +","+ greenvalue +","+ bluevalue +")";

console.log(mixvalue)
document.getElementById("block").style.background =mixvalue;
}