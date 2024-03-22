import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = (props) => {
    const { website,phone,email,name } = props.companyInfo;
    return (
        <Box mt={8} textAlign="center">
            <Text fontSize="sm">
                <Text as="span" fontWeight="bold">Website:</Text> {website}
            </Text>
            <Text fontSize="sm">
                <Text as="span" fontWeight="bold">Name:</Text> {name}
            </Text>
            <Text fontSize="sm">
                <Text as="span" fontWeight="bold">Email:</Text> {email}
            </Text>
            <Text fontSize="sm">
                <Text as="span" fontWeight="bold">Contact:</Text> {phone}
            </Text>
        </Box>
    );
}

export default Footer;
