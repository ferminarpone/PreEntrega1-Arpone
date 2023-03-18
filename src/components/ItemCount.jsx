import { useState, useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

function ItemCount({stock}) {
 
   const [count, setCount] = useState(1);
  //useEffect(() => console.log("API"),[]);

  const add = () =>
    count >= stock ? alert("Stock insuficiente") : setCount(count + 1);
  const subtract = () => (count <= 1 ? setCount(1) : setCount(count - 1));

  return (
    <>
      <Flex mb="5" justifyContent="center">
        <Button onClick={add} h="8" w="10" p="0" fontSize="12"> + </Button>
        <Text pt="2" h="8" w="17" pr="1" pl="1" fontSize="12"> {count} </Text>
        <Button onClick={subtract} mr="1" h="8" w="10" p="0" fontSize="12"> - </Button>
        <Button onClick={() => setCount(1)} h="8" w="17" p="2" mr="2" fontSize="12">  Reset </Button>
      </Flex>
    </>
  );
}

export default ItemCount;