import React from 'react';
import { Box,  Heading, Text, HStack, Stack, VStack } from '@chakra-ui/react';

const CustomerInfo = (props) => {
    const {name,address,invoiceNumber,invoiceDate,dueDate}=props.customerInfo;
    console.log(address)
    return (
        <Stack spacing={4} direction="row">
            <Box flex={1}>
                <Heading size="md">{name}</Heading>
                <Text>{address}</Text>
            </Box>
            <VStack alignItems="flex-start" spacing={1}>
                
                <HStack>
                    <Text fontWeight="bold">Invoice Number:</Text>
                    <Text>{invoiceNumber}</Text>
                </HStack>
                
                <HStack>
                    <Text fontWeight="bold">Date:</Text>
                    <Text>{invoiceDate}</Text>
                </HStack>
                <HStack>
                    <Text fontWeight="bold">Due Date:</Text>
                    <Text>{dueDate}</Text>
                </HStack>
            </VStack>
        </Stack>
    );
}

export default CustomerInfo;
