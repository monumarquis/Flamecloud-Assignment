import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/Logo.svg"
const Navbar = () => {
    return (
        <Flex w="100%" flexDir={"row"} alignItems="center" justifyContent={"space-between"} >
            <Flex flexDir={"row"}>
                <Image src={Logo} alt="Logo" mr="7.2px"/>
                <Text color={"#111822"} fontSize="26px" fontWeight={"600"} lineHeight="31px" >CreativeProxies</Text>
            </Flex>
        </Flex>
    )
}

export default Navbar