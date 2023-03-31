import { useState, useContext } from "react";
import { Button, Flex, Text, Tooltip } from "@chakra-ui/react";
import { CarritoContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ItemCount({ stock, nombre, precio, id, img }) {
  const { cart, setCart } = useContext(CarritoContext);
  const [count, setCount] = useState(1);
  const MySwal = withReactContent(Swal);

  //Función para administrar el stock.
  const newStock = () => {
    const find = cart.find((el) => el.id == id);
    if (find) {
      return stock - find.quantity;
    }
    return stock;
  };

  //Funciones para agregar y quitar elementos de un producto.
  const add = () => (count >= newStock(stock, id) ? "" : setCount(count + 1));
  const substract = () => (count <= 1 ? setCount(1) : setCount(count - 1));

  //Función para agregar productos al carrito.
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
          MySwal.fire({
            width: 500,
            height:200,
            padding: "1em",
            icon: "error",
            title: "Oops...",
            html: `<p>No es posible agregar mas <sapn style="font-weight: bold">${nombre}</span></p></br>
             <p style="font-weight: bold">Stock total: ${stock}</p>`,
            showConfirmButton: false,
            showCloseButton: true,
            customClass: {
              icon: 'iconClass',
              title:'titleClass',
              popup: 'containerClass',
            }
          });

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

  //Función para ir al carrito o mantenerse en Itemdetail.
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
        {count >= newStock() ? (
          <Tooltip
            label="Stock insuficiente"
            placement="bottom"
            bg="gray.100"
            color="black"
          >
            <Button
              onClick={add}
              h="8"
              size="xs"
              fontSize="12"
              cursor={count >= newStock() ? "not-allowed" : "default"}
            >
              +
            </Button>
          </Tooltip>
        ) : (
          <Button onClick={add} h="8" size="xs" fontSize="12">
            +
          </Button>
        )}
        <Text
          pt="2"
          h="8"
          mr="1"
          ml="1"
          textAlign="center"
          pr="1"
          pl="1"
          fontSize="12"
        >
          {count}
        </Text>
        <Button
          onClick={substract}
          h="8"
          size="xs"
          fontSize="12"
          mr="2"
          cursor={count <= 1 ? "not-allowed" : "pointer"}
        >
          -
        </Button>
        <Button
          onClick={() => setCount(1)}
          h="8"
          w="auto"
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
            w="auto"
            p="2"
            fontSize="12"
            color="brown"
            onClick={() => addToCart()}
          >
            Agregar a carrito
          </Button>
        </Link>
      </Flex>
    </>
  );
}

export default ItemCount;
