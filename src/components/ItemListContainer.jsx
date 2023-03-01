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
        <Box bgImage="https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/adventure-touring/2020%20tiger%20900/tiger-900-gt-pro-20my-az4i2677-ab-1---potential-option_675.jpg" bgSize="cover" bgPosition="center" bgRepeat="no-repeat" h={{sm:"350",md:"500"}}>
        <Heading textAlign="center" fontSize="2xl" m="auto"  color="black" p="10">
          {greeting}
        </Heading>
        </Box>
        <Heading textAlign="center" color="aliceblue" fontSize="2xl" mt="5" mb="5">
          Nuestras motos
        </Heading>
        {/* <ItemCount stock={stock} />  */}
        <ItemList product={product} />
      </Box>
    </>
  );
}

export default ItemListContainer;
