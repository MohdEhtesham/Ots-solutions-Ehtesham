import React from 'react'

export default function List(receipes) {
  
  

  return (
    <div>
      <ul>
        {
         receipes.map((i) => <li key={i}>{i}</li>)
        }
      </ul>
    </div>
  )
}
