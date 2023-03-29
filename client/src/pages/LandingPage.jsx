import { Avatar, Flex, Image, SimpleGrid, Text, Icon } from '@chakra-ui/react'
import { RiArrowRightLine } from 'react-icons/ri'
import lock from '../assets/lock.svg'
import box from '../assets/3square.svg'
import pricing1 from '../assets/pricing/1.svg'
import pricing2 from '../assets/pricing/2.svg'
import pricing3 from '../assets/pricing/3.svg'
import security from '../assets/security.svg'
import vector from '../assets/Vector.svg'
import elipse from '../assets/Ellipse.svg'
import LandingTopSection from '../components/LandingTopSection'
import { featureData, customerlove } from "../data.js"
import { BsCheckLg } from "react-icons/bs"
import { IoIosStar } from 'react-icons/io'

const LandingPage = () => {

    return (
        <Flex w="100%" flexDir={"column"}  >
            <LandingTopSection />
            <SimpleGrid columns={[2, 2, 2, 3, 4]} spacing={["12.6px", "12.6px", "16.6px", "16.6px", "16.6px"]} mb="138.6px" px={["8", '8', "8", "8", "8"]} >
                <Flex py={["6px", "6px", "7px", "20px", "20px"]} bg="#EEFEFD" border={"1px solid #D4EAE8"} borderRadius="5px" justifyContent="center" alignItems="center"  >
                    <Flex py={["5px", "5px", "7px", "7px", "7px"]} w={["30px", "30px", "40px", "40px", "40px"]} background={"linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"} borderRadius="8px" justifyContent="center" alignItems={"center"}  >
                        <Image src={box} w={["55%", "55%", "70%", "70%", "70%"]} alt="" />
                    </Flex>
                    <Text width={["103px", "103px", "154px", "154px", "154px"]} ml="15px" fontWeight={"400"} color="#111822" fontSize={["12px", "12px", "18px", "18px", "18px"]} lineHeight={["15px", "15px", "22px", "22px", "22px"]} >Lorem Ipsum Dolor Sit Amet Top</Text>
                </Flex>
                <Flex py={["6px", "6px", "7px", "20px", "20px"]} bg="#EEFEF0" border={"1px solid #CEE5DF"} borderRadius="5px" justifyContent="center" alignItems="center" >
                    <Flex py={["5px", "5px", "7px", "7px", "7px"]} w={["30px", "30px", "40px", "40px", "40px"]} background={"linear-gradient(135deg, #72E6E5 0%, #75DFF0 100%)"} justifyContent="center" alignItems={"center"} borderRadius="8px" >
                        <Image src={lock} w={["55%", "55%", "70%", "70%", "70%"]} alt="" />
                    </Flex>
                    <Text width={["103px", "103px", "154px", "154px", "154px"]} ml="15px" fontWeight={"400"} color="#111822" fontSize={["12px", "12px", "18px", "18px", "18px"]} lineHeight={["15px", "15px", "22px", "22px", "22px"]}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Flex>
                <Flex py={["6px", "6px", "7px", "20px", "20px"]} bg="#EFFAF6" border={"1px solid #CEDAC2"} borderRadius="5px" justifyContent="center" alignItems="center" >
                    <Flex py={["5px", "5px", "7px", "7px", "7px"]} w={["30px", "30px", "40px", "40px", "40px"]} background={"linear-gradient(135deg, #80FC6A 0%, #41F064 100%)"} borderRadius="8px" justifyContent="center" alignItems={"center"}  >
                        <Image src={vector} w={["55%", "55%", "70%", "70%", "70%"]} alt="" />
                    </Flex>
                    <Text width={["103px", "103px", "154px", "154px", "154px"]} ml="15px" fontWeight={"400"} color="#111822" fontSize={["12px", "12px", "18px", "18px", "18px"]} lineHeight={["15px", "15px", "22px", "22px", "22px"]} justifyContent="center" alignItems={"center"}  >Lorem Ipsum Dolor Sit Amet Top</Text>
                </Flex>
                <Flex py={["6px", "6px", "7px", "20px", "20px"]} bg="#F0F7FF" border={"1px solid #C7DEE6"} borderRadius="5px" justifyContent="center" alignItems="center" >
                    <Flex py={["5px", "5px", "7px", "7px", "7px"]} w={["30px", "30px", "40px", "40px", "40px"]} background={"linear-gradient(135deg, #2E73E8 0%, #215FDA 100%)"} borderRadius="8px" justifyContent="center" alignItems={"center"}  >
                        <Image src={security} alt="" w={["55%", "55%", "70%", "70%", "70%"]} />
                    </Flex>
                    <Text width={["103px", "103px", "154px", "154px", "154px"]} ml="15px" fontWeight={"400"} color="#111822" fontSize={["12px", "12px", "18px", "18px", "18px"]} lineHeight={["15px", "15px", "22px", "22px", "22px"]}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Flex>
            </SimpleGrid>
            {/* feature Section */}
            <Flex flexDir={"column"} w="100%" px={["9", '9', "9", "9", "9"]} bg="#0566D4" py="115px" justifyContent={"center"} alignItems="center" >
                <Text color="#FFFFFF" mb="10px" fontWeight={"600"} textAlign="center" fontSize={["21px", "23px", "36px", "36px", "36px"]} lineHeight={["23.2px", "24.2px", "43.2px", "43.2px", "43.2px"]} >Why we are the Best Proxy Providers</Text>
                <Text color="#FFFFFF" mb="30px" fontWeight={"500"} w={["100%", "100%", "70%", "50%", "40%"]} textAlign="center" fontSize={["15px", "15px", "18px", "18px", "18px"]} lineHeight={"21.2px"} opacity="0.5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>

                <SimpleGrid columns={["2", "2", "3", "3", "4"]} spacing={["10px", "10px", "16px", "16px", "16px"]} >

                    {featureData.map((el) => {
                        return (
                            <Flex flexDir={"column"} borderRadius={"5px"} pl={["19px", "19px", "25px", "25px", "25px"]} pr={["20px", "20px", "25px", "30px", "30px"]} pt={["18px", "18px", "25px", "25px", "25px"]} pb='22px' bg=" rgba(255, 255, 255, 0.01)" border={"1px solid rgba(255, 255, 255, 0.1)"} >
                                <Image src={el.Image} w="24px" h="24px" />
                                <Text color="#FFFFFF" mb="8px" mt="10px" fontWeight={"600"} fontSize={["15px", "15px", "20px", "20px", "20px"]} lineHeight={["12px", "12px", "24px", "24px", "24px"]} >{el.title}</Text>
                                <Text color="#FFFFFF" textAlign={"left"} opacity={"0.5"} fontWeight={"400"} fontSize={["10px", "10px", "12.5px", "14px", "14px"]} lineHeight={["12px", "12px", "14.5px", "17px", "17px"]} >{el.desc}</Text>
                            </Flex>
                        )
                    })}
                </SimpleGrid>
            </Flex>
            {/* Pricing section */}
            <Flex flexDir={"column"} w={["100%", "100%", "90%", "70%", "57%"]} m="auto" py={["201px", "201px", "177px", "177px", "177px", "177px"]} >
                <Text color="#111822" mb="10px" fontWeight={"600"} textAlign="center" fontSize={["32px", "32px", "36px", "36px", "36px"]} lineHeight={["23.2px", "24.2px", "43.2px", "43.2px", "43.2px"]} >You choose, we <span style={{ color: "#077BFF" }} >Deliver!</span></Text>
                <Text color="#111822" opacity="0.5" fontWeight={"500"} w={["85%", "85%", "70%", "62%", "62%"]} textAlign="center" fontSize={["15px", "15px", "18px", "18px", "18px"]} m="auto" lineHeight={"21.2px"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                <Flex flexDir={["column", "column", "row", "row", "row"]} w="100%" alignItems={"stretch"} justifyContent={"space-between"} mt="99px" >
                    {/* Ist Pricing */}
                    <Flex flexDirection={"column"} w={["70%", "70%", "49%", "49%", "49%"]} m="auto" mb={["50px", "50px", "0px", "0px", "0px"]} mt={["0px", "0px", "0px", "0px", "0px"]} h="477px" p={["18px", "18px", "27px", "27px", "27px"]} bg="rgba(30, 30, 30, 0.01)" border="1px solid rgba(30, 30, 30, 0.1)" borderRadius={"5px"} >
                        {/* Top Section */}
                        <Flex flexDir={"row"} justifyContent="space-between" mb="20px" >
                            <Flex flexDir={"column"}  >
                                <Image src={pricing1} mb="8px" w="40px" h="40px" />
                                <Text color="#111822" mb="8px" fontWeight={"600"} textAlign="left" fontSize={["18px", "18px", "20px", "20px", "20px"]} lineHeight={"24px"} >IPv4 Proxies</Text>
                                <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Static/Rotating</Text>
                            </Flex>
                            <Flex flexDir={"column"}>
                                <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >FROM</Text>
                                <Text fontWeight={"500"} mb="4px" textAlign="left" fontSize={["20px", "20px", "20px", "20px", "20px"]} color="#077BFF" lineHeight={"24px"} >$4.75<span style={{ color: "#111822", opacity: "0.75" }} >/day</span></Text>
                                <Text fontWeight={"600"} opacity="0.8" textAlign="left" fontSize={["12px", "12px", "12px", "12px", "12px"]} color="#111822" lineHeight={"14.4px"} >OR</Text>
                                <Text fontWeight={"500"} textAlign="left" fontSize={["20px", "20px", "20px", "20px", "20px"]} color="#077BFF" lineHeight={"24px"} >$116.75<span style={{ color: "#111822", opacity: "0.75" }} >/mo</span></Text>
                            </Flex>

                        </Flex>
                        {/* Botttom section */}
                        <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} mb="10px" >Plan Includes :</Text>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#077BFF" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >100 Threads</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#077BFF" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Dedicated IP Pool</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#077BFF" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Residential Proxy</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#077BFF" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Unlimited Bandwidth</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#077BFF" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Worldwide Locations</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="50px" >
                            <BsCheckLg color="#077BFF" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >40 GBps</Text>
                        </Flex>
                        <Flex flexDir={"row"} w={"97.5%"} m="auto" bg="#077BFF" justifyContent={"center"} py="12.5px" alignItems={"center"} borderRadius={"10px"} mt="20px"  >
                            <Text fontWeight={"600"} fontSize="18px" color={"#fff"} mr="5px" lineHeight={"22px"} >View Pricing</Text>
                            <RiArrowRightLine color="#fff" fontWeight={"600"} fontSize="25px" />
                        </Flex>
                    </Flex>
                    {/* 2nd Pricing */}
                    <Flex pos="relative" flexDirection={"column"} w={["70%", "70%", "49%", "49%", "49%"]} m="auto" p={["15px", "15px", "27px", "27px", "27px"]} bg="rgba(22, 209, 19, 0.1)" h="525px" border="1px solid #16D113" borderRadius={"5px"} >
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
                                <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >FROM</Text>
                                <Text fontWeight={"500"} mb="4px" textAlign="left" fontSize={["20px", "20px", "20px", "20px", "20px"]} color="#16D113" lineHeight={"24px"} >$4.75<span style={{ color: "#111822", opacity: "0.75" }} >/day</span></Text>
                                <Text fontWeight={"600"} opacity="0.8" textAlign="left" fontSize={["12px", "12px", "12px", "12px", "12px"]} color="#111822" lineHeight={"14.4px"} >OR</Text>
                                <Text fontWeight={"500"} textAlign="left" fontSize={["20px", "20px", "20px", "20px", "20px"]} color="#16D113" lineHeight={"24px"} >$116.75<span style={{ color: "#111822", opacity: "0.75" }} >/mo</span></Text>
                            </Flex>

                        </Flex>
                        {/* Botttom section */}
                        <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} mb="10px" >Plan Includes :</Text>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#16D113" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >100 Threads</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#16D113" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Dedicated IP Pool</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#16D113" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Residential Proxy</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#16D113" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Unlimited Bandwidth</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#16D113" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Worldwide Locations</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#16D113" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Dedicated Subnets</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg color="#16D113" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >1 Octilion IPS</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="50px" >
                            <BsCheckLg color="#16D113" />
                            <Text ml="6px" color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["15px", "15px", "16px", "16px", "16px"]} lineHeight={"19px"} >Septiltion per Location</Text>
                        </Flex>
                        <Flex flexDir={"row"} w={"97.5%"} m="auto" bg="#16D113" justifyContent={"center"} py="12.5px" alignItems={"center"} borderRadius={"10px"} mt="20px"  >
                            <Text fontWeight={"600"} fontSize="18px" color={"#fff"} mr="5px" lineHeight={"22px"} >View Pricing</Text>
                            <RiArrowRightLine color="#fff" fontWeight={"600"} fontSize="25px" />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir={"row"} justifyContent="space-between" w={["85%", "85%", "100%", "100%", "100%"]} m="auto" border="1px solid rgba(30, 30, 30, 0.1)" mt="22px" py="22px" pr={["12px", "12px", "123px", "123px", "123px"]} pl={["14px", "14px", "28px", "28px", "28px"]} borderRadius={"5px"} background={"rgba(30, 30, 30, 0.01)"}>
                    <Flex flexDir={"column"} >
                        <Image src={pricing3} mb="8px" w="40px" h="40px" />
                        <Text color="#111822" mb="8px" fontWeight={"600"} textAlign="left" fontSize={["15px", "15px", "20px", "20px", "20px"]} lineHeight={"24px"} >Become a Reseller</Text>
                        <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["12px", "12px", "16px", "16px", "16px"]} lineHeight={"19px"} >200+ Happy Resellers</Text>
                    </Flex>
                    <Flex flexDir={"column"} >
                        <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.5"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} mb="10px" >Plan Includes :</Text>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg fontSize={["8px", "18px", "12px", "12px", "12px"]} color="#077BFF" />
                            <Text ml={["3px", "3px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Whitelabel IP Pool</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg fontSize={["8px", "18px", "12px", "12px", "12px"]} color="#077BFF" />
                            <Text ml={["3px", "3px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Whitelabel Subnets</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg fontSize={["8px", "18px", "12px", "12px", "12px"]} color="#077BFF" />
                            <Text ml={["3px", "3px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Residential Proxy</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDir={"column"} >
                        <Text color="#111822" fontWeight={"400"} textAlign="left" opacity={"0"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} mb="10px"  >Plan Includes :</Text>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg fontSize={["8px", "18px", "12px", "12px", "12px"]} color="#077BFF" />
                            <Text ml={["3px", "3px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Custom Bandwidth</Text>
                        </Flex>
                        <Flex flexDir={"row"} mb="8px" >
                            <BsCheckLg fontSize={["8px", "18px", "12px", "12px", "12px"]} color="#077BFF" />
                            <Text ml={["3px", "3px", "6px", "6px", "6px"]} color="#111822" fontWeight={"400"} textAlign="left" opacity={"0.8"} fontSize={["10px", "10px", "16px", "16px", "16px"]} lineHeight={"19px"} >Priority Support</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            {/* Customer love section */}
            <Flex flexDir={"column"} w="100%" px={["9", '9', "9", "9", "9"]} mb="250px" >
                <Text color="#111822" mb="10px" fontWeight={"600"} textAlign="center" fontSize={["27px", "27px", "36px", "36px", "36px"]} lineHeight={["32.2px", "32.2px", "43.2px", "43.2px", "43.2px"]} >Customers <span style={{ color: "#16D113" }} >Love</span> our Proxies</Text>
                <Text color="#111822" opacity="0.5" fontWeight={"500"} w={["98%", "98%", "70%", "50%", "40%"]} textAlign="center" fontSize={["15px", "15px", "18px", "18px", "18px"]} m="auto" lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                <SimpleGrid mt="34px" columns={[1, 1, 2, 2, 3]} spacing={["28px", "28px", "10px", "18px", "18px"]}  >
                    {
                        customerlove.map((el) => {
                            return (
                                <Flex flexDir={"column"} py='28px' px={["15.8px", "15.8px", "25.8px", "25.8px", "25.8px"]} background={"rgba(30, 30, 30, 0.01)"} borderRadius="5px" border="1px solid rgba(22, 209, 19, 0.5)" >
                                    <Flex mb="19.1px" flexDir={"row"} w="25%" justifyContent={"space-between"} >
                                        <Icon as={IoIosStar} boxSize={6} color="#16D113" />
                                        <Icon as={IoIosStar} boxSize={6} color="#16D113" />
                                        <Icon as={IoIosStar} boxSize={6} color="#16D113" />
                                        <Icon as={IoIosStar} boxSize={6} color="#16D113" />
                                        <Icon as={IoIosStar} boxSize={6} color="#16D113" />
                                    </Flex>
                                    <Text color="#111822" textAlign={"left"} fontWeight={"400"} opacity="0.8" letterSpacing={"-0.02em"} fontSize={["14px", "14px", "14px", "18px", "18px"]} w={["305px", "305px", "305px", "335px", "335px"]} lineHeight={["22px", "22px", "22px", "22px", "22px"]} mb="12px" >{el.desc}</Text>
                                    <Flex flexDir={"row"} alignItems="center" >
                                        <Avatar w="48px" h="48px" mr="10px" name={el.name} src={elipse} />
                                        <Flex flexDir={"column"} >
                                            <Text color="#111822" fontWeight={"500"} fontSize={["16px", "16px", "18px", "18px", "18px"]} lineHeight={["22px", "22px", "22px", "22px", "22px"]}   >{el.name}</Text>
                                            <Text color="#111822" opacity={"0.5"} fontWeight={"400"} fontSize={["14px", "14px", "16px", "16px", "16px"]} lineHeight={["19px", "19px", "19px", "19px", "19px"]}  >{el.title}</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            )
                        })
                    }
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default LandingPage