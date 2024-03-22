// CompanyDetailsForm.js
import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Stack,  HStack } from '@chakra-ui/react';

const CompanyDetailsForm = ({ onDataChange }) => {
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    address: '',
    email: '',
    website: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails({ ...companyDetails, [name]: value });
    onDataChange({ ...companyDetails, [name]: value });
  };

  return (
    <form >
      <Stack spacing={4}>
        <HStack>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={companyDetails.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input type="text" name="address" value={companyDetails.address} onChange={handleChange} />
          </FormControl>
        </HStack>
        <HStack>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={companyDetails.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="website">
            <FormLabel>Website</FormLabel>
            <Input type="text" name="website" value={companyDetails.website} onChange={handleChange} />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input type="text" name="phone" value={companyDetails.phone} onChange={handleChange} />
          </FormControl>
        </HStack>
        {/* <Button colorScheme="blue" type="submit">Submit</Button> */}
      </Stack>
    </form>
  );
};

export default CompanyDetailsForm;
