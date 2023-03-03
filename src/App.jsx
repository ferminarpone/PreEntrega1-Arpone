import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Greeting from './components/Greeting';
import Cart from './components/Cart';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ChakraProvider>
      <BrowserRouter>
      
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Greeting/>} />
          <Route exact path="/catalogue" element={<ItemListContainer/>} />
          <Route exact path="/category/:category" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/cart" element={<Cart/>}/> 
        </Routes>
      
      </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
