import { Heading } from "@chakra-ui/react";

function ItemListContainer({ greeting }) {
  return (
    <>
      <Heading textAlign="center" fontSize="2xl" mt="10">
        {greeting}
      </Heading>
    </>
  );
}

export default ItemListContainer;
