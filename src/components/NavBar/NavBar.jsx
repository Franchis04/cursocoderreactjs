import CartWidget from "./CartWidget"
import "./navbar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className= "navbar">
           
            <div className= "brand">
                <p>TiendaBOCA</p>
            </div>
        

            <ul className="categories">
                <NavLink to= "/category/camisetas" className={({isActive}) => isActive ? "category-active" : "category"}>Remeras</NavLink>
                <NavLink to= "/category/shorts" className={({isActive}) => isActive ? "category-active" : "category"}>Shorts</NavLink>
                <NavLink to = "/category/buzos" className={({isActive}) => isActive ? "category-active" : "category"}>Buzos</NavLink>
                <NavLink to = "/category/camperones" className={({isActive}) => isActive ? "category-active" : "category"}>Camperones</NavLink>    
            </ul>
        
            <CartWidget/>
        </nav>
    )
}

export default NavBar