import { Flex, Image, Text } from '@chakra-ui/react'
import { RiArrowRightLine } from 'react-icons/ri'
import { BsCheckLg } from "react-icons/bs"
import pricing1 from '../../assets/pricing/1.svg'
import pricing2 from '../../assets/pricing/2.svg'
import pricing3 from '../../assets/pricing/3.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PricingSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Flex flexDir={"column"} w={["100%", "100%", "90%", "70%", "57%"]} m="auto" py={["100px", "100px", "177px", "177px", "177px", "177px"]} >
            <Text data-aos="flip-left" color="#111822" mb={["15px", "15px", "19px", "19px", "19px"]} fontWeight={"600"} textAlign="center" fontSize={["26px", "26px", "36px", "36px", "36px"]} lineHeight={["21.2px", "24.2px", "43.2px", "43.2px", "43.2px"]} >You choose, we <span style={{ color: "#077BFF" }} >Deliver!</span></Text>
            <Text data-aos="flip-left" color="#111822" opacity="0.5" fontWeight={"500"} w={["78%", "78%", "70%", "62%", "62%"]} textAlign="center" fontSize={["13px", "13px", "18px", "18px", "18px"]} m="auto" lineHeight={["16.2px", "16.2px", "21.2px", "21.2px", "21.2px"]} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Flex flexDir={["column", "column", "row", "row", "row"]} w="100%" alignItems={"stretch"} mt={["29px", "29px", "99px", "99px", "99px"]} >
                {/* Ist Pricing */}
                <Flex data-aos="zoom-in" data-aos-delay="100" flexDirection={"column"} w={["65%", "65%", "49%", "45%", "45%"]} m="auto" mb={["50px", "50px", "0px", "0px", "0px"]} mt={["0px", "0px", "0px", "0px", "0px"]} h={["400px", "400px", "477px", "477px", "477px"]} p={["21px", "23px", "27px", "27px", "27px"]} bg="rgba(30, 30, 30, 0.01)" border="1px solid rgba(30, 30, 30, 0.1)" borderRadius={"5px"} >
                    {/* Top Section */}
                    <Flex flexDir={"row"} justifyContent="space-between" mb="20px" >
                        <Flex flexDir={"column"}  >
                            <Image src={pricing1} mb="8px" w="40px" h="40px" />
                            <Text color="#111822" mb="8px" fontWeight={"600"} textAlign="left" fontSize={["18px", "18px", "20px", "20px", "20px"]} lineHeight={"24px"} >IPv4 Proxies</Text>
                            <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Static/Rotating</Text>
                        </Flex>
                        <Flex flexDir={"column"}>
                            <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["12px", "12px", "16px", "16px", "16px"]} lineHeight={["15px", "15px", "19px", "19px", "19px"]} >FROM</Text>
                            <Text fontWeight={"500"} mb="4px" textAlign="left" fontSize={["15px", "15px", "20px", "20px", "20px"]} color="#077BFF" lineHeight={["18px", "18px", "24px", "24px", "24px"]} >$4.75<span style={{ color: "#111822", opacity: "0.75" }} >/day</span></Text>
                            <Text fontWeight={"600"} opacity="0.8" textAlign="left" fontSize={["10px", "10px", "12px", "12px", "12px"]} color="#111822" lineHeight={["10.4px", "10.4px", "14.4px", "14.4px", "14.4px"]} >OR</Text>
                            <Text fontWeight={"500"} textAlign="left" fontSize={["15px", "15px", "20px", "20px", "20px"]} color="#077BFF" lineHeight={["18px", "18px", "24px", "24px", "24px"]} >$116.75<span style={{ color: "#111822", opacity: "0.75" }} >/mo</span></Text>
                        </Flex>

                    </Flex>
                    {/* Botttom section */}
                    <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} mb="10px" >Plan Includes :</Text>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#077BFF" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >100 Threads</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#077BFF" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Dedicated IP Pool</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#077BFF" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Residential Proxy</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#077BFF" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Unlimited Bandwidth</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#077BFF" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Worldwide Locations</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["7px", "7px", "50px", "50px", "50px"]} >
                        <BsCheckLg color="#077BFF" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >40 GBps</Text>
                    </Flex>
                    <Flex flexDir={"row"} w={"97.5%"} m="auto" bg="#077BFF" justifyContent={"center"} py="12.5px" alignItems={"center"} borderRadius={"10px"} mt="20px"  >
                        <Text fontWeight={"600"} fontSize={["14px", "14px", "18px", "18px", "18px"]} color={"#fff"} mr="5px" lineHeight={"22px"} >View Pricing</Text>
                        <RiArrowRightLine color="#fff" fontWeight={"600"} fontSize={["18px", "18px", "25px", "25px", "25px"]} />
                    </Flex>
                </Flex>
                {/* 2nd Pricing */}
                <Flex data-aos="zoom-in" data-aos-delay="200" pos="relative" flexDirection={"column"} w={["65%", "65%", "49%", "49%", "49%"]} m="auto" p={["23px", "23px", "27px", "27px", "27px"]} bg="rgba(22, 209, 19, 0.1)" h={["445px", "445px", "525px", "525px", "525px"]} border="1px solid #16D113" borderRadius={"5px"} >
                    {/* Top Section */}
                    <Flex justifyContent={"center"} alignItems="center" color="#FFFFFF" py="2px" px="4px" bg="#16D113" borderRadius={"2px"} pos="absolute" top="-12px" fontSize="12px" left={["15px", "15px", "20px", "20px", "25px"]} >
                        BEST SELLER
                    </Flex>
                    <Flex flexDir={"row"} justifyContent="space-between" mb="20px" >
                        <Flex flexDir={"column"}  >
                            <Image src={pricing2} mb="8px" w="40px" h="40px" />
                            <Text color="#111822" mb="8px" fontWeight={"600"} textAlign="left" fontSize={["18px", "18px", "20px", "20px", "20px"]} lineHeight={"24px"} >IPv4 Proxies</Text>
                            <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Static/Rotating</Text>
                        </Flex>
                        <Flex flexDir={"column"}>
                            <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["12px", "12px", "16px", "16px", "16px"]} lineHeight={["15px", "15px", "19px", "19px", "19px"]} >FROM</Text>
                            <Text fontWeight={"500"} mb="4px" textAlign="left" fontSize={["15px", "15px", "20px", "20px", "20px"]} color="#16D113" lineHeight={["18px", "18px", "24px", "24px", "24px"]} >$4.75<span style={{ color: "#111822", opacity: "0.75" }} >/day</span></Text>
                            <Text fontWeight={"600"} opacity="0.8" textAlign="left" fontSize={["10px", "10px", "12px", "12px", "12px"]} color="#111822" lineHeight={["10.4px", "10.4px", "14.4px", "14.4px", "14.4px"]} >OR</Text>
                            <Text fontWeight={"500"} textAlign="left" fontSize={["15px", "15px", "20px", "20px", "20px"]} color="#16D113" lineHeight={["18px", "18px", "24px", "24px", "24px"]} >$116.75<span style={{ color: "#111822", opacity: "0.75" }} >/mo</span></Text>
                        </Flex>

                    </Flex>
                    {/* Botttom section */}
                    <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} mb="10px" >Plan Includes :</Text>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#16D113" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >100 Threads</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#16D113" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Dedicated IP Pool</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#16D113" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Residential Proxy</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#16D113" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Unlimited Bandwidth</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#16D113" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Worldwide Locations</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#16D113" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Dedicated Subnets</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["3px", "3px", "8px", "8px", "8px"]} >
                        <BsCheckLg color="#16D113" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >1 Octilion IPS</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["7px", "7px", "50px", "50px", "50px"]} >
                        <BsCheckLg color="#16D113" />
                        <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["13px", "13px", "16px", "16px", "16px"]} lineHeight={"19px"} >Septiltion per Location</Text>
                    </Flex>
                    <Flex flexDir={"row"} w={"97.5%"} m="auto" bg="#16D113" justifyContent={"center"} py="12.5px" alignItems={"center"} borderRadius={"10px"} mt="20px"  >
                        <Text fontWeight={"600"} fontSize={["14px", "14px", "18px", "18px", "18px"]} color={"#fff"} mr="5px" lineHeight={"22px"} >View Pricing</Text>
                        <RiArrowRightLine color="#fff" fontWeight={"600"} fontSize={["18px", "18px", "25px", "25px", "25px"]} />
                    </Flex>
                </Flex>
            </Flex>
            {/* Third Pricing */}
            <Flex data-aos="zoom-in" data-aos-delay="300" flexDir={"row"} justifyContent="space-between" w={["85%", "85%", "100%", "98%", "98%"]} m="auto" border="1px solid rgba(30, 30, 30, 0.1)" mt="22px" py={["12px", "12px", "22px", "22px", "22px", "22px"]} pr={["12px", "12px", "123px", "123px", "123px"]} pl={["14px", "14px", "28px", "28px", "28px"]} borderRadius={"5px"} background={"rgba(30, 30, 30, 0.01)"}>
                <Flex flexDir={"column"} >
                    <Image src={pricing3} mb={["0px", "0px", "8px", "8px", "8px"]} w={["30px", "30px", "40px", "40px", "40px", "40px"]} h={["30px", "30px", "40px", "40px", "40px", "40px"]} />
                    <Text color="#111822" mb={["0px", "0px", "8px", "8px", "8px"]} fontWeight={"600"} textAlign="left" fontSize={["13px", "13px", "20px", "20px", "20px"]} lineHeight={["18px", "18px", "24px", "24px", "24px"]} >Become a Reseller</Text>
                    <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["11px", "11px", "16px", "16px", "16px"]} lineHeight={["14px", "14px", "19px", "19px", "19px"]} >200+ Happy Resellers</Text>
                </Flex>
                <Flex flexDir={"column"} >
                    <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} mb={["2px", "2px", "10px", "10px", "10px"]} ml="4px" >Plan Includes :</Text>
                    <Flex flexDir={"row"} mb={["0px", "0px", "8px", "8px", "8px"]} >
                        <BsCheckLg fontSize={["0px", "0px", "12px", "12px", "12px"]} color="#077BFF" />
                        <Text ml={["1px", "1px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Whitelabel IP Pool</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["0px", "0px", "8px", "8px", "8px"]} >
                        <BsCheckLg fontSize={["0px", "0px", "12px", "12px", "12px"]} color="#077BFF" />
                        <Text ml={["1px", "1px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Whitelabel Subnets</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["0px", "0px", "8px", "8px", "8px"]} >
                        <BsCheckLg fontSize={["0px", "0px", "12px", "12px", "12px"]} color="#077BFF" />
                        <Text ml={["1px", "1px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Residential Proxy</Text>
                    </Flex>
                </Flex>
                <Flex flexDir={"column"} >
                    <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} mb="10px"  >Plan Includes :</Text>
                    <Flex flexDir={"row"} mb={["0px", "0px", "8px", "8px", "8px"]} >
                        <BsCheckLg fontSize={["0px", "0px", "12px", "12px", "12px"]} color="#077BFF" />
                        <Text ml={["1px", "1px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Custom Bandwidth</Text>
                    </Flex>
                    <Flex flexDir={"row"} mb={["0px", "0px", "8px", "8px", "8px"]} >
                        <BsCheckLg fontSize={["0px", "0px", "12px", "12px", "12px"]} color="#077BFF" />
                        <Text ml={["1px", "1px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Priority Support</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default PricingSection