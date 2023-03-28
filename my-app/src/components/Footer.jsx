import { Flex } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex w="100%" >
 <Flex w={["90%", "90%", "90%", "100%", "100%"]} px={[0, 0, 0, "5", "5"]} m="auto" flexDir={"row"} alignItems="center" justifyContent={"space-between"} borderTop="1px solid #D9D8D6" py="20px"></Flex>
    </Flex>
  )
}

export default Footer