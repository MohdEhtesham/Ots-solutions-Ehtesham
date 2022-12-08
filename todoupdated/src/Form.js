import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [chefName, setChefName] = useState("");
  const [instruction, setInstruction] = useState("");
  const arr = [];
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChefNameChange = (e) => {
    setChefName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setInstruction(e.target.value);
  };

  const handleSubmit = (e) => {
    
    arr.push("Reacipe Name =>  " + "  " + name + "Chef Name =>" + " " + chefName + " Your Instruction =>" + instruction);
    
  };
  
  return (
    <div>
      <header>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3> New Details </h3>

          <label>Recipe Name :</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />

          <label>Chef Name:</label>
          <br />
          <input
            type="text"
            value={chefName}
            required
            onChange={(e) => {
              handleChefNameChange(e);
            }}
          />
          <br />

          <label>Instruction:</label>
          <br />
          <input
            value={instruction}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />

          <input
            type="submit"
            value="Submit"
          />
        </form>
      </header>
      <div>
      <ul>
      {
          arr.map((i) => <li key={i}>{i}</li>)
        }
      </ul>
      </div>
    </div>
  );
}

export default Form;
