import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { CarritoContext } from "../context/CartContext";
import { useContext } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Heading,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const CreateOrder = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState(true);
  const { cart, totalAmount, setOrderId, orderId } = useContext(CarritoContext);
  const dBase = getFirestore();
  const orderCollection = collection(dBase, "orden");
  const order = {
    name,
    lastName,
    email,
    productos: cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: `€${item.precio}`,
      cantidad: item.quantity,
    })),
    total: `€ ${totalAmount()}`,
  };
  
  //Función que devuelve el id creado en Firebase para el usuario.
  const handleSubmit = (e) => {
    e.preventDefault();
    emailCheck();
  };

  // Función que confirma que ambos correos sean iguales.
  const emailCheck = () => {
    if (email === checkEmail) {
      addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
      window.scroll(0, 0);
    } else {
      setConfirmEmail(false);
    }
  };

  return (
    <Box
      bg="white"
      p="4"
      mt="10"
      borderRadius="5px"
      ml={{ base: "0", md: "10" }}
      mr={{ base: "0", md: "10" }}
    >
      <Heading size="md" textAlign="center" color="rgb(37, 39, 39)">
        Generar orden de compra
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            size="md"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel mt="2">Apellido</FormLabel>
          <Input
            size="md"
            placeholder="Apellido"
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormLabel mt="2">Dirección de Email</FormLabel>
          <Input
            size="md"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel mt="2">Confirmar dirección de Email</FormLabel>
          <Input
            size="md"
            type="email"
            onChange={(e) => setCheckEmail(e.target.value)}
          />
        </FormControl>
        <FormLabel mt="1">Teléfono</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Número de telefono" />
        </InputGroup>
        {confirmEmail === false ? (
          <Alert status="error" mt="2" height="30px">
            <AlertIcon />
            Los correos electronicos deben coincidir.
          </Alert>
        ) : (
          ""
        )}
        <Button
          type="submit"
          h="6"
          bg="rgb(55, 55, 230)"
          color="aliceblue"
          _hover={{ color: "rgb(55, 55, 230)", bg: "gray.200" }}
          mt="3"
        >
          Comprar
        </Button>
      </form>
    </Box>
  );
};

export default CreateOrder;
