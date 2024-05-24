import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Portfolio</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={5} w="100%">
          <Heading as="h2" size="lg">Suma</Heading>
          <Text mt={2}>A project about fish.</Text>
          <Text mt={2}><strong>Technologies used:</strong> React</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Portfolio;