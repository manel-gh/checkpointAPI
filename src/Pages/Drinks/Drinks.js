import React from 'react'
import Axios from "axios";
import{ useState, useEffect } from "react";
import Drink from "../Drink/Drink";
const Drinks = () => {
    
    const [drinks, setDrinks] = useState([]);
    const [Error, setError] = useState(false)
    const [loading, setLoading] = useState(true);
  
  
    const getDrinks = async () => {
        try {
            setLoading(true);
            let result= await Axios.get (
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
            );
             
              setDrinks(result.data);
              setLoading(false);
            
        } catch (error) {
            setError(true)
            setLoading(false);
            
        }
         
    };
    useEffect(() => {
        getDrinks();
      }, []);

    return (
        <div>
            {loading ? (
        <h1 className="Loading"> Loading....</h1>) : Error ? (<h1>Error</h1>) : Drinks == null ?( <h1> There is no drinks with this name</h1>)
       : (
        drinks.map((el, i) => <Drink key={i} drinks={el} />)
      )}
        </div>
        
    )
}

export default Drinks;
