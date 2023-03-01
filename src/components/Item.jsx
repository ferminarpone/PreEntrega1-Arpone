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
  GridItem,
  ButtonGroup,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function Item({ nombre, precio, id, img }) {
  return (
    <>
      <GridItem w="100%">
        <Card maxW={{sm:"80%",md:"100%"}} m="auto" height="100%">
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
            <ButtonGroup spacing="2" m="auto">
              
                <Button variant="solid" colorScheme="gray" color="brown">
                  Go to detail
                </Button>
                <Spacer />
                <Button variant="solid" colorScheme="gray" color="brown">
                  Add to cart
                </Button>
             
            </ButtonGroup>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  );
}

export default Item;
