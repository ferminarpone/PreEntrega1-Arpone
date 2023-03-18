import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
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

 import {CarritoContext} from '../context/CartContext';
 import {useContext} from 'react';

function ItemDetail({ product }) {

 const {cart, setCart} = useContext(CarritoContext);
 console.log(cart)

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
           <ItemCount stock={product.stock}/>
            {/* AGREGAR <Link to={"/cart"}> */}
              <Button  variant="solid" colorScheme="gray" h="8" w="20" p="0" fontSize="12" color="brown" onClick={()=>setCart(product)}>
                Add to cart
              </Button>
            {/* </Link> */}
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
}

export default ItemDetail;
