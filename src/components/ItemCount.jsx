import { useState, useContext } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { CarritoContext } from "../context/CartContext";

function ItemCount({ stock, nombre, precio, id, img }) {
  const { cart, setCart } = useContext(CarritoContext);

  const [count, setCount] = useState(1);
  //useEffect(() => console.log("API"),[]);

  const add = () => count >= stock ? alert("Stock insuficiente") : setCount(count + 1);
  const substract = () => (count <= 1 ? setCount(1) : setCount(count - 1));
  const addToCart = () =>{
    setCart((cartItems)=>{
      const itemFound = cartItems.find ((item)=> item.id === id);
      if(itemFound){
        return cartItems.map((item)=>{
          if(item.id === id){
            return { ...item , quantity: item.quantity + count };
          }else{
            return item ;
          }
        });
      }else{
        return [...cartItems , {id, precio, img, nombre , stock, quantity: count} ] 
      }
    })
    
  }

 console.log(cart)

  return (
    <>
      <Flex mb="5" justifyContent="center">
        <Button onClick={add} h="8" w="10" p="0" fontSize="12">
          +
        </Button>
        <Text pt="2" h="8" w="17" pr="1" pl="1" fontSize="12">
          {count}
        </Text>
        <Button onClick={substract} mr="1" h="8" w="10" p="0" fontSize="12">
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

        {/* AGREGAR <Link to={"/cart"}> */}
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
        {/* </Link> */}
      </Flex>
    </>
  );
}

export default ItemCount;
