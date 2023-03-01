import Item from "./Item";
import { Grid, Container } from "@chakra-ui/react";

function ItemList({ product }) {
  return (
    <>
      <Container maxW="6xl">
        <Grid
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg:"repeat(3, 1fr)" }}
          gap="6"
        >
          {product.map((pr) => {
            return (
              <Item
                key={pr.id}
                nombre={pr.nombre}
                categoria={pr.categoria}
                precio={pr.precio}
                id={pr.id}
                stock={pr.stock}
                img={pr.img}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default ItemList;
