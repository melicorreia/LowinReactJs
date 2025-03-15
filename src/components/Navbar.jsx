import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1 className="brand-name">Lowin Digital</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos/personalizados">Personalizados</Link></li>
                <li><Link className="menu-link" to="/productos/servicios">Servicios</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Navbar