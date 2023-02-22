import { Heading } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import Cards from "./Cards";

function ItemListContainer({ greeting }) {
  const stock = 15;

  return (
    <div id="Item">
      <Heading textAlign="center" fontSize="2xl" p="10" color="aliceblue">
        {greeting}
      </Heading>
      {/* <ItemCount stock={stock} /> */}
      <Cards />
    </div>
  );
}

export default ItemListContainer;
