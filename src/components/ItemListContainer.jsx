import { Box, Heading } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";

//nuevo
import data from "../data.json";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const stock = 5;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    buscarData();
  }, []);

  const getCards = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  const buscarData = async () => {
    try {
      const dataFetched = await getCards();
      setProduct(dataFetched);
    } catch {
      console.error("No se encontraron datos");
    }
  };

  return (
    <>
      <Box bg="rgb(37, 39, 39)" pb="10">
      <Heading textAlign="center" fontSize="2xl" p="10" color="aliceblue">
        {greeting}
      </Heading>
      {/* <ItemCount stock={stock} />  */}
      <ItemList product={product}  />
      </Box>
    </>
  );
}



export default ItemListContainer;
