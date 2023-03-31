import { Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import lock from '../assets/lock.svg'
import box from '../assets/3square.svg'
import security from '../assets/security.svg'
import vector from '../assets/Vector.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// Components import 
import LandingTopSection from '../components/LandingPage/LandingTopSection'
import FeatureSection from '../components/LandingPage/FeatureSection'
import PricingSection from '../components/LandingPage/PricingSection'
import CustomerSection from '../components/LandingPage/CustomerSection'
import BlogSection from '../components/LandingPage/BlogSection'

const LandingPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Flex w="100%" flexDir={"column"}  >

            {/* Top Section */}
            <LandingTopSection />
            <SimpleGrid columns={[2, 2, 2, 3, 4]} spacing={["12.6px", "12.6px", "16.6px", "16.6px", "16.6px"]} w="80%" m="auto" mb={["105.6px","105.6px","138.6px","138.6px","138.6px"]} >
                <Flex data-aos="zoom-in" data-aos-delay="100" py={["13px", "12px", "7px", "20px", "22px"]} bg="#EEFEFD" border={"1px solid #D4EAE8"} borderRadius="5px" justifyContent="center" alignItems="center"  >
                    <Flex p={["5px", "5px", "7px", "7px", "8px"]} w={["24px", "24px", "40px", "40px", "50px"]} background={"linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"} borderRadius={["5px", "5px", "8px", "8px", "8px", "8px"]} justifyContent="center" alignItems={"center"}  >
                        <Image src={box} w={["55%", "55%", "70%", "70%", "85%"]}  alt="" />
                    </Flex>
                    <Text width={["94px", "94px", "154px", "154px", "158px"]} ml={["9px", "9px", "15px", "15px", "15px"]} fontWeight={"400"} color="#111822" fontSize={["11px", "11px", "18px", "18px", "18px"]} lineHeight={["14px", "15px", "22px", "22px", "20px"]} >Lorem Ipsum Dolor Sit Amet Top</Text>
                </Flex>
                <Flex data-aos="zoom-in" data-aos-delay="200" py={["13px", "12px", "7px", "20px", "22px"]} bg="#EEFEF0" border={"1px solid #CEE5DF"} borderRadius="5px" justifyContent="center" alignItems="center" >
                    <Flex p={["5px", "5px", "7px", "7px", "8px"]} w={["24px", "24px", "40px", "40px", "50px"]} background={"linear-gradient(135deg, #72E6E5 0%, #75DFF0 100%)"} justifyContent="center" alignItems={"center"} borderRadius={["5px", "5px", "8px", "8px", "8px", "8px"]} >
                        <Image src={lock} w={["55%", "55%", "70%", "70%", "85%"]}  alt="" />
                    </Flex>
                    <Text width={["94px", "94px", "154px", "154px", "158px"]} ml={["9px", "9px", "15px", "15px", "15px"]} fontWeight={"400"} color="#111822" fontSize={["11px", "11px", "18px", "18px", "18px"]} lineHeight={["14px", "15px", "22px", "22px", "20px"]}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Flex>
                <Flex data-aos="zoom-in" data-aos-delay="300" py={["13px", "12px", "7px", "20px", "22px"]} bg="#EFFAF6" border={"1px solid #CEDAC2"} borderRadius="5px" justifyContent="center" alignItems="center" >
                    <Flex p={["5px", "5px", "7px", "7px", "8px"]} w={["24px", "24px", "40px", "40px", "50px"]} background={"linear-gradient(135deg, #80FC6A 0%, #41F064 100%)"} borderRadius={["5px", "5px", "8px", "8px", "8px", "8px"]} justifyContent="center" alignItems={"center"}  >
                        <Image src={vector} w={["55%", "55%", "70%", "70%", "85%"]}  alt="" />
                    </Flex>
                    <Text width={["94px", "94px", "154px", "154px", "158px"]} ml={["9px", "9px", "15px", "15px", "15px"]} fontWeight={"400"} color="#111822" fontSize={["11px", "11px", "18px", "18px", "18px"]} lineHeight={["14px", "15px", "22px", "22px", "20px"]} justifyContent="center" alignItems={"center"}  >Lorem Ipsum Dolor Sit Amet Top</Text>
                </Flex>
                <Flex data-aos="zoom-in" data-aos-delay="400" py={["13px", "12px", "7px", "20px", "22px"]} bg="#F0F7FF" border={"1px solid #C7DEE6"} borderRadius="5px" justifyContent="center" alignItems="center" >
                    <Flex p={["5px", "5px", "7px", "7px", "8px"]} w={["24px", "24px", "40px", "40px", "50px"]} background={"linear-gradient(135deg, #2E73E8 0%, #215FDA 100%)"} borderRadius={["5px", "5px", "8px", "8px", "8px", "8px"]} justifyContent="center" alignItems={"center"}  >
                        <Image src={security} w={["55%", "55%", "70%", "70%", "85%"]}  alt="" />
                    </Flex>
                    <Text width={["94px", "94px", "154px", "154px", "158px"]} ml={["9px", "9px", "15px", "15px", "15px"]} fontWeight={"400"} color="#111822" fontSize={["11px", "11px", "18px", "18px", "18px"]} lineHeight={["14px", "15px", "22px", "22px", "20px"]}>Lorem Ipsum Dolor Sit Amet Top</Text>
                </Flex>
            </SimpleGrid>

            {/* feature Section */}
            <FeatureSection />

            {/* Pricing section */}
            <PricingSection />

            {/* Customer love section */}
            <CustomerSection />

            {/* Blog Section */}
            <BlogSection />

        </Flex>
    )
}

export default LandingPage