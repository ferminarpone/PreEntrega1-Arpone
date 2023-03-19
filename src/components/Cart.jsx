import { Box, Heading, Grid, Container, Text } from "@chakra-ui/react";
import ItemCart from "./ItemCart";

import { CarritoContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart, setCart } = useContext(CarritoContext);

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
      <Container maxW="6xl">
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="6"
          pl={{ base: "0", md: "10" }}
          pt="10"
          pr={{ base: "0", md: "10" }}
        >
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
        </Grid>
        <Text mt="10" bg="aliceblue"   ml={{ base: "0", md: "10" }}
          mr={{ base: "0", md: "10" }} p="2" borderRadius="5"> Monto Total </Text>
      </Container>
    </Box>
  );
};

export default Cart;
