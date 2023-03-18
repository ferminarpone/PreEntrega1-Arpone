import { createContext, useState } from "react";

export const CarritoContext = createContext(null);

const CartContext = ({children}) => {
  const [cart, setCart] = useState([]);




  return (
    <CarritoContext.Provider value={{ cart, setCart }}>
      {children}
    </CarritoContext.Provider>
  );
}

export default CartContext;
