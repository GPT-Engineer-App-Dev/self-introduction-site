import { Box, Container, Heading, Link, VStack } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Resume</Heading>
        <Link href="/resume.pdf" isExternal color="blue.500">
          Download My Resume (PDF)
        </Link>
      </VStack>
    </Container>
  );
};

export default Resume;