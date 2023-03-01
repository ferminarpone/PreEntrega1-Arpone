import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const saludo = "Bienvenido a tu sitio de motos";
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting={saludo} />
        <ItemDetailContainer />
      </ChakraProvider>
    </>
  );
}

export default App;
