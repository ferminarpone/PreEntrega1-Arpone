import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import Counter from "./components/Counter";

function App() {
  const saludo = "Bienvenido a tu sitio de motos";
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting={saludo} />
        <Counter/>
      </ChakraProvider>
    </>
  );
}

export default App;
