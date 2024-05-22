import { createBrowserRouter,RouterProvider } from "react-router-dom";
import {Landing,About,Cocktail,Error,HomeLayout,Newsletter} from "../src/pages/index";
import {loader as loadingLanding} from "../src/pages/Landing";
import { dataMe } from "./pages/About";
import { loaderFun as loadingCocktail } from "../src/pages/Cocktail";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
  
    children:[
      {
        path:"about",
        element:<About/>,
        loader:dataMe,
      },
      {
        path:"newsletter",
        element:<Newsletter/>
      },
      {
        path:"error",
        element:<Error/>
      },
      {
        path:"cocktail/:id",
        element:<Cocktail/>,
        loader:loadingCocktail
      },
      {
        element:<Landing/>,
        index:true,
        loader:loadingLanding,
        errorElement:<h2>sorry something went wrong ...</h2>
      },
    ]
  },
  
])

const App = () => {
  return <RouterProvider router={router}/>
};
export default App;
