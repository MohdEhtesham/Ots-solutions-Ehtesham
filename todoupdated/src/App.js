import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const [receipes, setReceipes] = useState([]);
  

  const addReceipe = (receipe) => {
    setReceipes([...receipes, receipe]);
  };
 
 

  return (
    <div className="App">
      <Form addReceipe={addReceipe} />
      {/* <List receipes={receipes} /> */}

    </div>
  );
}

export default App;