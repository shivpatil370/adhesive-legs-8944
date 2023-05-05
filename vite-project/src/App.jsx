// import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer,Heading,ButtonGroup,Button } from '@chakra-ui/react'

// import './App.css'

function App() {
 

  return (
    <>
    <Flex minWidth='max-content' alignItems='center' gap='20' border="1px solid red" pl="10" pr="10" m="0"bg="#1c1c1c" color="#98979f">
  <Box p='2'>
    <Heading size='2xl' color="white">dribbble</Heading>
  </Box>
  <Box p="2" >
 <Heading size="xxl">Inspiration</Heading>
</Box>
<Box p="2" >
 <Heading size="xxl">Find Work</Heading>
</Box>
<Box p="2" >
 <Heading size="xxl">Learn Design</Heading>
</Box>
<Box p="2" >
 <Heading size="xxl">Go Pro</Heading>
</Box>
<Box p="2" >
 <Heading size="xxl">Hire Designers</Heading>
</Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex>
    </>
  )
}

export default App
