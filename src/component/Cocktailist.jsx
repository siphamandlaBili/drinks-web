import Wrapper from "../assets/wrappers/CocktailList";
import Cocktail from "./Cocktail";

const Cocktaillist = ({ drinks, chosenDrink }) => {
  

    const formmatedDrinks = drinks?.map((drink) => {
        const {dateModified,idDrink,strAlcoholic,strCategory,strDrink,strDrinkThumb,strGlass,strInstructions} = drink

        return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass,
            instructions:strInstructions
        }
    })

    
    return <Wrapper>
        {formmatedDrinks?.map((item)=>{
           return <Cocktail key={item.id} {...item}/>
        })}
    </Wrapper>
}

export default Cocktaillist;