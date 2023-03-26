import CartWidget from "./CartWidget";
import icono from "../assets/img/logo_darkbg.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
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
        <Link to={"/"}>
          <Image ml="5" height="30px" w="150" src={icono} alt="Logo Triumph" />
        </Link>
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
            <Link to={"/catalogue"}>
              <MenuItem
                color="rgb(37, 39, 39)"
                _hover={{
                  color: "brown",
                }}
                fontWeight="bold"
                fontSize="14"
              >
                CATALOGO COMPLETO
              </MenuItem>
            </Link>
            <Link to={`/category/${"ROADSTERS"}`}>
              <MenuItem
                color="rgb(37, 39, 39)"
                _hover={{
                  color: "brown",
                }}
                fontWeight="bold"
                fontSize="14"
                pl="4"
              >
                - ROADSTERS
              </MenuItem>
            </Link>
            <Link to={`/category/${"ADVENTURE"}`}>
              <MenuItem
                color="rgb(37, 39, 39)"
                _hover={{
                  color: "brown",
                }}
                fontWeight="bold"
                fontSize="14"
                pl="4"
              >
                - ADVENTURE
              </MenuItem>
            </Link>
            <Link to={`/category/${"MODERN CLASSICS"}`}>
              <MenuItem
                color="rgb(37, 39, 39)"
                _hover={{
                  color: "brown",
                }}
                fontWeight="bold"
                fontSize="14"
                pl="4"
              >
                - MODERN CLASSICS
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Spacer />
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Flex>
    </>
  );
}

export default NavBar;
