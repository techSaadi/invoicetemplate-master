import React from 'react';
import { Divider,Box, Button, Center, Heading } from '@chakra-ui/react';

import InvoiceHeader from '../components/InvoiceHeader';
import CustomerInfo from '../components/CustomerInfo';
import InvoiceItemsTable from '../components/InvoiceItemsTable';
import Footer from '../components/Footer';
import Totals from '../components/Totals';

const Invoice = () => {
  const invoiceData = JSON.parse(localStorage.getItem('invoiceData'));
    // console.log(invoiceData)
  return (
    <Center h="auto" bgGradient="linear(to-r, teal.500, green.500)" pt={10} pb={10} >

    <Box padding={10} borderRadius="md" shadow="lg" bg="white" w="100vh" style={{ pageBreakInside: 'avoid' }}>
      <Button colorScheme="blue" onClick={() => window.print()} marginBottom={10}>
        Print/Download
      </Button>
      <Heading>Invoicer</Heading>
      <div style={{ margin: '20px' }}>
        <InvoiceHeader companyInfo={invoiceData.company}/>
      </div>
      <div style={{ margin: '20px' }}>
        <CustomerInfo customerInfo={invoiceData.customer} />
      </div>
      <Divider marginY={4} />
      <div style={{ margin: '20px' }}>
        <InvoiceItemsTable invoiceItems={invoiceData.items} />
      </div>
      <div style={{ margin: '20px' }}>
        <Totals invoiceItems={invoiceData.items} />
      </div>
      <Divider marginY={4} />
      <Footer companyInfo={invoiceData.company}/>
    </Box>
    </Center>

  );
};

export default Invoice;
