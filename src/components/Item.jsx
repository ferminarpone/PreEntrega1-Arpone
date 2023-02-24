import {
  Card,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  CardBody,
  CardFooter,
  Image,
  GridItem
} from "@chakra-ui/react";

function Item({ nombre, precio, id, img }) {
  return (
    <>
      <GridItem w="100%" key={id}>
        <Card maxW="100%" height="100%">
          <CardBody>
            <Image src={img} alt={`MOTO ` + nombre} />
            <Stack mt="4" spacing="2">
              <Heading size="sm">{nombre}</Heading>
              <Text color="gray" fontSize="md">
                €{precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button variant="solid" colorScheme="gray" m="auto" color="brown">
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  );
}

export default Item;
