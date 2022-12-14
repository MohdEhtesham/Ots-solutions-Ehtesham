import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import Data from "./Data";


function App() {
  const [receipes, setReceipes] = useState([]);
  const [data ,setData]=useState()

  const addReceipe = (receipe) => {
    setReceipes([...receipes, receipe]);
  };
 const dd=(item)=>{
 setData(item)
 }
//  console.log(receipes)
 const deleted = (item ) => {
    const delitem = receipes.filter((val)=>{
      if(item.id===val.id){
        return false
      }else{
        return true
        
      }
      
    })
   
    setReceipes(delitem)
    setData(null)
    // console.log(data)
}
const edited = (item ) => {
  const editvalue = receipes.filter((val)=>{
    if(item.id===val.id){
      return true
    }else{
      return false
      
    }
    
  })
  
 
 
}



  return (
    <div >
      <Form addReceipe={addReceipe} />
      <List receipes={receipes} aa={dd} deleted={deleted} edited={edited}/>
      <Data data={data} />
      
    </div>
  );
}

                       

export default App