import { Box, Heading, Grid, Container, Text, Button } from "@chakra-ui/react";
import ItemCart from "./ItemCart";
import CreateOrder from "./CreateOrder";
import { CarritoContext } from "../context/CartContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Cart = () => {
  const { cart, setCart, totalAmount, orderId, setOrderId } =
    useContext(CarritoContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const MySwal = withReactContent(Swal);

  //Condicional que muestra el "orderId" cuando se realiza la compra.
  {
    orderId != null
      ? MySwal.fire({
          icon: "success",
          title: "Compra exitosa!",
          html: `<p class=alertTitle>Nro. de orden: ${orderId}<p>`,
          confirmButtonText: "OK",
        }).then(() => {
          setCart([]);
          setOrderId(null);
        })
      : "";
  }

  return (
    <Box bg="rgb(37, 39, 39)" pb="10" h={cart == 0 ? "650px" : "auto"}>
      <Box
        bgImage="https://images.triumphmotorcycles.co.uk/media-library/images/central%20marketing%20team/for%20the%20ride/news/2023/motowake/ftr-news-motowake-mc3-1366x768.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h={{ base: "200" }}
      >
        <Heading textAlign="center" color="aliceblue" pt="7%" mb="10">
          CARRITO DE COMPRA
        </Heading>
      </Box>
      <Container maxW="6xl">
        <Grid
          templateColumns={
            cart.length == 1
              ? { sm: "repeat(1, 1fr)" }
              : {
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }
          }
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

        {cart != 0 ? (
          <>
            <Box
              mt="10"
              bg="white"
              ml={{ base: "0", md: "10" }}
              mr={{ base: "0", md: "10" }}
              p="2"
              borderRadius="5"
              display="flex"
              justifyContent="center"
            >
              <Text
                pr="2"
                pl="2"
                fontWeight="500"
                bg="gray.200"
                borderRadius="5px"
                h="6"
              >
                {" "}
                Total: € {totalAmount()}{" "}
              </Text>
            </Box>
            <CreateOrder />
          </>
        ) : (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text
              color="rgb(37, 39, 39)"
              bg="gray.200"
              borderRadius="5px"
              w="100%"
              h="50px"
              fontWeight="500"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              TU CARRITO SE ENCUENTRA VACIO
            </Text>
            <Link to={"/catalogue"}>
              <Button bg="gray.200" mt="5" w="150px" color="brown">
                {" "}
                Ir al catalogo{" "}
              </Button>
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );
};
export default Cart;
