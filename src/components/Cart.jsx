import {
  Box,
  Heading,
} from "@chakra-ui/react";
import ItemCart from './ItemCart'

import { CarritoContext } from "../context/CartContext";
import { useContext, useState } from "react";


const Cart = () => {
 
  const { cart, setCart } = useContext(CarritoContext);
  console.log(cart);

  return (
    <Box bg="rgb(37, 39, 39)" pb="10">
      <Box
        bgImage="https://images.triumphmotorcycles.co.uk/media-library/images/central%20marketing%20team/for%20the%20ride/news/2023/motowake/ftr-news-motowake-mc3-1366x768.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h={{ base: "200" }}
      >
        <Heading textAlign="center" color="aliceblue" pt="7%" mb="10">
          YOUR CART
        </Heading>
      </Box>
      <Box  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        {cart.map((item) => {
          return (
            
            <ItemCart
                  key={item.id}
                  nombre={item.nombre}
                  categoria={item.categoria}
                  precio={item.precio}
                  id={item.id}
                  stock={item.stock}
                  img={item.img}
                  cant={item.quantity}
              
                />
          );
        })}
      </Box>
    </Box>

  
  );
};

export default Cart;
