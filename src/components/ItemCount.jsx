import { useState, useContext } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { CarritoContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ItemCount({ stock, nombre, precio, id, img }) {
  const { cart, setCart} = useContext(CarritoContext);
  const [count, setCount] = useState(1);

  const newStock = () => {
    const find = cart.find((el) => el.id == id);
    if (find) {
      return stock - find.quantity;
    }
    return stock;
  };

  const add = () => count >= newStock(stock, id) ? alert("Stock insuficiente.") : setCount(count + 1);
  const substract = () => (count <= 1 ? setCount(1) : setCount(count - 1));
  const addToCart = () => {
    setCart((cartItems) => {
      const itemFound = cartItems.find((item) => item.id === id);
      if (itemFound) {
        if (count <= itemFound.stock - itemFound.quantity) {
          return cartItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + count };
            } else {
              return item;
            }
          });
        } else {
          alert("Stock insuficiente.");
          return cartItems;
        }
      } else {
        return [
          ...cartItems,
          { id, precio, img, nombre, stock, quantity: count },
        ];
      }
    });
  };

  const navigation = () => {
    const found = cart.find((item) => item.id == id);
    if (found) {
      if (count <= found.stock - found.quantity) {
        return "/cart";
      } else {
        return `/item/${id}`;
      }
    } else {
      return "/cart";
    }
  };

  return (
    <>
      <Flex mb="5" justifyContent="center">
        <Button onClick={add} h="8" w="10" p="0" fontSize="12" cursor={ count >= newStock()? "not-allowed":"default"}>
          +
        </Button>
        <Text
          pt="2"
          h="8"
          mr="2"
          ml="2"
          textAlign="center"
          pr="1"
          pl="1"
          fontSize="12"
        >
          {count}
        </Text>
        <Button onClick={substract} mr="1" h="8" w="10" p="0" fontSize="12" cursor={count <= 1 ? "not-allowed":"default"}>
          -
        </Button>
        <Button
          onClick={() => setCount(1)}
          h="8"
          w="17"
          p="2"
          mr="2"
          fontSize="12"
        >
          Reset
        </Button>

        <Link to={navigation()}>
          <Button
            variant="solid"
            colorScheme="gray"
            h="8"
            w="20"
            p="0"
            fontSize="12"
            color="brown"
            onClick={() => addToCart()}
          >
            Add to cart
          </Button>
        </Link>
      </Flex>
    </>
  );
}

export default ItemCount;
