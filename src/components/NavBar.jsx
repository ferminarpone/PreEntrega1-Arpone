import CartWidget from "./CartWidget";
import icono from "../assets/img/logo_darkbg.png";
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
        <Image ml="5" height="30px" w="150" src={icono} alt="Dan Abramov" />
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
            <MenuItem color="rgb(37, 39, 39)"
              _hover={{
                color: "brown",
              }}
              fontWeight="bold"
              fontSize="14"
            >
              ROADSTERS
            </MenuItem>
            <MenuItem color="rgb(37, 39, 39)"
              _hover={{
                color: "brown",
              }}
              fontWeight="bold"
              fontSize="14"
            >
              ADVENTURE
            </MenuItem>
            <MenuItem color="rgb(37, 39, 39)"
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
