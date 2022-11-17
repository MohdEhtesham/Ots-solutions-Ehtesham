let promise = new Promise(function(resolve, reject) {
    resolve("I am done");
});


let promise2 = new Promise(function(resolve, reject) {
    reject(new Error('Something is not right!'));
});




let promise3 = new Promise(function(resolve, reject) {
    resolve("I am surely going to get resolved!");
  
    reject(new Error('Will this be ignored?')); // ignored
    resolve("Ignored?"); // ignored
  });