import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import data from "../data.json";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const {category} = useParams();
   console.log(category);

  useEffect(() => {
    buscarData();
  }, []);

  const getCards = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
      /* Ya no es necesario el setTimeout
       setTimeout(() => {
        resolve(data);
      }, 2000); */
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

  const filterCat = product.filter((el)=>el.categoria === category)


  return (
    <>
      
      {category? <ItemList product={filterCat} categoria={category} /> : <ItemList product={product} />}
      
    </>
  );
}

export default ItemListContainer;
