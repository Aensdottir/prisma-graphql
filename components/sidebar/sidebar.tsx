import { Text } from "@chakra-ui/react"
import React from "react"
import SideBarContainer from "./sidebarContainer"
import { SidebarLinks } from "./sidebarLinks"

export const Sidebar = (props:any) => {
    const [isOpen, setIsOpen] = React.useState(false)
  
    const toggle = () => setIsOpen(!isOpen)
  
    return (
        <SideBarContainer {...props} >
            <SidebarLinks></SidebarLinks>

        </SideBarContainer>
    )
  }