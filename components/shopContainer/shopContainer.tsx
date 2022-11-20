import { Box, Button, Flex, Grid, Stack,Wrap,WrapItem } from "@chakra-ui/react";

export default function ShopContainer() {
    return (
        <Flex 
            minWidth={800} 
            borderRadius={10}
            wrap={'wrap'}
            bgColor={'white'} 
        >
                <Flex h={400} w={'33.333%'}  padding={3}>
                    <Flex w={'full'} h={'full'}  borderWidth={1} borderColor={'black'} ></Flex>
                </Flex>
                <Flex h={400} w={'33.333%'}  padding={3}>
                    <Flex w={'full'} h={'full'}  borderWidth={1} borderColor={'black'} ></Flex>
                </Flex>
                <Flex h={400} w={'33.333%'}  padding={3}>
                    <Flex w={'full'} h={'full'}  borderWidth={1} borderColor={'black'} ></Flex>
                </Flex>
                <Flex h={400} w={'33.333%'}  padding={3}>
                    <Flex w={'full'} h={'full'}  borderWidth={1} borderColor={'black'} ></Flex>
                </Flex>     
        </Flex>
    )
}
  