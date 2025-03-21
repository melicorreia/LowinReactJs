import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h3>{prod.titulo}</h3>
                        <p>Precio unitario: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }
            <br />
            {
                carrito.length > 0 ?
                <div>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar carrito</button>
                    <Link to="/checkout"><button>Finalizar compra</button></Link>
                </div> :
                <h2>El carrito está vacio</h2>
            }
        </div>
    )
}

export default Carrito