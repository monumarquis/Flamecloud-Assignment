import { Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/Logo.svg"
import Discord from "../assets/discord.svg"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    const handleNavigation = (route) => {
        navigate(`/${route}`)
    }
    return (
        <Flex w="100%"  >
            <Flex w={"100%"} flexDir={["column", "column", "column", "row", "row"]} px={["8", '8', "8", "8", "8"]} py="40px" m="auto" borderTop="1px solid #D9D8D6">
                {/* left side */}
                <Flex flexDir={["row", "row", "row", "column", "column"]} w={["95%", "95%", "95%", "23%", "16%"]} mr={["300px", "300px", "300px", "160px", "300px"]} justifyContent="space-between" >
                    <Flex flexDir={"column"} w={["48%", "48%", "30%", "100%", "100%"]} >
                        <Flex flexDir={"row"} onClick={() => handleNavigation("")} cursor="pointer"  >
                            <Image src={Logo} alt="Logo" mr="2px" />
                            <Text color={"#111822"} fontSize={["16px", "16px", "20px", "22px", "22px"]} fontWeight={"600"} lineHeight="31px" >CreativeProxies</Text>
                        </Flex>
                        <Text mb="14px" mt="6px" ml='10px' color={"#969493"} fontSize={["11px", "11px", "11px", "12px", "12px"]} fontWeight={"400"} lineHeight="16.8px" >Copyright © 2023 Creative Proxies.
                            All rights reserved.</Text>
                    </Flex>
                    <Flex alignItems="center" w={["46%", "46%", "50%", "100%", "100%"]} >
                        <Flex bg="rgba(88, 101, 242, 0.1)" border="1px solid #5865F2" w="100%" alignItems={"center"} justifyContent="center" borderRadius={"10px"} >
                            <Flex flexDir={"row"} alignItems="center" p={["8px 4.8px", "8px 4.8px", "15px 40px", "12.5px 4.8px", "12.5px 4.8px"]}  >
                                <Image src={Discord} alt="Logo" mr="6px" />
                                <Text color={"#5865F2"} fontSize={["13px", "13px", "16px", "16px", "16px"]} fontWeight={"500"} lineHeight="19px" >Join Our Discord</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                {/* Right Side */}
                <SimpleGrid columns={3} spacing={["20px", "20px", "20px", "40px", "100px"]} mt={["20px", "20px", "20px", "0px", "0px"]} ml={["7px", "7px", "7px", "0px", "0px"]} >
                    <Flex flexDir={"column"} >
                        <Text mb="13px" color={"#888c91"} fontSize="12px" fontWeight={"400"} lineHeight="16.8px" >Explore</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">Proxy Location Checker</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">IPv6 Comptability</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">Blogs</Text>
                    </Flex>
                    <Flex flexDir={"column"} >
                        <Text mb="13px" color={"#888c91"} fontSize="12px" fontWeight={"400"} lineHeight="16.8px" >Resources</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">FAQs</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">Branding</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">Network Information</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">Imprint</Text>
                    </Flex>
                    <Flex flexDir={"column"} >
                        <Text mb="13px" color={"#888c91"} fontSize="12px" fontWeight={"400"} lineHeight="16.8px" >Support</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">Status</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">Terms of Service</Text>
                        <Text mb="13px" color={"#111822"} fontSize={["12px", "12px", "16px", "16px", "16px"]} fontWeight={"400"} lineHeight="19.2px">Privacy Policy</Text>
                    </Flex>
                </SimpleGrid>
            </Flex>
        </Flex >
    )
}

export default Footer