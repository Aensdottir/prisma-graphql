import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { AnimationControls, motion, TargetAndTransition, useAnimationControls, VariantLabels} from "framer-motion";
import { useEffect } from "react";

export const NavBarBackgroundAnim = (props:any) => {
    return (        
    <Box as={motion.div} 
        backgroundColor={'black'}
        position={'absolute'} 
        top={0} 
        right={-300} 
        h={'full'} 
        w={'min-content'} 
        flexDir={'row'} 
        whileHover={{ right:-150, backgroundColor:'#f00' }}
        {...props}
    >
      <Flex h={'inherit'}>
        <Icon h={'inherit'} w={'auto'} color='blue.300'>
          <path
            fill='currentColor' 
            stroke="'green.500"
            d="M 10,0
              L 24,25
              V 0" 
          />
        </Icon>
        <Box bgColor={'blue.300'} h={'full'} w={500} />
      </Flex>
    </Box>
    )
}
  