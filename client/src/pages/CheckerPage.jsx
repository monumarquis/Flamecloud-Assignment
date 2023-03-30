import {
  Flex, Highlight, Text, Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon
} from '@chakra-ui/react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { tableData } from '../data.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CheckerPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Flex w="100%" flexDir={"column"}>
      {/* Ist section */}
      <Flex data-aos="zoom-in-right" data-aos-delay="200" flexDir={"column"} pb={["0px","0px","42px","42px","42px"]} w={["80%", "80%", "85%", "75%", "60%"]} m="auto" mt={["10px","10px","80px","80px","80px"]} pt="95px" justifyContent="center"  >
        <Text fontWeight={"600"} fontSize={["11px", "11px", "16px", "16px", "16px"]} opacity="0.5" color={"#111822"} textAlign={"center"} >PROXY LOCATION CHECKER</Text>
        <Text color="#111822" fontWeight={"600"} mb={["9px", "9px", "20px", "20px", "20px"]} fontSize={["26px", "26px", "46px", "56px", "56px"]} lineHeight={["35.2px", "35.2px", "57.2px", "67.2px", "67.2px"]} textAlign={"center"} >Check Locations of all your <span style={{ color: "#077BFF" }} >Proxies</span>  Free of Cost</Text>
        <Text fontWeight={"600"} textAlign="center" w={["80%", "80%", "85%", "80%", "65%"]} m="auto" opacity="0.5" fontSize={["12px", "12px", "22px", "22px", "22px"]} color={"#111822"} lineHeight={["15.4px", "15.4px", "26.4px", "26.4px", "26.4px"]} >To Check location, enter the address or proxies you want to check (1 IP Per line)</Text>
      </Flex >
      {/* 2nd section */}
      <Flex flexDir={"column"} pb="42px" w={["80%", "80%", "85%", "75%", "60%"]} m="auto" pt={["20px","20px","42px","42px","42px"]} justifyContent="center"  >
        <Flex data-aos="flip-right" mb="21px" flexDir={"column"} h={["139px","139px","169px","169px","169px"]} p="19px" bg="rgba(217, 216, 214, 0.25)" border={"1px solid rgba(0, 0, 0, 0.25)"} borderRadius="5px" >
          <Text color="#111822" fontWeight={"500"} fontSize={["18px", "18px", "18px", "18px", "18px"]} lineHeight={["22px", "22px", "22px", "22px", "22px"]} >8.8.8.8</Text>
          <Text color="#111822" fontWeight={"500"} fontSize={["18px", "18px", "18px", "18px", "18px"]} lineHeight={["22px", "22px", "22px", "22px", "22px"]} >1.1.1.1</Text>
          <Text color="#111822" fontWeight={"500"} fontSize={["18px", "18px", "18px", "18px", "18px"]} lineHeight={["22px", "22px", "22px", "22px", "22px"]} >192.168.1.1</Text>
        </Flex>
        <Flex data-aos="flip-right" flexDir={["column", "column", "row", "row", "row"]} justifyContent="space-between" mb={["5px","5px","51px","51px","51px"]}   >
          <Flex borderRadius={"5px"} w={"200px"} bg="#077BFF" alignItems={"center"} justifyContent="center" py="10px" mb={["10px", "10px", "0px", "0px", "0px"]} >
            <Text color="#FFFFFF" fontSize={["13px", "13px", "16px", "16px", "16px"]} fontWeight="600" lineHeight={"19.2px"}  >Check Location</Text>
          </Flex>
          <Text color="#111822" w={["100%", "100%", "225px", "225px", "225px"]} opacity={"0.5"} fontSize={["11px", "11px", "14px", "14px", "14px"]} fontWeight="400" lineHeight={"16.8px"} >
            <Highlight
              query={['Terms of Service', 'Privacy Policy']}
              styles={{ textDecoration: "underline", textDecorationColor: "#111822", textDecorationThickness: 0.5 }}
            >
              By using our tool, you agree our Terms of Service and Privacy Policy
            </Highlight>
          </Text>
        </Flex>
        <Text color="#077BFF" mb="17px" fontWeight={"500"} fontSize={["17px", "17px", "20px", "20px", "20px"]} lineHeight={["24px", "24px", "24px", "24px", "24px"]} >Your Results</Text>
        {/* table section */}
        <TableContainer data-aos="flip-right" background={"rgba(217, 216, 214, 0.05)"} borderRadius="5px" border="1px solid rgba(0, 0, 0, 0.25)" w="100%" >
          <Table >
            <Thead border={" 1px solid rgba(0, 0, 0, 0.25)"} bg="rgba(0, 0, 0, 0.1)">
              <Tr >
                <Th p={[2, 2, 4, 4, 4]} fontSize={["12px", "12px", "14px", "14px", "14px"]} fontWeight="600" lineHeight={"16.8px"} opacity="0.6" color="#111822" >IP</Th>
                <Th p={[2, 2, 4, 4, 4]} fontSize={["12px", "12px", "14px", "14px", "14px"]} fontWeight="600" lineHeight={"16.8px"} opacity="0.6" color="#111822">PROXY</Th>
                <Th p={[2, 2, 4, 4, 4]} fontSize={["12px", "12px", "14px", "14px", "14px"]} fontWeight="600" lineHeight={"16.8px"} opacity="0.6" color="#111822">CITY</Th>
                <Th p={[2, 2, 4, 4, 4]} fontSize={["12px", "12px", "14px", "14px", "14px"]} fontWeight="600" lineHeight={"16.8px"} opacity="0.6" color="#111822">COUNTRY</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                tableData.map((el) => {
                  return (
                    <Tr border={"1px solid rgba(0, 0, 0, 0.25)"} bg="rgba(217, 216, 214, 0.05)" borderRadius={"5px"} >
                      <Td p={[2, 2, 3, 3, 4]} fontSize={["12px", "12px", "14px", "14px", "14px"]} fontWeight="500" lineHeight={"16.8px"} color="#111822">{el.ip}</Td>
                      <Td p={[2, 2, 3, 3, 4]} fontSize={["12px", "12px", "14px", "14px", "14px"]} fontWeight="500" lineHeight={"16.8px"} color="#111822">{el.proxy}</Td>
                      <Td p={[2, 2, 3, 3, 4]} fontSize={["12px", "12px", "14px", "14px", "14px"]} fontWeight="500" lineHeight={"16.8px"} color="#111822">{el.city}</Td>
                      <Td p={[2, 2, 3, 3, 4]} fontSize={["12px", "12px", "14px", "14px", "14px"]} fontWeight="500" lineHeight={"16.8px"} color="#111822">{el.country}</Td>
                    </Tr>
                  )
                })
              }

            </Tbody>
          </Table>
        </TableContainer>
        <Flex flexDir={"row"} justifyContent="center" alignItems={"center"} mt={["25px","25px","40px","40px","40px"]} >
          <Text fontSize={["13px", "13px", "18px", "18px", "18px"]} fontWeight="500" letterSpacing={"-0.02em"} lineHeight={"21.6px"} color="#111822">Check out our IPv6 Compatibility Checker</Text>
          <Flex flexDir={"row"} justifyContent="center" alignItems={"center"} ml={["10px", "10px", "15px", "15px", "15px"]} >
            <Text color="#077BFF" fontWeight={"500"} mr={["2px", "2px", "5px", "5px", "5px"]} letterSpacing={"-0.02em"} fontSize={["13px", "13px", "18px", "18px", "18px"]} lineHeight={["15.2px", "15.2px", "21.2px", "21.2px", "21.2px"]} >Veiw Tools</Text>
            <Icon as={HiArrowNarrowRight} boxSize={[3, 3, 4, 4, 4]} color="#077BFF" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CheckerPage