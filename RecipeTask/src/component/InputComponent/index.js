import React, { useState } from "react";
import List from "../UlComponent";
import "./index.css";

const InputComponent = () => {
  const [details, setDetails] = useState({
    recipe: "",
    chef: "",
    instruction: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    console.log(details);
  };

  return (
    <div>
      <h3>Todo </h3>

      <input
        id="inputField"
        name="recipe"
        type="text"
        placeholder="Enter Recipe name"
        onChange={handleChange}
      ></input>
      <br />
      <input
        id="inputField"
        type="text"
        name="chef"
        placeholder="Enter Chef name"
        onChange={handleChange}
      ></input>
      <br />
      <input
        id="inputField"
        type="text"
        name="instruction"
        placeholder="Enter Instruction"
        onChange={handleChange}
      ></input>
      <br />
      <button onClick={handleSubmit}>Add</button>
      <List props={details} />
    </div>
  );
};

export default InputComponent;
