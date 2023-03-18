 import {CarritoContext} from '../context/CartContext';
 import {useContext} from 'react';

const Cart = () => {

   const {cart, setCart} = useContext(CarritoContext);
 console.log(cart)

  return (
    <h1 style={{ backgroundColor:"rgb(37, 39, 39)", 
    color:"aliceblue", textAlign:"center", width:"100%", height:"100%", marginTop:"10px", fontSize:"20px"}}>Proximamente Carrito</h1>
  )
}

export default Cart