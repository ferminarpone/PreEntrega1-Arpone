import { FaMotorcycle } from "react-icons/fa";

function CartWidget() {
  return (
    <>
      <div id="carrito">
        <p>4</p>
        <FaMotorcycle className="logoCart" fontSize="28" />
      </div>
    </>
  );
}

export default CartWidget;
