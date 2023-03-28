import { Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import lock from '../assets/lock.svg'
import box from '../assets/3square.svg'
import security from '../assets/security.svg'
import vector from '../assets/Vector.svg'
import LandingTopSection from '../components/LandingTopSection'
import { featureData } from "../data.js"
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
                <Text color="#FFFFFF" mb="10px" fontWeight={"600"} textAlign="center" fontSize={["21px","23px","36px","36px","36px"]} lineHeight={["23.2px","24.2px","43.2px","43.2px","43.2px"]} >Why we are the Best Proxy Providers</Text>
                <Text color="#FFFFFF" mb="30px" fontWeight={"500"} w={["100%","100%","70%","50%","40%"]} textAlign="center" fontSize={["15px","15px","18px","18px","18px"]} lineHeight={"21.2px"} opacity="0.5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>

                <SimpleGrid columns={["2","2","3","3","4"]} spacing={["10px","10px","16px","16px","16px"]} >

                    {featureData.map((el) => {
                        return (
                            <Flex flexDir={"column"} borderRadius={"5px"} pl={["19px","19px","25px","25px","25px"]} pr={["20px","20px","25px","30px","30px"]} pt={["18px","18px","25px","25px","25px"]} pb='22px' bg=" rgba(255, 255, 255, 0.01)" border={"1px solid rgba(255, 255, 255, 0.1)"} >
                                <Image src={el.Image} w="24px" h="24px" />
                                <Text color="#FFFFFF" mb="8px" mt="10px" fontWeight={"600"} fontSize={["15px","15px","20px","20px","20px"]} lineHeight={["12px","12px","24px","24px","24px"]} >{el.title}</Text>
                                <Text color="#FFFFFF" textAlign={"left"} opacity={"0.5"} fontWeight={"400"} fontSize={["10px","10px","12.5px","14px","14px"]} lineHeight={["12px","12px","14.5px","17px","17px"]} >{el.desc}</Text>
                            </Flex>
                        )
                    })}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default LandingPage