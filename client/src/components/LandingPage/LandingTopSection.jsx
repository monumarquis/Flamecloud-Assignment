import { Divider, Flex, Text } from '@chakra-ui/react'
import { RiArrowRightLine } from 'react-icons/ri'
import { IoIosStar } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const LandingTopSection = () => {
    const naviagte = useNavigate()
    return (
        <Flex mt="40px" flexDir={"column"} w={["100%", "100%", "85%", "75%", "70%"]} m="auto" pt="95px" justifyContent="center" px={["5", '5', "9", "9", "9"]} >
            <Text fontWeight={"600"} fontSize={["16px", "16px", "16px", "16px", "16px"]} opacity="0.5" color={"#111822"} textAlign={"center"} >WELCOME TO CREATIVE PROXIES</Text>
            <Text fontWeight={"600"} mb="20px" color="#111822" fontSize={["33px", "33px", "46px", "56px", "56px"]} lineHeight={["47.2px", "47.2px", "57.2px", "67.2px", "67.2px"]} textAlign={"center"} >We are the <span style={{ color: "#077BFF" }} >Fastest</span> and the <span style={{ color: "#16D113" }} >Most
                Reliable</span> Proxy Service since 2020</Text>
            <Text fontWeight={"600"} textAlign="center" w={["100%", "100%", "85%", "80%", "55%"]} m="auto" fontSize={["15px", "15px", "22px", "22px", "22px"]} opacity="0.5" color={"#111822"} lineHeight={["20.4px", "20.4px", "26.4px", "26.4px", "26.4px"]} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Flex flexDir={"row"} w={["250px", "250px", "250px", "240px", "230px"]} bg="#077BFF" justifyContent={"center"} py="12.5px" alignItems={"center"} borderRadius={"10px"} m="auto" mt="20px" onClick={() => naviagte("/checker")} cursor="pointer"  >
                <Text fontWeight={"600"} fontSize="18px" color={"#fff"} mr="5px" >Get Started</Text>
                <RiArrowRightLine color="#fff" fontWeight={"600"} fontSize="25px" />
            </Flex>
            <Flex flexDir={"column"} w={["250px", "250px", "250px", "240px", "230px"]} bg="rgba(0, 182, 122, 0.1)" justifyContent={"center"} pt="20.2px" pb="10px" alignItems={"center"} borderRadius={"10px"} m="auto" mt="20px"  >
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
                    <Text fontWeight={"600"} fontSize="16px" color={"#111822"} mr="5px" >Rated 4.5 on</Text>
                    <IoIosStar color="#00B67A" ml="2px" fontSize={"22px"} />
                    <Text fontWeight={"600"} ml="2px" fontSize="16px" color={"#111822"} mr="5px" >Trustpilot</Text>
                </Flex>
            </Flex>
            <Divider orientation='horizontal' w={["100%", "100%", "80%", "70%", "60%"]} m="auto" my="54px" border={"1px solid #D9D8D6"} />
        </Flex >
    )
}

export default LandingTopSection