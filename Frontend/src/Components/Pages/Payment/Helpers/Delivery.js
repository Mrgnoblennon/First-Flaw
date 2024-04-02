import React, { useState } from "react";
import { Text, Box, FormControl, Input, FormLabel, Select, Button } from '@chakra-ui/react';

const Delivery = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async () => {
    const userDetails = {
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode: postCode,
      phone: phoneNumber,
    };

    console.log(userDetails);
    // TODO: Send `userDetails` to your backend to handle Stripe customer creation/updation
  };

  return (
    <Box mb={"50px"}>
      <Text fontWeight={"bold"} fontSize={"2xl"} mb={"20px"}>Delivery</Text>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <FormControl mb={"20px"} isRequired>
          <Input placeholder={"First Name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </FormControl>

        <FormControl mb={"20px"} isRequired>
          <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </FormControl>

        <FormControl mb={"20px"} isRequired>
          <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </FormControl>

        <FormControl mb={"20px"} isRequired>
          <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
        </FormControl>

        <FormControl mb={"20px"} isRequired>
  <Select value={state} onChange={(e) => setState(e.target.value)} required>
    <option value="" disabled selected>Select State/Territory</option>
    <option value="Western Australia">Western Australia</option>
    <option value="Australian Capital Territory">Australian Capital Territory</option>
    <option value="New South Wales">New South Wales</option>
    <option value="Northern Territory">Northern Territory</option>
    <option value="Queensland">Queensland</option>
    <option value="South Australia">South Australia</option>
    <option value="Tasmania">Tasmania</option>
    <option value="Victoria">Victoria</option>
  </Select>
</FormControl>

        <FormControl mb={"20px"} isRequired>
          <Input placeholder="Post Code" value={postCode} onChange={(e) => setPostCode(e.target.value)} required />
        </FormControl>

        <FormControl mb={"20px"} isRequired>
          <Input placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </FormControl>

      </form>
    </Box>
  );
};

export default Delivery;
