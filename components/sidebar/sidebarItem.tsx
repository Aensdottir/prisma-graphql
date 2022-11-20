import Link from "next/link"
import { Button, Flex, Text } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import {useRouter} from "next/router"
import { Route } from "../../constants/routes"

export const SidebarItem = ({ children, isLast, to = "/", ...rest }: any) => {
    const router = useRouter()
    return (
      <Button 
        onClick={() => router.push(to)}
        justifyContent={'flex-start'}
        w={'full'}
        borderRadius={0}
        paddingY={3}
        bgColor={'white'}
      >
        <StarIcon/>
        <Text marginLeft={3} display={['none', null, null, 'block']} {...rest}>
          {children}
        </Text>
      </Button>
    )
  }
  