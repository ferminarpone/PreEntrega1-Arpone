import data from "../data.json";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
console.log(product)
  const {id} = useParams();

  console.log(id);

  useEffect(() => {
    fetching().then((pr) => setProduct(pr));
  }, []);

  const getCards = () => {
    return new Promise((resolve, reject) => {

      resolve(data);
/*      No es mas necesario el setTimeout
     setTimeout(() => {
        resolve(data);
      }, 2000); */
    });
  };

  const fetching = async () => {
    try {
      const dataFetched = await getCards();
      const detail = dataFetched.find((pr) => pr.id == id);
      return detail;
      //setProduct(dataFetched);
    } catch {
      console.error("No se encontraron datos");
    }
  };
  

  return (
      <ItemDetail product={product} />
  );
}

export default ItemDetailContainer;
