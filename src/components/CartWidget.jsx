import { FaMotorcycle } from "react-icons/fa";
import { Button, color } from "@chakra-ui/react";

function CartWidget() {
  return (
    <>
      <div id="carrito">
        <Button className="buttonCart">
          <span><p>7</p></span>
          <FaMotorcycle className="logoCart" fontSize="30" />
        </Button>
      </div>
    </>
  );
}

export default CartWidget;
