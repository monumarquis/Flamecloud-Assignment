import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/Logo.svg"
import Discord from "../assets/discord.svg"
import { BiChevronDown } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const handleNavigation = (route) => {
        navigate(`/${route}`)
    }
    return (
        <Flex w="100%" >
            <Flex w={"100%"} px={["5", '5', "9", "9", "9"]} m="auto" flexDir={"row"} alignItems="center" justifyContent={"space-between"} borderBottom="1px solid #D9D8D6" py="20px" >
                {/* Ist Portion */}
                <Flex flexDir={"row"} onClick={() => handleNavigation("")} cursor="pointer" >
                    <Image src={Logo} alt="Logo" mr="7.2px" />
                    <Text color={"#111822"} fontSize={["16px","16px","20px","20px","26px"]} fontWeight={"600"} lineHeight="31px" >CreativeProxies</Text>
                </Flex>
                
                {/* 2nd Portion */}
                <Flex flexDir={"row"} alignItems="center" justifyContent={"space-between"} display={["none", "none", "none", "flex", "flex"]} >
                    <Flex mr={["130px" ,"130px" ,"130px" ,"10px" ,"130px" ]}>
                        <Text color={"#111822"} fontSize="16px" mr={["30px","30px","30px","20px","30px"]} fontWeight={"400"} lineHeight="19.2px">Pricing</Text>
                        <Flex flexDir={"row"} alignItems="center" mr={["30px","30px","30px","20px","30px"]} >
                            <Text color={"#111822"} fontSize="16px" mr="4px" fontWeight={"400"} lineHeight="19.2px">Explore Tools</Text>
                            <BiChevronDown fontSize={"20px"} color={"#111822"} />
                        </Flex>
                        <Flex flexDir={"row"} alignItems="center" mr={["30px","30px","30px","20px","30px"]}>
                            <Text color={"#111822"} fontSize="16px" mr="4px" fontWeight={"400"} lineHeight="19.2px">Resources</Text>
                            <BiChevronDown fontSize={"20px"} color={"#111822"} />
                        </Flex>
                        <Text mr={["30px","30px","30px","20px","30px"]} color={"#111822"} fontSize="16px" fontWeight={"400"} lineHeight="19.2px">FAQs</Text>
                        <Text mr={["30px","30px","30px","20px","30px"]} color={"#111822"} fontSize="16px" fontWeight={"400"} lineHeight="19.2px">Blogs</Text>
                    </Flex>
                    <Flex flexDir={"row"} alignItems="center" display={["none","none","none","none","flex"]} >
                        <Image src={Discord} alt="Logo" mr="5.7px" />
                        <Text color={"#5865F2"} fontSize="16px" fontWeight={"500"} lineHeight="19px" >Join Discord</Text>
                    </Flex>
                    <Divider  display={["none","none","none","none","initial"]} mx={["22px","22px","22px","2px","22px"]} orientation='vertical' border="1px" borderColor={'#D9D8D6'} h="30px" />
                    <Text color={"#111822"} fontSize="16px" fontWeight={"400"} lineHeight="19.2px">Login</Text>
                </Flex>
                {/* Third portion */}
                <Flex>
                    <Flex py="10px" px={["15px","15px","15px","22px","22px"]} cursor={"pointer"} flexDir={"row"} alignItems="center" justifyContent={"space-between"} onClick={() => handleNavigation("checker")} bg="#077BFF" borderRadius={"5px"} >
                        <Text color={"#fff"} fontSize={["16px","16px","16px","16px","16px"]} fontWeight={"600"} lineHeight="19.2px">Get Started</Text>
                    </Flex>

                    {/* Hamburger */}
                    <Flex ml="10px" display={["flex", "flex", "flex", "none", "none"]} flexDir={"row"} alignItems="center" justifyContent={"space-between"} bg="rgba(7, 123, 255, 0.25)" px="14px" py="7px" borderRadius={"8.52px"} >
                        <GiHamburgerMenu color='#077BFF' fontSize={"25px"} m="0" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar