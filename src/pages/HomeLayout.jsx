import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useNavigation } from "react-router-dom";

const HomeLayout = ()=>{
    const navigation = useNavigation();
    if(navigation.state == 'loading'){
        return <>
        <Navbar/>
        <section className="page">
        <div className="loading" style={{display:"flex",justifyContent:"center",alignItems:"center"}}></div>
        </section>
        </>
    }
    return <>
    <Navbar/>
    <section className="page">
    <Outlet/>
    </section>
    </>
}

export default HomeLayout;