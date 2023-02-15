import { BsCartFill } from "react-icons/bs";
import '../styles.css'

function CartWidget() {
  return (
    <>
      
      <BsCartFill class="icon"/>
      <div id="carrito">
      <p>4</p> 
      </div>  
    </>
  );
}

export default CartWidget;
