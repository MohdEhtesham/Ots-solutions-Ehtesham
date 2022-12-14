// import React, { useState } from "react";

// function Form(listitem) {
//   const [name, setName] = useState("");
//   const [chefName, setChefName] = useState("");
//   const [instruction, setInstruction] = useState("");
//   // const arr = [];/
//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleChefNameChange = (e) => {
//     setChefName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setInstruction(e.target.value);
//   };

//   const handleSubmit = (e) => {
// const addtolist ={
//   Recipename:name.


// }
// console.log(addtolist)
//     // alert("Reacipe Name =>  " + "  " + name + "Chef Name =>" + " " + chefName + " Your Instruction =>" + instruction);
 
//   };
  
 

//   return (
//     <div>
//       <header>
//         <form
//           onSubmit={(e) => {
//             handleSubmit(e);
//           }}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             flexDirection: "column",
//           }}
//         >
//           <h3> New Details </h3>

//           <label>Recipe Name :</label>
//           <br />
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => {
//               handleChange(e);
//             }}
//           />
//           <br />

//           <label>Chef Name:</label>
//           <br />
//           <input
//             type="text"
//             value={chefName}
//             onChange={(e) => {
//               handleChefNameChange(e);
//             }}
//           />
//           <br />

//           <label>Instruction:</label>
//           <br />
//           <input
//             value={instruction}
//             onChange={(e) => {
//               handleEmailChange(e);
//             }}
//           />
//           <br />

//           <input
//             type="submit"
//             value="Submit"
//           />
//         </form>
//         <div>
       
//         </div>
//       </header>
      
//     </div>
//   );
// }

// export default Form;



import React, { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

const Form = ({ addReceipe }) => {
  const [details, setDetails] = useState({
    recipe: "",
    chef: "",
   
  });
  

  const inputRef = useRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    // console.log(details);
    const instruction = inputRef.current.value;
    const { recipe, chef } = details;
    if (recipe && chef && instruction) {
      addReceipe({ recipe, chef, instruction , id : uuid()});
      // setDetails({});
    }
  };
  
  return (
    <div>
      <h3>Todo </h3>

      <input
        id="inputField"
        name="recipe"
        type="text"
        value={details.recipe}
        placeholder="Enter Recipe name"
        onChange={handleChange}
      ></input>
      <br />
      <input
        id="inputField"
        type="text"
        name="chef"
        value={details.chef}
        placeholder="Enter Chef name"
        onChange={handleChange}
      ></input>
      <br />
      <input
        id="inputField"
        type="text"
        name="instruction"
        placeholder="Enter Instruction"
        ref={inputRef}
        // onChange={handleChange}
      ></input>
      <br />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Form;