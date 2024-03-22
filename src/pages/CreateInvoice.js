// CreateInvoice.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Heading, Center, Box, Button } from '@chakra-ui/react';
import CustomerDetailsForm from '../components/CustomerDetailsForm';
import CompanyDetailsForm from '../components/CompanyDetailsForm';
import InvoiceItemForm from '../components/InvoiceItemForm';

const CreateInvoice = () => {
    const [customerData, setCustomerData] = useState({ 
        name: '', 
        invoiceDate: new Date().toISOString().split('T')[0], // Default to today's date
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Default to one week from today
        address: '', 
        invoiceNumber: 102 
    });
    
    const [companyData, setCompanyData] = useState({ 
        name: '', 
        address: '', 
        website: '', 
        email: '', 
        phone: '' 
    });  
    const [invoiceItems, setInvoiceItems] = useState([{ itemName: '', quantity: 0, price: 0, description: '' }]);
    const navigate = useNavigate();
    const handleSubmit = () => {
      // Simulate submission by storing data in local storage
    const data=JSON.stringify( {
        customer: customerData,
        company: companyData,
        items: invoiceItems
    });
      console.log(data);
      localStorage.setItem('invoiceData', data);
  
      // Redirect to /invoice route
      
      navigate('/invoice');
    };
//   const handleCustomerSubmit = (e, customerData) => {
//     e.preventDefault();
//     console.log('Customer Data:', customerData);
//   };

//   const handleCompanySubmit = (e, companyData) => {
//     e.preventDefault();
//     console.log('Company Data:', companyData);
//   };

//   const handleInvoiceItemSubmit = (e, invoiceItemData) => {
//     e.preventDefault();
//     console.log('Invoice Item Data:', invoiceItemData);
//   };

  const handleAddItem = () => {
    setInvoiceItems([...invoiceItems, { itemName: '', quantity: 0, price: 0, description: '' }]);
  };
  const handleRemoveItem = (index) => {
    setInvoiceItems(invoiceItems.filter((item, i) => i !== index));
  };
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceItems];
    updatedItems[index][field] = value;
    setInvoiceItems(updatedItems);
  };

  return (
    <Center h="auto" bgGradient="linear(to-r, teal.500, green.500)" pt={20} pb={20}>
       <Box p={8} borderRadius="md" shadow="lg" bg="white" w="100vh">
        <Stack spacing={25} p={8} borderRadius="md">
          <Heading>Create Invoice</Heading>
          <CustomerDetailsForm  onDataChange={setCustomerData}/>
          <CompanyDetailsForm  onDataChange={setCompanyData}/>
          <Heading>Items</Heading>
          {invoiceItems.map((item, index) => (
            <InvoiceItemForm
              key={index}
              index={index}
              item={item}
              onChange={handleItemChange}

              
              onRemove={() => handleRemoveItem(index)} 
            />
          ))}
          <Button onClick={handleAddItem} colorScheme="teal">Add Item</Button>
          <Button onClick={handleSubmit} colorScheme="blue">Submit Invoice</Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default CreateInvoice;
