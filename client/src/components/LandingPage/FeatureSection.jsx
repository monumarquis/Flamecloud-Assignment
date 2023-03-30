import { Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { featureData } from "../../data.js"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FeatureSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Flex flexDir={"column"} w="100%"  bg="#0566D4" py="115px" justifyContent={"center"} alignItems="center" >
            <Text data-aos="flip-left" color="#FFFFFF" mb="10px" fontWeight={"600"} textAlign="center" fontSize={["19px", "19px", "36px", "36px", "36px"]} lineHeight={["23.2px", "24.2px", "43.2px", "43.2px", "43.2px"]} >Why we are the Best Proxy Providers</Text>
            <Text data-aos="flip-left" color="#FFFFFF" mb="30px" fontWeight={"500"} w={["80%", "80%", "70%", "50%", "40%"]} textAlign="center" fontSize={["14px", "14px", "18px", "18px", "18px"]} lineHeight={"21.2px"} opacity="0.5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>

            <SimpleGrid columns={["2", "2", "3", "3", "4"]} w={["80%", "80%", "80%", "80%", "80%"]} spacing={["10px", "10px", "16px", "16px", "16px"]} m="auto" >

                {featureData.map((el, i) => {
                    return (
                        <Flex data-aos="zoom-in" data-aos-delay={i > 3 ? (i + 1 - 3) * 100 : (i + 1) * 100} flexDir={"column"} borderRadius={"5px"} pl={["14px", "14px", "25px", "20px", "20px"]} pr={["1px", "1px", "25px", "20px", "20px"]} pt={["12px", "12px", "25px", "20px", "20px"]} pb={['12px','12px','22px','20px','20px']} bg=" rgba(255, 255, 255, 0.01)" border={"1px solid rgba(255, 255, 255, 0.1)"} >
                            <Image src={el.Image} w="24px" h="24px" />
                            <Text color="#FFFFFF" mb="8px" mt="10px" fontWeight={"600"} fontSize={["15px", "15px", "20px", "20px", "20px"]} lineHeight={["12px", "12px", "24px", "24px", "24px"]} >{el.title}</Text>
                            <Text color="#FFFFFF" textAlign={"left"} opacity={"0.5"} fontWeight={"400"} fontSize={["9px", "9px", "12.5px", "13px", "13px"]} lineHeight={["12px", "12px", "14.5px", "15px", "15px"]} >{el.desc}</Text>
                        </Flex>
                    )
                })}
            </SimpleGrid>
        </Flex>
    )
}

export default FeatureSection