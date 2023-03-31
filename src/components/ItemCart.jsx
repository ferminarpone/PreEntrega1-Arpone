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
  Tooltip,
} from "@chakra-ui/react";
import { CarritoContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";

const ItemCart = ({ nombre, precio, id, stock, img, cant }) => {

  const { cart, setCart } = useContext(CarritoContext);
  const [counter, setCounter] = useState(cant);
  useEffect(() => {
    upDateCart();
  }, [counter]);

  //Funciones para agregar y quitar cantidad de productos.
  const add = () => {
    if (counter < stock) {
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

  //Función que actualiza el carrito.
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

//Función que actualiza el precio parcial por conjunto de producto.
  const parcialPrice = () => {
    const newPrecio = Number(precio.replace(".", ""));
    const total = newPrecio * counter;
    return total.toLocaleString("de-DE");
  };

  //Función que elimina un producto del carrito.
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
            <Text color="blue.600" fontSize="md">
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
            {counter >= stock ? (
              <Tooltip
                label="Stock insuficiente"
                placement="bottom"
                bg="gray.100"
                color="black"
              >
                <Button
                  onClick={add}
                  p="0"
                  fontSize="12"
                  size="xs"
                  cursor={counter >= stock ? "not-allowed" : "default"}
                >
                  +
                </Button>
              </Tooltip>
            ) : (
              <Button
                onClick={add}
                p="0"
                fontSize="12"
                size="xs"
                cursor={counter >= stock ? "not-allowed" : "pointer"}
              >
                +
              </Button>
            )}
            <Text textAlign="center" w="25px" h="6" fontSize="14px">
              {counter}
            </Text>
            <Button
              onClick={substract}
              p="0"
              fontSize="12"
              size="xs"
              cursor={counter <= 1 ? "not-allowed" : "pointer"}
            >
              -
            </Button>
          </Box>

          <Text
            pr="2"
            pl="2"
            fontWeight="500"
            bg="gray.100"
            borderRadius="5px"
            h="6"
          >
            € {parcialPrice()}{" "}
          </Text>
          <Button
            onClick={removeItem}
            h="6"
            p="2"
            fontSize="12"
            _hover={{
              bg: "brown",
              color: "aliceblue",
            }}
            bg="brown"
            color="aliceblue"
          >
            {" "}
            Eliminar{" "}
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default ItemCart;
