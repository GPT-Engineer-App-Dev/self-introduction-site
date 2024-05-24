import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex maxW="container.md" mx="auto" justify="space-between">
        <Link as={NavLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Home
        </Link>
        <Link as={NavLink} to="/portfolio" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Portfolio
        </Link>
        <Link as={NavLink} to="/about" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          About
        </Link>
        <Link as={NavLink} to="/blog" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Blog
        </Link>
        <Link as={NavLink} to="/contact" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Contact
        </Link>
        <Link as={NavLink} to="/resume" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Resume
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;