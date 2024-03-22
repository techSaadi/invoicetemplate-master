// Home.js
import React from 'react';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Box p={8}>
      <VStack spacing={4} align="center">
        <Heading>Welcome to Our Shipping Web App</Heading>
        <Text>
          We're here to help you with all your shipping needs. Get started by exploring our services.
        </Text>
        <Link to="/create-invoice">
        <Button colorScheme="blue">Create Invoice</Button>
      </Link>
      <Link to="/invoice">
        <Button colorScheme="green">See Invoice</Button>
      </Link>      </VStack>
    </Box>
  );
}

export default Home;
