import { SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function SearchBar(props:any) {
    return (
        <Flex {...props}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                >
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input 
                    placeholder="Search" 
                    _placeholder={{opacity:1, color:'white'}}
                    borderRadius={15}
                    borderColor={'gray.300'}
                    bgColor={'blue.500'}
                    color={'white'}
                    shadow={'md'}
                    _focus={{bgColor:'blue.700', borderColor:'blue.700'}}
                />
            </InputGroup>
        </Flex>
    )
}
  