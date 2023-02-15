import { Heading, Box, Text } from "@chakra-ui/react";

function ItemListContainer({greeting}) {
  return (
    <>
    <Box textAlign="center" >
    <Heading fontSize="2xl" mt="10" >{greeting}</Heading>
    <Text mt="10"> Fabricamos todo tipo de muebles y artefactos de estilo industrial.</Text>
    <Text mt="10">
    ¿Tenes una idea, pero no lo conseguis?
    Nosotros lo fabricamos.
    </Text>   
    <Text mt="10">
    ¿Tu idea no te convence?
    Nosotros te inspiramos.
    </Text>
    </Box>
    </>
  )
}

export default ItemListContainer

