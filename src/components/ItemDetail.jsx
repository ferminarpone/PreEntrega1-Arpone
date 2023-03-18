import ItemCount from './ItemCount';
import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Image,
  Container,
} from "@chakra-ui/react";


function ItemDetail({ product }) {

  return (
    <Container maxW="5xl">
      <Card
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
        variant="outline"
        width="100%"
        height="100%"
        border="none" 
      >
        <Image
          objectFit="cover"
          maxW={{ base: "30%", sm: "100%", md: "60%", lg: "70%" }}
          src={product.img}
          alt={product.nombre}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{product.nombre}</Heading>
            <Text py="2">{product.descripcion}</Text>
          </CardBody>
          <CardFooter display="flex" justifyContent="space-between">
           <ItemCount id={product.id}
           precio={product.precio}
           img = {product.img}
           nombre = {product.nombre}
           stock = {product.stock}
           />
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
}

export default ItemDetail;
