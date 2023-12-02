import React from "react";

const NavLink = ()=>{
    return(
        <div>
            <NavLink to={"/"} className={({isActive})=>
        `navlink${isActive ? "active" : ""}`}>
            Expence
            
        </NavLink>
        </div>
    )
}