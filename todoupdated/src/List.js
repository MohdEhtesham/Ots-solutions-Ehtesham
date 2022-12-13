import React from 'react'

export default function List({receipes,aa,deleted }) {
 

  return (
    <div>
      <ul>
        {
         receipes.map((i) => 
          <li onClick={()=>aa(i)} key={i}>{i.recipe }  
          <span><button >Edit</button></span>
          <span><button onClick={()=>deleted(i)}>delete</button></span>
          </li>
          
         )
         
         
        }
       
      </ul>

     
    </div>
  )
}
