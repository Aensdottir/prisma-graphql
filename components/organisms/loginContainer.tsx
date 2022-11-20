import { Button, Flex, Spacer, Text} from "@chakra-ui/react";
import {databaseTest} from "../../firebase/firebase";
import { EmailInput, PasswordInput } from "../atoms/loginInput";

import Image from 'next/image'
import LoginButton from "../atoms/buttons";



export default function LoginContainer() {

    
    return (
        <Flex backgroundColor={'gray.100'} w={300} h={450} p={10} borderRadius={15} boxShadow={'xl'} alignItems={'center'} flexDirection={'column'}>
            
            <Flex marginBottom={10} flexDir={'column'} alignItems={'center'}>
                <Image src="/vercel.svg" alt="Placeholder Logo" width={108} height={24} />
                <Text fontFamily={'serif'}>PLACEHOLDER</Text>
            </Flex>
            <Flex flexDir={'column'} flex={2}>
                <EmailInput marginBottom={5}/>  
                <PasswordInput/>
                <Text onClick={() => console.log("clicked")} color={'gray.400'} >Forgot your password?</Text>
            </Flex>
            <Flex flexDir={'column'} flex={1} w={"full"} justifyContent={'center'} color={'white'}>
                <LoginButton></LoginButton>
            </Flex>
        </Flex>
    )
}
  