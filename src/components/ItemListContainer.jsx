import { Heading } from "@chakra-ui/react";
import ItemCount from "./ItemCount";


function ItemListContainer({ greeting }) {

  const stock = 15;

  return (
    <>
      <Heading textAlign="center" fontSize="2xl" mt="10">
        {greeting}
      </Heading>
      <ItemCount stock={stock} />
    </>
  );
}

export default ItemListContainer;
