import { Link, useLoaderData } from "react-router-dom";
import axios, { Axios } from "axios";
import Cocktaillist from "../component/Cocktailist";
import { useEffect } from "react";
import SearchForm from "../component/SearchForm"
import Wrapper from "../assets/wrappers/SearchForm";
import { Form,useNavigation } from "react-router-dom";

const searchUrl = `www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
let chosenDrink="";
export const loader = async ({request})=>{
  
  const url = new URL(request.url);
  
   chosenDrink =chosenDrink ==" " ?  url?.search?.split("=")[1] :" ";
   const response = await axios.get(`https://${searchUrl}${chosenDrink}`);
  return {drinks:response.data.drinks,searchTerm:chosenDrink};
}
const Landing = ()=>{

    const {drinks,searchTerm} = useLoaderData();
    
    
    if(drinks == null){
      return <>
      <SearchForm/>
      <h2>couldnt find your search results '{chosenDrink}'</h2>
      </>
    }

    return <>
    <SearchForm/>
     <Cocktaillist drinks = {drinks} chosenDrink ={chosenDrink}/>
    </>
}

export default Landing;