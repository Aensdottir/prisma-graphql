import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Route } from "../../constants/routes";

export default function LoginButton() {

  const router = useRouter()
    return (
            <Button w={'full'} bgColor={'blue.300'} onClick={() => router.push(Route.HomePage())} >Login</Button>
    )
}
  