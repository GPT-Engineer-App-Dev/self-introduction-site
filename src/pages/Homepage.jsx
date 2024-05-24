import { Box, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/images/profile.jpg"
          alt="Profile Photo"
        />
        <Heading as="h1" size="xl">Welcome to My Personal Website</Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate web developer with a love for creating dynamic and user-friendly web applications.
        </Text>
      </VStack>
    </Container>
  );
};

export default Homepage;