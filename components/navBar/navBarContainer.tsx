import { Box, Flex, Icon } from "@chakra-ui/react"
import { AnimationControls } from "framer-motion"
import { useEffect } from "react"
import {NavBarBackgroundAnim} from "../animated/navBarBgAnim"

export const NavBarContainer = ({ children, ...props }:any, navBarAnimControls: AnimationControls) => {


  useEffect(()=>{
    console.log('bbbbb')    
    console.log(navBarAnimControls)
  },[navBarAnimControls])

    return (
      <Flex 
        bgColor={["white"]} 
        w="100%"
        mb={8}
        p={4}
        shadow={'xl'}
        justify={'center'}
        position={'relative'}
        overflow={'hidden'}
      >
        {/*<NavBarBackgroundAnim animate={navBarAnimControls} />*/}
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          maxWidth={'1074px'}
          w="100%"
          color={'white'}
          {...props}
        >
          {children}
        </Flex>
      </Flex>
    )
  }