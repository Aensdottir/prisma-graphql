import { Flex, Text } from "@chakra-ui/react"
import { useAnimationControls } from "framer-motion"
import React, { useEffect } from "react"
import { NavBarBackgroundAnim } from "../animated/navBarBgAnim"
import {NavBarLogo} from "./logo"
import { MenuLinks } from "./menuLinks"
import { NavBarContainer } from "./navBarContainer"
import SearchBar from "./searchBar"

export const NavBar = (props:any) => {
    const [isOpen, setIsOpen] = React.useState(false)
  
    const toggle = () => setIsOpen(!isOpen)
    const navBarAnimControls = useAnimationControls()
    
    /*useEffect(()=>{
      console.log('bbbbb')    
      console.log(navBarAnimControls)
        navBarAnimControls.start({
        backgroundColor: "#f00",
        transition: { duration: 3 },
      })
    },[navBarAnimControls])*/ 
    
    return (
      <NavBarContainer navBarAnimControls={navBarAnimControls} {...props}>
        <NavBarBackgroundAnim animate={navBarAnimControls} ></NavBarBackgroundAnim>
        <NavBarLogo></NavBarLogo>
        <MenuLinks onMouseEnter={()=>navBarAnimControls.start({
          backgroundColor: "#f00",  
          transition: { duration: 3 },
        })} isOpen={isOpen}/>
      </NavBarContainer>
    )
  }