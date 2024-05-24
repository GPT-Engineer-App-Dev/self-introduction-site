import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl">Contact</Heading>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
        <Button colorScheme="blue" mt={4}>Send</Button>
      </VStack>
    </Container>
  );
};

export default Contact;