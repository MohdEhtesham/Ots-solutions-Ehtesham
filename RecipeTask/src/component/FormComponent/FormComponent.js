import React, { useRef, useState } from "react";

const FormComponent = ({ addReceipe }) => {
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
    console.log(details);
    const instruction = inputRef.current.value;
    const { recipe, chef } = details;
    if (recipe && chef && instruction) {
      addReceipe({ recipe, chef, instruction });
      setDetails({});
    }
  };
  console.log(details);
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

export default FormComponent;
