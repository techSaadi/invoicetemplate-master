// InvoiceItemForm.js
import React from 'react';
import { FormControl, FormLabel, Input, IconButton, HStack, Stack} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const InvoiceItemForm = ({ index, item, onChange, onRemove }) => {
  // Check if item is null or undefined before accessing its properties
  if (!item) {
    return null; // or handle the case when item is undefined
  }

  return (
    <Stack spacing={18}>
    <HStack spacing={4}>
      <FormControl id={`itemName-${index}`}>
        <FormLabel>Item Name</FormLabel>
        <Input
          type="text"
          name={`itemName-${index}`}
          value={item.itemName}
          onChange={(e) => onChange(index, 'itemName', e.target.value)}
          placeholder="Enter item name"
        />
      </FormControl>
      <FormControl id={`itemQuantity-${index}`}>
        <FormLabel>Quantity</FormLabel>
        <Input
          type="number"
          name={`itemQuantity-${index}`}
          value={item.quantity}
          onChange={(e) => onChange(index, 'quantity', e.target.value)}
          placeholder="Enter quantity"
        />
      </FormControl>
      </HStack>
      
      <HStack spacing={4}>
        
      <FormControl id={`itemPrice-${index}`}>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          name={`itemPrice-${index}`}
          value={item.price}
          onChange={(e) => onChange(index, 'price', e.target.value)}
          placeholder="Enter price"
        />
      </FormControl>
      <FormControl id={`itemDescription-${index}`}>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          name={`itemDescription-${index}`}
          value={item.description}
          onChange={(e) => onChange(index, 'description', e.target.value)}
          placeholder="Enter description"
        />
      </FormControl>
      <IconButton
        aria-label="Remove Item"
        icon={<CloseIcon />}
        colorScheme="red"
        variant="ghost"
        onClick={() => onRemove(index)}
      />
    </HStack>
    </Stack>

  );
};

export default InvoiceItemForm;
