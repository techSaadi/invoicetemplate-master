import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Totals = ({ invoiceItems }) => {
  // Calculate total amount
  const total = invoiceItems.reduce((acc, item) => {
    return acc + (item.quantity * item.price);
  }, 0);

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" textAlign="right">
        Total Amount: ${total.toFixed(2)}
      </Text>
    </Box>
  );
};

export default Totals;
