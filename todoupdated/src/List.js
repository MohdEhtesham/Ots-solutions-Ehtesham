import React from 'react'

export default function List(props) {
  

  return (
    <div>
      <ul>
        {
          <li>{props.name}</li>
        }
      </ul>
    </div>
  )
}
