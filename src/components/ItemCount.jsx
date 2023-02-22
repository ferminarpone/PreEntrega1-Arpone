import { useState, useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

function ItemCount({ stock }) {
  useEffect(() => {
    console.log("API");
  }, []);

  const [count, setCount] = useState(10);

  const add = () =>
    count >= stock ? alert("Stock insuficiente") : setCount(count + 1);
  const subtract = () => (count <= 0 ? setCount(0) : setCount(count - 1));

  return (
    <>
      <Flex>
        <Button onClick={add}> + </Button>
        <Text pt="2">{count} </Text>
        <Button onClick={subtract}> - </Button>
        <Button onClick={() => setCount(10)}> Reset </Button>
      </Flex>
    </>
  );
}

export default ItemCount;
