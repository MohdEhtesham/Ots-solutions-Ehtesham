import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import Data from "./Data";


function App() {
  const [receipes, setReceipes] = useState([]);
  const [data ,setData]=useState(null)

  const addReceipe = (receipe) => {
    setReceipes([...receipes, receipe]);
  };
 const dd=(item)=>{
 setData(item)
 }
 console.log(receipes)
 const deleted = (item) => {
  
    const delitem = receipes.filter((val)=>{
      if(item.chef===val.chef){
        return false
      }else{
        return true
        
      }
      
    })
    setReceipes(delitem)
    const deldes = data((val)=>{
      if(item.chef===val.chef){
        return false
      }else{
        return true
        
      }
      
    })
    setData(deldes)
 
}

  return (
    <div >
      <Form addReceipe={addReceipe} />
      <List receipes={receipes} aa={dd} deleted={deleted}/>
      <Data data={data} deleted={deleted}/>
      
    </div>
  );
}

                       

export default App