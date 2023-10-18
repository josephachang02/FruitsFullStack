import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "server/fruits",

        }).then((res) => {
            setFruits(res.data)
        })

    }, [])

    return (
        <div>
          Show all fruits here:
          <ul>
            {fruits.map((fruit) => {
              return (
                <li key={JSON.stringify(fruit)}>
                  <p>Name: {fruit.name}</p>
                  <p>Color: {fruit.color}</p>
                  <p>Ready to Eat: {fruit.readyToEat}</p>
                  <p>Age: {fruit.age}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    
    export default Fruits