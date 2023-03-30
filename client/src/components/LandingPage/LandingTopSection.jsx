import { Divider, Flex, Text } from '@chakra-ui/react'
import { RiArrowRightLine } from 'react-icons/ri'
import { IoIosStar } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const LandingTopSection = () => {
    const naviagte = useNavigate()
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Flex data-aos="zoom-in-right" data-aos-delay="200" flexDir={"column"} w={["100%", "100%", "85%", "75%", "70%"]} m="auto" mt={["30px", "30px", "80px", "80px", "80px"]} pt="95px" justifyContent="center" px={["5", '5', "9", "9", "9"]} >
            <Text fontWeight={"600"} fontSize={["16px", "16px", "16px", "16px", "16px"]} opacity="0.5" color={"#111822"} textAlign={"center"} >WELCOME TO CREATIVE PROXIES</Text>
            <Text fontWeight={"600"} color="#111822" w={["85%", "85%", "85%", "80%", "100%"]} fontSize={["30px", "30px", "46px", "56px", "56px"]} lineHeight={["38.2px", "38.2px", "57.2px", "67.2px", "67.2px"]} textAlign={"center"} m="auto" mb={["5px","5px","20px","20px","20px"]}>We are the <span style={{ color: "#077BFF" }} >Fastest</span> and the <span style={{ color: "#16D113" }} >Most
                Reliable</span> Proxy Service since 2020</Text>
            <Text fontWeight={"600"} textAlign="center" w={["89%", "89%", "85%", "80%", "60%"]} m="auto" fontSize={["14px", "14px", "22px", "22px", "22px"]} opacity="0.5" color={"#111822"} lineHeight={["20.4px", "20.4px", "26.4px", "26.4px", "26.4px"]} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Flex flexDir={"row"} w={["50%", "50%", "20%", "50%", "25%"]} bg="#077BFF" justifyContent={"center"} py="12.5px" alignItems={"center"} borderRadius={"10px"} m="auto" mt="20px" onClick={() => naviagte("/checker")} cursor="pointer"  >
                <Text fontWeight={"600"} fontSize={["16px", "16px", "18px", "18px", "18px"]} color={"#fff"} mr="5px" >Get Started</Text>
                <RiArrowRightLine color="#fff" fontWeight={"600"} fontSize={["21px", "21px", "25px", "25px", "25px"]} />
            </Flex>
            <Flex flexDir={"column"} w={["50%", "50%", "20%", "50%", "25%"]} bg="rgba(0, 182, 122, 0.1)" justifyContent={"center"} pt="20.2px" pb="10px" alignItems={"center"} borderRadius={"10px"} m="auto" mt="20px"  >
                <Flex flexDir={"row"} >
                    <Flex p="1" bg="#00B67A" mr="2px" >
                        <IoIosStar color="#fff" />
                    </Flex>
                    <Flex p="1" bg="#00B67A" mr="2px" >
                        <IoIosStar color="#fff" />
                    </Flex>
                    <Flex p="1" bg="#00B67A" mr="2px" >
                        <IoIosStar color="#fff" />
                    </Flex>
                    <Flex p="1" bg="#00B67A" mr="2px" >
                        <IoIosStar color="#fff" />
                    </Flex>
                    <Flex p="1" className='background'>
                        <IoIosStar color="#fff" />
                    </Flex>
                </Flex>
                <Flex flexDir={"row"} alignItems="center" justifyContent={'center'} mt="6px" >
                    <Text fontWeight={"600"} fontSize={["14px","14px","16px","16px","16px"]} color={"#111822"} mr="5px" >Rated 4.5 on</Text>
                    <IoIosStar color="#00B67A" ml="2px" fontSize={["18px","18px","22px","22px","22px"]} />
                    <Text fontWeight={"600"} ml="2px" fontSize={["14px","14px","16px","16px","16px"]} color={"#111822"} mr="5px" > Trustpilot</Text>
                </Flex>
            </Flex>
            <Divider orientation='horizontal' w={["86%", "86%", "80%", "70%", "60%"]} m="auto" mt={["30px","30px","54px","54px","54px"]} mb={["20px","20px","54px","54px","54px"]} border={"1px solid #D9D8D6"} />
        </Flex >
    )
}

export default LandingTopSection