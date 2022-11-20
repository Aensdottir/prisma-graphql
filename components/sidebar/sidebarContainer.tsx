import { Button, Flex } from "@chakra-ui/react";

export default function SideBarContainer({ children, ...props }:any) {
    return (
        <Flex 
            h={500}   
            w={'full'} 
            mr={5} 
            bgColor={'white'} 
            borderRadius={10} 
            overflow={'hidden'} 
            visibility={['collapse',null,null,'visible']} 
            {...props}
        >
            {children}
        </Flex>
    )
}
