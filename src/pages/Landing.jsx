import { Link, useLoaderData } from "react-router-dom";
import axios, { Axios } from "axios";
import Cocktaillist from "../component/Cocktailist";
import { useEffect } from "react";

const searchUrl = `www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
let chosenDrink="";
export const loader = async ()=>{
   chosenDrink = ""
   const response = await axios.get(`https://${searchUrl}${chosenDrink}`);
  return {drinks:response.data.drinks,searchTerm:chosenDrink};
}
const Landing = ()=>{

    const {drinks,searchTerm} = useLoaderData();
    

    if(drinks == null){
      return <h2>couldnt find your search results '{chosenDrink}'</h2>
    }

    return <>
     <Cocktaillist drinks = {drinks} chosenDrink ={chosenDrink}/>
    </>
}

export default Landing;