import { useState, useEffect } from "react";
import axios from 'axios';

const Veggies = () => {


    // state (to keep track of veggies)
const [veggies, setVeggies] = useState([]);

    // useEffect to make request for veggies)
    useEffect (() => {
        axios({
            method: "GET",
            url: "/server/veggies"
        }).then((res) => {
            setVeggies(res.data);
        })
    }, [])


//   return (
//     <div>
//         {/* map to show veggies state */}
//     {veggies.map((veggie) => {
//         return <div key={veggie._id}>{veggie.name}</div>
//     })}


    
//     </div>
//   )
// }


return (
    <div>
      Show all fruits here:
      <ul>
        {veggies.map((veggie) => {
          return (
            <li key={JSON.stringify(veggie)}>
              <p>Name: {veggie.name}</p>
              <p>Color: {veggie.color}</p>
              <p>Ready to Eat: {veggie.readyToEat}</p>
              <p>Age: {veggie.age}</p>
              <p>Is Healthy: {veggie.isHealthy ? "true" : "false"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Veggies