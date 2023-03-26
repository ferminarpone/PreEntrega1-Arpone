import { Box, Heading } from "@chakra-ui/react";

const Greeting = () => {
  return (
    <>
      <Box
        bgImage="https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/adventure-touring/2020%20tiger%20900/tiger-900-gt-pro-20my-az4i2677-ab-1---potential-option_675.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h={{ base: "646" }}
      >
        <Heading
          textAlign="center"
          width={{ base: "500", md: "700px" }}
          m="auto"
          color={{ base: "rgb(37, 39, 39)", md: "white" }}
          p="20"
        >
          WELCOME TO THE TRIUMPH SITE
        </Heading>
      </Box>
    </>
  );
};

export default Greeting;
