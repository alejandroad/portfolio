import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display:inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    const image  = '/images/pokeball.png'

    return (
        <Link href="/">   
            <LogoBox>
                <Image src ={image} width={30} height={30} alt="logo"/>
                <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c'
                fontWeight="bold"
                ml={3}>
                Alejandro Arias Diaz
                </Text>
            
            </LogoBox>      
        </Link>
    )
}

export default Logo