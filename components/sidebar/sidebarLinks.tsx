import { Box, Stack, StackDivider, VStack } from "@chakra-ui/react";
import { Route } from "../../constants/routes";
import { SidebarItem } from "./sidebarItem";

export const SidebarLinks = (isOpen:any) => {
    return (
        
        <VStack
        align="center"
        width={'full'}
        spacing={0}
        divider={<StackDivider borderColor='gray.400' />}
        >
            <SidebarItem to={Route.HomePage()}>Home</SidebarItem>
            <SidebarItem to={''}>How It Works</SidebarItem>
        </VStack>
    )
}