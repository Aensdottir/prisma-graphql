import Link from "next/link"
import { Button, Text } from "@chakra-ui/react"
import {useRouter} from "next/router"
import { Route } from "../../constants/routes"

export const MenuItem = ({ children, isLast, to = "/", ...props }: any) => {
    const router = useRouter()
    return (
      <Button 
        onClick={() => router.push(Route.HomePage())}
        borderRadius={15}
        bgColor={'blue.500'}
        shadow={'inner'}
        
        _hover={{bgColor:'blue.600'}}
        _active ={{bgColor:'blue.700', borderColor:'blue.700'}}
        
        {...props}
      >
        <Text display="block" >
          {children}
        </Text>
      </Button>
    )
  }
  