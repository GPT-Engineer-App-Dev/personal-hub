import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50" p={4}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="teal.500">Hello World</Heading>
        <Text fontSize="lg" color="gray.700">Welcome to my personal website</Text>
      {user ? (
          <>
            <Text fontSize="lg" color="gray.700">
              Logged in as {user.email}
            </Text>
            <Button colorScheme="teal" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button colorScheme="teal" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button colorScheme="teal" onClick={() => navigate("/register")}>
              Register
            </Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;