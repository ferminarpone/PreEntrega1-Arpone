import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import './styles.css'

function App() {
  const saludo = "Bienvenidos al galpon de Nino";
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting={saludo} />
      </ChakraProvider>
    </>
  );
}


export default App;
