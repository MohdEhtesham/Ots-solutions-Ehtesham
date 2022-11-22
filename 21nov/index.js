// // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en


// // const userDetails = async () => {
// //     try {

// //         const data = await fetch("https://reqres.in/api/users")
// //         const user = await data.json()
// //         if(!data.ok)throw new Error('error is happining')
// //         console.log(user.data)
// //     }
// //     catch {
// //         console.log('something went wrong')
// //     }
// // }
// // userDetails();





// // //Shakshi Ma'am Assignment

// const userdetails = async (lat ,lon) => {
//   if (navigator.geolocation){
//     try {

//         const data = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
//         const user = await data.json()
//         console.log(user.latitude ,user.longitude)
//         // console.log("you are in ",user.Accu ) 
//         console.log("you are in ",user.locality)
//         if(!data.ok)throw new Error('error is happining')
//     }
//     catch {
//         console.log('something went wrong')
//     }
// }}
// userdetails();



// // const axios = require('axios');

// // axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en').then(resp => {

// //     console.log(resp.data);
// // });







// //Shakshi Ma'am Assignment


  
  
  
  // const axios = require('axios');
  
  // axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en').then(resp => {
  
  //     console.log(resp.data);
  // });
  

  async function getData() {
  
    if (navigator.geolocation) {
  
      navigator.geolocation.getCurrentPosition(showPosition);
  
    }
  
  
  
    async function showPosition(position) {
  
      let lat = position.coords.latitude;
  
      let long = position.coords.longitude;
  
      const data = await fetch(
  
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
  
      )
  
        .then((result) => {
  
          if (!result.ok) throw new Error("Something went Wrong");
  
          return result.json();
  
        })
  
        .then((data1) => {
  
          console.log(data1);
  
          console.log(`You are in  ${data1.city}`);
  
        })
  
        .catch((err) => console.log(err));
  
    }
  
  }
  
  getData();