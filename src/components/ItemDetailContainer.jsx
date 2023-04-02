import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  //Llamado a la DB.
  useEffect(() => {
    window.scroll(0, 0);
    const dBase = getFirestore();
    const itemDoc = doc(dBase, "motos", `${id}`);
    getDoc(itemDoc).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = { id: snapshot.id, ...snapshot.data() };
        setProduct(doc);
      }
    });
  }, []);

  return (
    <Box h="646" display="flex" alignItems="center">
      <ItemDetail product={product} />
    </Box>
  );
}

export default ItemDetailContainer;
