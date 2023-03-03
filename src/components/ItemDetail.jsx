import {Link} from 'react-router-dom'
import {
  Card,
  Stack,
  Heading,
  Text,
  Button,
  CardBody,
  CardFooter,
  Image,
  Container,
} from "@chakra-ui/react";

function ItemDetail({ product }) {
  return (
    <Container maxW="6xl">
      <Card
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
        variant="outline"
        width="100%"
        height="100%"
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

          <CardFooter>
            <Link to={"/cart"}>
              <Button variant="solid" colorScheme="gray" m="auto" color="brown">
                Add to cart
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
}

export default ItemDetail;
