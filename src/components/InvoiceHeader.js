import React from 'react';
import { Box,  Heading, Text, Stack } from '@chakra-ui/react';
const InvoiceHeader=(props)=>{
    const {name,address}=props.companyInfo;   
    return(
        <Stack spacing={4} direction="row" justify="space-around" marginBottom={10}>
        <div>
            
        </div>
        <Box >
            <Heading size="lg">{name}</Heading>
            <Text>{address}</Text>
        </Box>
        
    </Stack>
    );
}

export default InvoiceHeader;