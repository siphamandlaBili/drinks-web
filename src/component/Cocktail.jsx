import Wrapper from "../assets/wrappers/CocktailCard";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass, instructions }) => {
    return <Wrapper >
        <div className="img-container" >
            <img src={image} alt={name} style={{ width: "100%" }} />
        </div>
        <div className="footer">
            <h3>{name}</h3>
            <h5>{glass}</h5>
            <p>{info}</p>
            <Link to={`/cocktail/${id}`} className="btn">
                details
            </Link>
        </div>
    </Wrapper>
}

export default Cocktail;