// CustomerDetailsForm.js
import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Stack, HStack } from '@chakra-ui/react';

const CustomerDetailsForm = ({ onDataChange }) => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    invoiceDate: new Date().toISOString().slice(0, 10), // Default to today's date
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10), // Default to one week from today
    invoiceNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
    onDataChange({ ...customerDetails, [name]: value });
  };

  return (
    <form >
      <Stack spacing={4}>
        <HStack>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={customerDetails.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input type="text" name="address" value={customerDetails.address} onChange={handleChange} />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl id="invoiceDate">
            <FormLabel>Invoice Date</FormLabel>
            <Input type="date" name="invoiceDate" value={customerDetails.invoiceDate} onChange={handleChange} />
          </FormControl>
          <FormControl id="dueDate">
            <FormLabel>Due Date</FormLabel>
            <Input type="date" name="dueDate" value={customerDetails.dueDate} onChange={handleChange} />
          </FormControl>
          <FormControl id="invoiceNumber">
            <FormLabel>Invoice Number</FormLabel>
            <Input type="text" name="invoiceNumber" value={customerDetails.invoiceNumber} onChange={handleChange} />
          </FormControl>
        </HStack>
  
      </Stack>
    </form>
  );
};

export default CustomerDetailsForm;
