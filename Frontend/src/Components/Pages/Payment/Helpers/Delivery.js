import React, { useState } from "react";

import { Text, Box, FormControl, Input, FormLabel, Select, Button } from '@chakra-ui/react';

const Delivery =() => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async () => {
    // Construct the user details object
    const userDetails = {
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode: postCode,
      phone: phoneNumber,
    };

    // TODO: Send `userDetails` to your backend to handle Stripe customer creation/updation
    console.log(userDetails);
  };

  return(
    <Box mb={"50px"}>
      <Text fontWeight={"bold"} fontSize={"2xl"} mb={"20px"}>Delivery</Text>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <FormControl mb={"20px"}>
          <Input placeholder={"First Name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </FormControl>

        <FormControl mb={"20px"}>
          <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </FormControl>

        <FormControl mb={"20px"}>
          <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>

        <FormControl mb={"20px"}>
          <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        </FormControl>

        <FormControl mb={"20px"}>
          <Select placeholder="State/Territory" value={state} onChange={(e) => setState(e.target.value)}>
            <option>Western Australia</option>
            <option>Australian Capital Territory</option>
            <option>New South Wales</option>
            <option>Northern Territory</option>
            <option>Queensland</option>
            <option>South Australia</option>
            <option>Tasmania</option>
            <option>Victoria</option>
          </Select>
        </FormControl>

        <FormControl mb={"20px"}>
          <Input placeholder="Post Code" value={postCode} onChange={(e) => setPostCode(e.target.value)} />
        </FormControl>

        <FormControl mb={"20px"}>
          <Input placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </FormControl>

        <Button type="submit" colorScheme="blue">Submit</Button>
      </form>
    </Box>
  );
};
export default Delivery;