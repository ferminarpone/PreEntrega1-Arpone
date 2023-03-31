import Item from "./Item";
import {
  Box,
  Heading,
  Grid,
  Container,
  CircularProgress,
} from "@chakra-ui/react";

function ItemList({ product, categoria }) {
  return (
    <>
      <Box bg="rgb(37, 39, 39)" pb="10">
        <Box
          bgImage="https://images.triumphmotorcycles.co.uk/media-library/images/configurator/hero/tiger-1200_gt-explorer_my22_27a1266_ml-1920x667.jpg"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          h={{ base: "300" }}
        >
          <Heading textAlign="center" color="aliceblue" pt="7%" mb="10">
            NUESTRAS MOTOS
          </Heading>
        </Box>
        <Container maxW="6xl">
          {product == "" ? (
            <Box h="600px">
            <CircularProgress
              isIndeterminate
              color="gray"
              display="flex"
              justifyContent="center"
              m="80px"
            />
            </Box>
          ) : (
            <>
              <Heading
                color="white"
                fontSize="2xl"
                pl={{ base: "12", md: "10" }}
                pt="10"
              >
                {categoria ? categoria : "CATALOGO COMPLETO"}
              </Heading>
              <Grid
                templateColumns={{
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap="6"
                pl={{ base: "0", md: "10" }}
                pt="5"
                pr={{ base: "0", md: "10" }}
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
            </>
          )}
        </Container>
      </Box>
    </>
  );
}

export default ItemList;
