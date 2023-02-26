import CartWidget from "./CartWidget";
import icono from "../assets/img/logo.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <>
      <Flex id="navBar">
        <Image boxSize="200" height="50" src={icono} alt="Dan Abramov" />
        <Spacer />
        <Menu>
          <MenuButton
            className="menuButton"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            MOTOS
          </MenuButton>
          <MenuList>
            <MenuItem
              _hover={{
                color: "brown",
              }}
              fontWeight="bold"
              fontSize="14"
            >
              ROADSTERS
            </MenuItem>
            <MenuItem
              _hover={{
                color: "brown",
              }}
              fontWeight="bold"
              fontSize="14"
            >
              ADVENTURE
            </MenuItem>
            <MenuItem
              _hover={{
                color: "brown",
              }}
              fontWeight="bold"
              fontSize="14"
            >
              MODERN CLASSICS
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
          <CartWidget />
      </Flex>
    </>
  );
}

export default NavBar;
