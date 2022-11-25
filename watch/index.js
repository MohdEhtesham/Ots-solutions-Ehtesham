function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
    var strTime = hours + ':' + minutes + ' ' + ampm;
   
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('time').innerHTML =  hours+ ":" + minutes + ":" + seconds + ampm;
    setTimeout(startTime, 1000);
    
  }
  
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
  
  
 