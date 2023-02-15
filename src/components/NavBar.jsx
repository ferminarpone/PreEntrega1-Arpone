import CartWidget from "./CartWidget";
import icono from "../assets/img/logo.png";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Spacer,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <>
      <Flex>
        <Image boxSize="45px" src={icono} alt="Dan Abramov" ml="2" mt="2" />
        <Box p="4">
          <Text fontSize="20px">EL GALPON DE NINO</Text>
        </Box>
        <Spacer />
        <Box p="4">
          <Tabs align="end">
            <TabList>
              <Tab fontSize="16px">Home</Tab>
              <Tab fontSize="16px">Productos</Tab>
              <Tab fontSize="16px">Nosotros</Tab>
              <Tab fontSize="16px">Contacto</Tab>
              <Tab fontSize="16px">
                <CartWidget />
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
}

export default NavBar;
