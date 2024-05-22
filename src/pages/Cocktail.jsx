import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import { Link } from "react-router-dom";


export const loaderFun = async ({ params }) => {
  const url = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  const { id } = params;
  const { data } = await axios.get(`https:${url}${id}`);

  return { id, data };
}


const Cocktail = () => {
  const { id, data } = useLoaderData();
  const singleDrnk = data.drinks[0];
  const { idDrink: idDrink, strAlcoholic: info, strCategory: cat,
    strDrink: name, strDrinkThumb: image, strGlass: glass,
    strInstructions: instructions } = singleDrnk;
  return <Wrapper>
    <header>
      <Link to="/" className="btn">
        back home
      </Link>
      <h3>{name}</h3>
    </header>
    <div className="drink">
      <img src={image} alt={name} className="img" />
      <div className="drink-info">
        <p>
        <span className="drink-data"> name :</span>
        {name}
        </p>
        <p>
        <span className="drink-data"> category :</span>
        {cat}
        </p>
        <p>
        <span className="drink-data"> info :</span>
        {info}
        </p>
        <p>
        <span className="drink-data"> glass :</span>
        {glass}
        </p>
        <p>
        <span className="drink-data"> instructions :</span>
        {instructions}
        </p>       
      </div>
    </div>

  </Wrapper>
}

export default Cocktail;