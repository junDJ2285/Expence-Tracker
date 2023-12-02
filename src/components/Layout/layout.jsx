import { Outlet } from "react-router-dom"
import Header from "../header/Header";
import Login from "../../pages/login/login";
import "./layout.css"
import Home from "../../pages/home/home";
import Expence from "../../pages/expence/expence";
import { useSelector } from "react-redux";

const Layout = () =>{
    const user = useSelector((s)=>s.reducer.user)
    // console.log("hhh",user);
    return(
        <div className="layout">
            <Header/>
            <div className="main-wraper">
              
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout;