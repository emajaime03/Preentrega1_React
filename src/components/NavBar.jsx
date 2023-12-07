import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Text, Box, Square, Center, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <Flex color='white' bg='#6a796a' align='center' p='20px' textAlign='center'>
            <Box flex='1'>
                <Text >TecnoHub</Text>
            </Box>
            <Box w='300px'>
                <Menu>
                    <MenuButton>
                        Filtrar
                    </MenuButton>
                    <MenuList color='black'>
                        <MenuItem >Procesadores</MenuItem>
                        <MenuItem>Mothers</MenuItem>
                        <MenuItem>Placas</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box w='300px' align='center'>
                <CartWidget />
            </Box>
        </Flex>
    )
}

export default NavBar