import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className= "navbar">
           
            <div className= "brand">
                <img src="./img/escudo.png" alt="" />
                <p>Tienda Boca</p>
            </div>
        

            <ul className="categories">
                <li>Remeras</li>
                <li>Shorts</li>
                <li>Buzos</li>
                <li>Camperones</li>           
            </ul>
        
            <CartWidget/>
        </nav>
    )
}

export default NavBar