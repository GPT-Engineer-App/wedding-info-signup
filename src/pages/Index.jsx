import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      title: "Registration Successful.",
      description: "You have successfully registered for the wedding event!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1599462616558-2b75fd26a283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlfGVufDB8fHx8MTcxNDE0NTQwMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Couple" />
        <Heading as="h1" size="xl" textAlign="center">
          <FaHeart /> Emma & Chris's Wedding <FaHeart />
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Join us to celebrate our special day!
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4} align="stretch">
            <Flex alignItems="center">
              <FaCalendarAlt />
              <Text ml={2}>Saturday, 18th November 2023</Text>
            </Flex>
            <Flex alignItems="center">
              <FaMapMarkerAlt />
              <Text ml={2}>The Grand Hall, Downtown, Springfield</Text>
            </Flex>
          </VStack>
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <Input id="name" placeholder="John Doe" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input id="email" type="email" placeholder="john@example.com" />
            </FormControl>
            <Button leftIcon={<FaUserPlus />} colorScheme="pink" type="submit">
              Register
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Index;
