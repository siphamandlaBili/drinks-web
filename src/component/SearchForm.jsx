import Wrapper from "./../assets/wrappers/SearchForm"
import { Form,useNavigation } from "react-router-dom";

const SearchForm =()=>{
    return <Wrapper>
        <Form className="form">
            <input className="form-input" type="search" name="search" id="search"  />
            <button type="submit" className="btn">submit</button>
        </Form>
    </Wrapper>
}

export default SearchForm;