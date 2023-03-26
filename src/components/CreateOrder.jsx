import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { CarritoContext } from "../context/CartContext";
import { useContext } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const CreateOrder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const { cart, totalAmount, setOrderId } = useContext(CarritoContext);
  
  const dBase = getFirestore();
  const orderCollection = collection(dBase, "orden");
  const order = {
    name,
    email,
    productos: cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: `€${item.precio}`,
      cantidad: item.quantity,
    })),
    total: `€ ${totalAmount()}`,
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <div className="orden">
      <h1>CreateOrder</h1>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="First name"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <Button
          type="submit"
          h="6"
          bg="rgb(55, 55, 230)"
          color="aliceblue"
          _hover={{ color: "rgb(55, 55, 230)", bg: "gray.200" }}
        >
          Buy
        </Button>
      </form>
      {/* {orderId != null ? 
      
      <Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
        Nro. de orden: {orderId}
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={removeCart}
      />
    </Alert>
      : ""} */}

      {/* <p>Nro. de orden: {orderId}</p> */}
    </div>
  );
};

export default CreateOrder;
