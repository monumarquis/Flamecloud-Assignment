import { Flex, SimpleGrid, Text, Icon, Box } from '@chakra-ui/react'
import { HiArrowNarrowRight } from "react-icons/hi"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const BlogSection = () => {
    const blogArray = new Array(6).fill(0)
    const blogArray2 = new Array(4).fill(0)
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Flex flexDir={"column"} w="100%" justifyContent="center" mb="120px" >
            <Flex flexDir="column" border="1px solid rgba(30, 30, 30, 0.1)" borderRadius={"5px"} bg="linear-gradient(180deg, #F7FAFF 0%, rgba(255, 255, 255, 0) 100%)" w={["100%", "100%", "80%", "80%", "80%"]} m="auto"  >
                <Text data-aos="flip-left" color="#111822" w={["80%", "80%", "70%", "50%", "80%"]} m='auto' mb={["3px", "3px", "10px", "10px", "10px"]} fontWeight={"600"} textAlign="center" fontSize={["23px", "23px", "36px", "36px", "36px"]} mt={["30px","30px","60px","60px","60px"]} lineHeight={["32.2px", "32.2px", "43.2px", "43.2px", "43.2px"]} >Read our <span style={{ color: "#077BFF" }} >Exclusive</span> Blog</Text>
                <Text data-aos="flip-left" color="#111822" opacity="0.5" fontWeight={"500"} w={["75%", "75%", "70%", "50%", "40%"]} textAlign="center" fontSize={["13px", "13px", "18px", "18px", "18px"]} m="auto" lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
                <Flex data-aos="flip-left" flexDir={"row"} mb="40px" mt="10px" justifyContent="center" alignItems={"center"} >
                    <Text color="#077BFF" fontWeight={"500"} textAlign="center" mr="5px" fontSize={["13px", "13px", "18px", "18px", "18px"]} lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]} >Read All Blogs</Text>
                    <Icon as={HiArrowNarrowRight} boxSize={4} color="#077BFF" />
                </Flex>
                {/* 6 blogs */}


                <SimpleGrid display={["none", "none", "grid", "grid", "grid"]} columns={[1, 1, 2, 2, 3]} rowGap={["38px", "38px", "38px", "38px", "38px"]} columnGap={["25px", "25px", "25px", "25px", "25px"]} w="90%" m="auto" mb="30px" >
                    {
                        blogArray.map((el, i) => {
                            return (
                                <Flex flexDir={"column"} data-aos="zoom-in" data-aos-delay={i > 3 ? (i + 1 - 3) * 100 : (i + 1) * 100} >
                                    <Box mb="11px" h="200px" w="100%" borderRadius={"5px"} bg="rgba(7, 123, 255, 0.1)" border={"1px solid rgba(7, 123, 255, 0.5)"} >

                                    </Box>
                                    <Text ml="1px" color="#111822" fontWeight={"500"} textAlign="left" fontSize={["13px", "13px", "20px", "20px", "20px"]} mb="1px" lineHeight={["15px", "15px", "25px", "25px", "25px"]} >Blog Title appear here</Text>
                                    <Text ml="1px" opacity={"0.5"} color="#111822" fontWeight={"400"} textAlign="left" fontSize={["12px", "12px", "16px", "16px", "16px"]} mb="1px" lineHeight={["15px", "15px", "19px", "19px", "19px"]} >Category name here</Text>
                                </Flex>
                            )
                        })
                    }

                </SimpleGrid>

                {/* 4 blogs */}
                <SimpleGrid display={["grid", "grid", "none", "none", "none"]} columns={[2, 2, 2, 2, 3]} rowGap={["18px", "18px", "38px", "38px", "38px"]} columnGap={["10px", "10px", "25px", "25px", "25px"]} w="80%" m="auto" mb="30px"  >
                    {
                        blogArray2.map(() => {
                            return (
                                <Flex flexDir={"column"} >
                                    <Box mb="11px" h="130px" w="100%" borderRadius={"5px"} bg="rgba(7, 123, 255, 0.1)" border={"1px solid rgba(7, 123, 255, 0.5)"} >

                                    </Box>
                                    <Text ml="1px" color="#111822" fontWeight={"500"} textAlign="left" fontSize={["13px", "13px", "20px", "20px", "20px"]} mb="1px" lineHeight={["15px", "15px", "25px", "25px", "25px"]} >Blog Title appear here</Text>
                                    <Text ml="1px" opacity={"0.5"} color="#111822" fontWeight={"400"} textAlign="left" fontSize={["12px", "12px", "16px", "16px", "16px"]} mb="1px" lineHeight={["15px", "15px", "19px", "19px", "19px"]} >Category name here</Text>
                                </Flex>
                            )
                        })
                    }

                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default BlogSection