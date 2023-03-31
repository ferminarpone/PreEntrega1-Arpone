import { FaMotorcycle } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { CarritoContext } from "../context/CartContext";
import { useContext } from "react";

function CartWidget() {
  const { cart } = useContext(CarritoContext);
  //Se utiliza el metodo "reduce" para obtener la cantidad de productos en el carrito.
  const cant = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  return (
    <>
      <div id="carrito">
        <Button className="buttonCart">
          <span className={cart != 0 ? "span" : ""}>
            <p>{cant}</p>
          </span>
          <FaMotorcycle className="logoCart" fontSize="30" />
        </Button>
      </div>
    </>
  );
}

export default CartWidget;
