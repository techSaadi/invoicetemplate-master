import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const InvoiceItemsTable = ({ invoiceItems }) => {
  return (
    <Box mt={8}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Item Name</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {invoiceItems.map((item, index) => (
            <Tr key={index}>
              <Td>{item.itemName}</Td>
              <Td>{item.quantity}</Td>
              <Td>{item.price}</Td>
              <Td>{item.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default InvoiceItemsTable;
