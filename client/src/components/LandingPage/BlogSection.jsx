import { Flex, SimpleGrid, Text, Icon, Box } from '@chakra-ui/react'
import { HiArrowNarrowRight } from "react-icons/hi"

const BlogSection = () => {
    const blogArray = new Array(6).fill(0)
    const blogArray2 = new Array(4).fill(0)
    return (
        <Flex flexDir={"column"} w="100%" px={["0", '0', "2", "9", "9"]} justifyContent="center" mb="120px" >
            <Text color="#111822" mb="10px" fontWeight={"600"} textAlign="center" fontSize={["24px", "24px", "36px", "36px", "36px"]} lineHeight={["32.2px", "32.2px", "43.2px", "43.2px", "43.2px"]} >Read our <span style={{ color: "#077BFF" }} >Exclusive</span> Blog</Text>
            <Text color="#111822" opacity="0.5" fontWeight={"500"} w={["78%", "78%", "70%", "50%", "40%"]} textAlign="center" fontSize={["13px", "13px", "18px", "18px", "18px"]} m="auto" lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            <Flex flexDir={"row"} mb="40px" mt="10px" justifyContent="center" alignItems={"center"} >
                <Text color="#077BFF" fontWeight={"500"} textAlign="center" mr="5px" fontSize={["15px", "15px", "18px", "18px", "18px"]} lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]} >Read All Blogs</Text>
                <Icon as={HiArrowNarrowRight} boxSize={4} color="#077BFF" />
            </Flex>
            {/* 6 blogs */}
            <SimpleGrid px="40px" display={["none", "none", "grid", "grid", "grid"]} columns={[1, 1, 2, 2, 3]} rowGap={["38px", "38px", "38px", "38px", "38px"]} columnGap={["25px", "25px", "25px", "25px", "25px"]} >
                {
                    blogArray.map(() => {
                        return (
                            <Flex flexDir={"column"} >
                                <Box mb="11px" h="221" w="100%" borderRadius={"5px"} bg="rgba(7, 123, 255, 0.1)" border={"1px solid rgba(7, 123, 255, 0.5)"} >

                                </Box>
                                <Text ml="1px" color="#111822" fontWeight={"500"} textAlign="left" fontSize={["13px", "13px", "20px", "20px", "20px"]} mb="1px" lineHeight={["15px", "15px", "25px", "25px", "25px"]} >Blog Title appear here</Text>
                                <Text ml="1px" opacity={"0.5"} color="#111822" fontWeight={"400"} textAlign="left" fontSize={["12px", "12px", "16px", "16px", "16px"]} mb="1px" lineHeight={["15px", "15px", "19px", "19px", "19px"]} >Category name here</Text>
                            </Flex>
                        )
                    })
                }

            </SimpleGrid>
            {/* 4 blogs */}
            <SimpleGrid px="40px" display={["grid", "grid", "none", "none", "none"]} columns={[2, 2, 2, 2, 3]} rowGap={["38px", "38px", "38px", "38px", "38px"]} columnGap={["10px", "10px", "25px", "25px", "25px"]} >
                {
                    blogArray2.map(() => {
                        return (
                            <Flex flexDir={"column"} >
                                <Box mb="11px" h="150px" w="100%" borderRadius={"5px"} bg="rgba(7, 123, 255, 0.1)" border={"1px solid rgba(7, 123, 255, 0.5)"} >

                                </Box>
                                <Text ml="1px" color="#111822" fontWeight={"500"} textAlign="left" fontSize={["13px", "13px", "20px", "20px", "20px"]} mb="1px" lineHeight={["15px", "15px", "25px", "25px", "25px"]} >Blog Title appear here</Text>
                                <Text ml="1px" opacity={"0.5"} color="#111822" fontWeight={"400"} textAlign="left" fontSize={["12px", "12px", "16px", "16px", "16px"]} mb="1px" lineHeight={["15px", "15px", "19px", "19px", "19px"]} >Category name here</Text>
                            </Flex>
                        )
                    })
                }

            </SimpleGrid>
        </Flex>
    )
}

export default BlogSection