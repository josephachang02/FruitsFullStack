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
        {fruits.map((fruits) => {
        
          return (<li key={fruits.name}>
            <p>{fruits.name}</p>
            <p>{fruits.color}</p>
            <p>{fruits.readyToEat}</p>
           </li>
          )
        })}
        </ul>
    </div>
  )
}

export default Fruits