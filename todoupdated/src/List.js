import React from 'react'

export default function List({ receipes, aa, deleted ,edited}) {


  return (
    <div>
      <ul>
        {
          receipes.map((i) =>
            <li key={i}>
              <span onClick={() => aa(i)}>{i.recipe} </span>
              <span><button onClick={()=>edited(i)}>Edit</button></span>
              <span><button onClick={() => deleted(i)}>delete</button></span>
            </li>

          )


        }

      </ul>


    </div>
  )
}
