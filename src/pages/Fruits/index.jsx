import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3000/fruits"
        }).then((res)=> {
            setFruits(res.data)
        })

    }, [])

  return (
    <div>Show all Fruits:
        <ul>
        {fruits.map((fruit) => {
        
          return (<li key={fruit.name}>
            <p>{fruit.name}</p>
            <p>{fruit.color}</p>
            <p>{fruit.readyToEat}</p>
           </li>
          )
        })}
        </ul>
    </div>
  )
}

export default Fruits