import React, { useState } from "react";
import { Text, Box, FormControl, Input, Select, Button, FormErrorMessage } from '@chakra-ui/react';

const Delivery = ({ deliveryDetails, setDeliveryDetails }) => {
  const [formErrors, setFormErrors] = useState({});

  const validateInput = (name, value) => {
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: value ? '' : 'This field is required'
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateInput(name, value);
    setDeliveryDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    Object.entries(deliveryDetails).forEach(([key, value]) => {
      if (!value) {
        isValid = false;
        validateInput(key, value);
      }
    });

    if (isValid) {
      // Here you would typically handle the form submission
      console.log("Form is valid, submitting data:", deliveryDetails);
    }
  };

  return (
    <Box mb={"50px"}>
      <Text fontWeight={"bold"} fontSize={"2xl"} mb={"20px"}>Delivery Information</Text>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired isInvalid={!!formErrors.firstName} mb={"20px"}>
          <Input
            name="firstName"
            placeholder="First Name"
            value={deliveryDetails.firstName}
            onChange={handleChange}
            required
          />
          {formErrors.firstName && <FormErrorMessage>{formErrors.firstName}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={!!formErrors.lastName} mb={"20px"}>
          <Input
            name="lastName"
            placeholder="Last Name"
            value={deliveryDetails.lastName}
            onChange={handleChange}
            required
          />
          {formErrors.lastName && <FormErrorMessage>{formErrors.lastName}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={!!formErrors.address} mb={"20px"}>
          <Input
            name="address"
            placeholder="Address"
            value={deliveryDetails.address}
            onChange={handleChange}
            required
          />
          {formErrors.address && <FormErrorMessage>{formErrors.address}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={!!formErrors.city} mb={"20px"}>
          <Input
            name="city"
            placeholder="City"
            value={deliveryDetails.city}
            onChange={handleChange}
            required
          />
          {formErrors.city && <FormErrorMessage>{formErrors.city}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={!!formErrors.state} mb={"20px"}>
          <Select
            name="state"
            value={deliveryDetails.state}
            onChange={handleChange}
            placeholder="Select State/Territory"
            required
          >
            {/* Option values */}
            <option value="Western Australia">Western Australia</option>
            <option value="Australian Capital Territory">Australian Capital Territory</option>
            <option value="New South Wales">New South Wales</option>
            <option value="Northern Territory">Northern Territory</option>
            <option value="Queensland">Queensland</option>
            <option value="South Australia">South Australia</option>
            <option value="Tasmania">Tasmania</option>
            <option value="Victoria">Victoria</option>
          </Select>
          {formErrors.state && <FormErrorMessage>{formErrors.state}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={!!formErrors.postCode} mb={"20px"}>
          <Input
            name="postCode"
            placeholder="Post Code"
            value={deliveryDetails.postCode}
            onChange={handleChange}
            required
          />
          {formErrors.postCode && <FormErrorMessage>{formErrors.postCode}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={!!formErrors.phoneNumber} mb={"20px"}>
          <Input
            name="phoneNumber"
            placeholder="Phone Number"
            value={deliveryDetails.phoneNumber}
            onChange={handleChange}
            required
          />
          {formErrors.phoneNumber && <FormErrorMessage>{formErrors.phoneNumber}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={!!formErrors.email} mb={"20px"}>
          <Input
            name="email"
            placeholder="Email"
            value={deliveryDetails.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && <FormErrorMessage>{formErrors.email}</FormErrorMessage>}
        </FormControl>

      </form>
    </Box>
  );
};

export default Delivery;
