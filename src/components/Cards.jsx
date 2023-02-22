import DB from "../assets/DB.json";
import { useState, useEffect } from "react";
import {
  Card,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Image,
  Grid,
  GridItem,
  Container,
  Box,
  Flex,
} from "@chakra-ui/react";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(DB);
  }, []);

  return (
    <>
      <Container maxW="6xl">
        <Grid templateColumns=
        {{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)"}}
         gap="6">
          {cards.map((card) => (
            <GridItem w="100%" key={card.id}>
              <Card maxW="100%" height="100%">
                <CardBody>
                  <Image
                    src={card.img}
                    alt={`MOTO ` + card.nombre}
                  />
                  <Stack mt="4" spacing="2">
                    <Heading size="sm">{card.nombre}</Heading>
                    <Text color="gray" fontSize="md">
                      €{card.precio}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    
                  <Button variant="solid" colorScheme="gray" m="auto"  color="brown">
                    Add to cart
                  </Button>
                  
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
