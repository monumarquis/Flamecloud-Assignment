import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/Logo.svg"
import Discord from "../assets/discord.svg"
import { BiChevronDown } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const handleNavigation = (route) => {
        navigate(`/${route}`)
    }
    return (
        <Flex w="100%" pos="fixed" top="0" left="0" bg="#FFFFFF" zIndex={"1000"} >
            <Flex w={"80%"} m="auto" flexDir={"row"} alignItems="center" justifyContent={"space-between"} borderBottom={["0.2px solid #D9D8D6", "0.2px solid #D9D8D6", "1px solid #D9D8D6", "1px solid #D9D8D6", "1px solid #D9D8D6"]} pt={["20px", "20px", "20px", "20px", "20px"]} pb={["20px", "20px", "20px", "20px", "20px"]} >
                {/* Ist Portion */}
                <Flex flexDir={"row"} onClick={() => handleNavigation("")} cursor="pointer" alignItems={"center"} >
                    <Image src={Logo} alt="Logo" mr={["1.76px", "5.76px", "8.76px", "8.76px", "5.76px"]} w={["30px", "30px", "20px", "20px", "40px"]} h={["30px", "30px", "20px", "20px", "40px"]} />
                    <Text color={"#111822"} fontSize={["17px", "17px", "20px", "20px", "24px"]} fontWeight={"600"} lineHeight="31px" >CreativeProxies</Text>
                </Flex>

                {/* 2nd Portion */}
                <Flex flexDir={"row"} alignItems="center" justifyContent={"space-between"} display={["none", "none", "none", "flex", "flex"]} >
                    <Flex mr={["130px", "130px", "130px", "10px", "100px"]}>
                        <Text letterSpacing={"-0.02em"} color={"#111822"} fontSize="17px" mr={["30px", "30px", "30px", "20px", "25px"]} fontWeight={"400"} lineHeight="19.2px">Pricing</Text>
                        <Flex flexDir={"row"} alignItems="center" mr={["30px", "30px", "30px", "20px", "25px"]} >
                            <Text letterSpacing={"-0.02em"} color={"#111822"} fontSize="17px" mr="5px" fontWeight={"400"} lineHeight="19.2px">Explore Tools</Text>
                            <BiChevronDown fontSize={"15px"} color={"#111822"} />
                        </Flex>
                        <Flex flexDir={"row"} alignItems="center" mr={["30px", "30px", "30px", "20px", "25px"]}>
                            <Text color={"#111822"} fontSize="17px" mr="5px" fontWeight={"400"} lineHeight="19.2px">Resources</Text>
                            <BiChevronDown fontSize={"15px"} color={"#111822"} />
                        </Flex>
                        <Text mr={["30px", "30px", "30px", "20px", "25px"]} color={"#111822"} fontSize="17px" fontWeight={"400"} lineHeight="19.2px">FAQs</Text>
                        <Text color={"#111822"} fontSize="17px" fontWeight={"400"} lineHeight="19.2px">Blogs</Text>
                    </Flex>
                    <Flex flexDir={"row"} alignItems="center" display={["none", "none", "none", "none", "flex"]} >
                        <Image src={Discord} alt="Logo" mr="5.7px" />
                        <Text color={"#5865F2"} fontSize="17px" fontWeight={"500"} lineHeight="19px" >Join Discord</Text>
                    </Flex>
                    <Divider display={["none", "none", "none", "none", "initial"]} mx={["22px", "22px", "22px", "2px", "18px"]} orientation='vertical' border="1px" borderColor={'#D9D8D6'} h="30px" />
                    <Text color={"#111822"} fontSize="17px" fontWeight={"400"} lineHeight="19.2px">Login</Text>
                </Flex>
                {/* Third portion */}
                <Flex>
                    <Flex py={["10px","10px","6px","6px","12px"]} px={["12px", "12px", "15px", "22px", "22px"]} cursor={"pointer"} flexDir={"row"} alignItems="center" justifyContent={"space-between"} onClick={() => handleNavigation("checker")} bg="#077BFF" borderRadius={"7px"}  >
                        <Text color={"#fff"} fontSize={["13px", "13px", "16px", "16px", "17px"]} fontWeight={["400", "400", "600", "600", "600"]} lineHeight={["15.2px", "15.2px", "19.2px", "19.2px", "19.2px"]}>Get Started</Text>
                    </Flex>

                    {/* Hamburger */}
                    <Flex ml="6px" display={["flex", "flex", "flex", "none", "none"]} flexDir={"row"} alignItems="center" justifyContent={"space-between"} bg="rgba(7, 123, 255, 0.25)" px="8px" py="6px" borderRadius={"5px"} >
                        <RxHamburgerMenu color='#077BFF' fontSize={"17px"} m="0" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar