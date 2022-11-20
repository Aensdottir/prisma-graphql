import { Button, Flex, Input } from "@chakra-ui/react";
import {databaseTest} from "../../firebase/firebase";

export function EmailInput(props:any) {
    return (
            <Input bgColor={'white'} placeholder={'Email'} borderWidth={0} borderColor={"gray.300"} boxShadow={'md'}  {...props}>
            
            </Input>
    )
}
export function PasswordInput({props}:any) {
    return (
        <Flex>
            <Input bgColor={'white'}  placeholder={'Password'} borderWidth={0} borderColor={"gray.300"} boxShadow={'md'} {...props}>
            
            </Input>
        </Flex>
    )
}