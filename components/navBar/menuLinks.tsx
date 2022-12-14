import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { AnimationControls } from "framer-motion";
import { MenuItem } from "./menuItem";
import SearchBar from "./searchBar";

export const MenuLinks = (isOpen:any, onHoverOne:any, props:any) => {
    
    return (
    <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
    >
        <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        >
            <SearchBar/>
            <Link href='/' as={'b'}>
                Login
            </Link>
            <MenuItem  props={props}  to="/how">Sign Up
            </MenuItem>
        </Stack>
    </Box>
    )
}