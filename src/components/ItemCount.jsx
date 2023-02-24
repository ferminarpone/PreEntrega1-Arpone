import { useState, useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

function ItemCount({stock}) {
 
   const [count, setCount] = useState(1);
  useEffect(() => console.log("API"),[]);

  const add = () =>
    count >= stock ? alert("Stock insuficiente") : setCount(count + 1);
  const subtract = () => (count <= 0 ? setCount(0) : setCount(count - 1));

  return (
    <>
      <Flex mb="5" justifyContent="center">
        <Button onClick={add}> + </Button>
        <Text pt="2" mr="2" ml="2"> {count} </Text>
        <Button onClick={subtract} mr="2"> - </Button>
        <Button onClick={() => setCount(1)}> Reset </Button>
      </Flex>
    </>
  );
}

export default ItemCount;