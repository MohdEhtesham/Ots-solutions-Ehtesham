import React from 'react'

export default function Data({ data }) {

console.log(data)
    return (
        <div>
            {/* {console.log('====>', data)} */}
          { data? <div>
                <div >
                    <span >
                        Recipe Name:
                    </span>


                    {
                        data.recipe

                    }
                </div>
                <div>
                    Chef Name:
                    {
                        data.chef

                    }
                </div>
                <div>
                    Instruction :
                    {
                        data.instruction

                    }
                </div>
                {/* <div>
                    Instruction :
                    {
                        data.id

                    }
                </div> */}





            </div>:
            // <div>  selected data not found</div>
            null
            }
        </div>

    )
}
