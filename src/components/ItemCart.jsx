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

  const removeItem = ()=>{
       const filtro =  cart.filter((item)=> item.id != id)
       setCart(filtro) 
  }

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nombre}</Heading>

          <Text color="blue.600" fontSize="2xl">
            {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column">
          <Button
            onClick={add}
            h="8"
            w="10"
            p="0"
            marginBottom="1"
            fontSize="12"
          >
            +
          </Button>
          <Button onClick={substract} mr="1" h="8" w="10" p="0" fontSize="12">
            -
          </Button>
        </Box>

        <Text pt="2" h="8" w="17" pr="1" pl="1" fontSize="12">
          {counter}
        </Text>
        <Button onClick={upDateCart} mr="1" h="8" p="2" fontSize="12">
          {" "}
          Confirm{" "}
        </Button>

        

        <Button onClick={removeItem} mr="1" h="8" p="2" fontSize="12">
          {" "}
          Remove{" "}
        </Button>
      </CardFooter>
      <Text>Monto: $ {totalElemento}</Text>

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
  );
};

export default ItemCart;
