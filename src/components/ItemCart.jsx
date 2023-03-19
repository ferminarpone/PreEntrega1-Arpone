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
  GridItem
} from "@chakra-ui/react";

import { CarritoContext } from "../context/CartContext";
import { useContext, useState } from "react";

const ItemCart = ({ nombre, categoria, precio, id, stock, img, cant }) => {
  const { cart, setCart } = useContext(CarritoContext);
  console.log(cart);

  const [counter, setCounter] = useState(cant);
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

  const newPrecio = Number(precio.replace(".", ""));
  const totalElemento = newPrecio * counter;

  const removeItem = () => {
    const filtro = cart.filter((item) => item.id != id);
    setCart(filtro);
  };

  return (
    <GridItem w="100%">
    <Card maxW="xs">
      <CardBody>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack>
          <Heading size="xs">{nombre}</Heading>
          <Text color="blue.600" fontSize="xs">
           £ {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center">
          <Box display="flex" flexDirection="column">
            <Button
              onClick={add}
              p="0"
              marginBottom="1"
              fontSize="12"
              size="xs"
            >+</Button>
            <Button
              onClick={substract}
              p="0"
              fontSize="12"
              size="xs"
            >-</Button>
          </Box>

          <Text
            pl="2"
            pr="2"
            textAlign="center"
            h="6"
            border="solid"
            borderRadius="md"
            fontSize="12"
            m="1"
          >
            {counter}
          </Text>
          <Button onClick={upDateCart} mr="1" h="6" p="2" fontSize="12" >
            {" "}
            Confirm{" "}
          </Button>
        </Box>

        <Button onClick={removeItem} mr="1" h="6" p="2" fontSize="12" bg="brown" color="aliceblue">
          {" "}
          Remove{" "}
        </Button>
      </CardFooter>
      <Text h="10">Monto: £ {totalElemento}</Text>

      {/*
<Divider />
<CardFooter>
<ButtonGroup spacing="2">
  <Button variant="solid" colorScheme="blue">
    Buy now
  </Button>
  <Button variant="ghost" colorScheme="blue">
    Add to cart
  </Button>
</ButtonGroup>
</CardFooter> */}
    </Card>
    </GridItem>
  );
};

export default ItemCart;
