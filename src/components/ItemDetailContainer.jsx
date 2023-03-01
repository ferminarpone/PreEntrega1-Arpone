import data from "../data.json";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Box } from "@chakra-ui/react";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetching().then((pr) => setProduct(pr));
  }, []);

  const getCards = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  const fetching = async () => {
    try {
      const dataFetched = await getCards();
      const detail = dataFetched.find((pr) => pr.id == 9);
      return detail;
      //setProduct(dataFetched);
    } catch {
      console.error("No se encontraron datos");
    }
  };

  return (
    <Box bg="rgb(37, 39, 39)" pb="10" pt="10" >
      <ItemDetail product={product} />
    </Box>
  );
}

export default ItemDetailContainer;
