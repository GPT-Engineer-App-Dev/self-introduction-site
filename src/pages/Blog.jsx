import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Blog</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={5} w="100%">
          <Heading as="h2" size="lg">Placeholder Article</Heading>
          <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Blog;