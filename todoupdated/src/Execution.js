import React, { useState } from 'react'
import List from './List';
import './App.css';

import Form from './Form';

function Execution() {

    const [data, setData] = useState([]);
    let update = (item) => {
        if (item) {
            setData((c) => [...c, item]);
        }

    }
    let sort= ()=>{
        const newData= data.sort()
        setData([...newData]);
    }

    return (

        <div className='App-header'>

            <Form parentBag={update} click={sort} />
            <List arr={data} />

        </div>

    )
}

export default Execution

// we can send data from form to list because form is the parent of list.
// Problem:- Form needs data from input form component (Which means we need to pass data from child to parent).