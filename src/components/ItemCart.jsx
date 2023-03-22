import {
  Box,
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  Button,
  GridItem,
  transform,
} from "@chakra-ui/react";

import { CarritoContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";

const ItemCart = ({ nombre, categoria, precio, id, stock, img, cant }) => {
  const { cart, setCart } = useContext(CarritoContext);
  console.log(cart);

  const [counter, setCounter] = useState(cant);

  useEffect(() => {
    upDateCart();
  }, [counter]);

  const add = () => {
    if (counter >= stock) {
      return alert("Stock insuficiente");
    } else {
      return setCounter(counter + 1);
    }
  };

  const substract = () => {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };

  const upDateCart = () => {
    setCart((cartItems) => {
      const itemFound = cartItems.find((item) => item.id === id);
      if (itemFound) {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: counter };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...cartItems,
          { id, precio, img, nombre, stock, quantity: counter },
        ];
      }
    });
  };

  const parcialPrice = () => {
    const newPrecio = Number(precio.replace(".", ""));
    return newPrecio * counter;
  };

  const removeItem = () => {
    const filtro = cart.filter((item) => item.id != id);
    setCart(filtro);
  };

  return (
    <GridItem w="100%">
      <Card maxW="xs" m="auto">
        <CardBody>
          <Image
            src={img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack>
            <Heading size="xs">{nombre}</Heading>
            <Text color="blue.600" fontSize="xs">
            € {precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Button
              onClick={add}
              p="0"
              fontSize="12"
              size="xs"
            >
              +
            </Button>
            <Text
              textAlign="center"
              w="25px"
              h="6"
              fontSize="14px"
            >
              {counter}
            </Text>
            <Button onClick={substract} p="0" fontSize="12" size="xs">
              -
            </Button>
            </Box>

            <Text pr="2" pl="2" fontWeight="500" bg="gray.100" borderRadius="5px" h="6">€ {parcialPrice()} </Text>
            <Button
            onClick={removeItem}
            h="6"
            p="2"
            fontSize="12"
            _hover={{
              bg: "brown",
              color:"aliceblue",
            }}
            bg= "brown"
              color="aliceblue"
          >
            {" "}
            Remove{" "}
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default ItemCart;
