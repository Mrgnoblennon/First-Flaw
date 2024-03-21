import React from "react";

import { Text, Box, FormControl, Input, FormLabel, Select } from '@chakra-ui/react';

const Delivery =() => {
  return(
    <Box mb={"50px"}>
      <Text fontWeight={"bold"} fontSize={"2xl"} mb={"20px"}>Delivery</Text>

      <FormControl mb={"20px"}>
        <Input placeholder={"First Name"}></Input>
      </FormControl>

      <FormControl mb={"20px"}>
        <Input placeholder="Last Name"></Input>
      </FormControl>

      <FormControl mb={"20px"}>
        <Input placeholder="Address"></Input>
      </FormControl>

      <FormControl mb={"20px"}>
        <Input placeholder="City"></Input>
      </FormControl>

      <FormControl mb={"20px"}>
        <Select placeholder="State/Territory">
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
        <Input placeholder="Post Code"></Input>
      </FormControl>

      <FormControl mb={"20px"}>
        <Input placeholder="Phone Number"></Input>
      </FormControl>

    </Box>
  )
}

export default Delivery;