import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
    return (
        <Container> 
            <Box borderRadius="lg" bg = "red" mb={6} p={3} textAlign="center">
                Hello, I&apos;m an ambitious full-stack developer based in Austin, Texas!
            </Box>
        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Alejandro Arias Diaz
                </Heading>
        <p>Software Engineer Intern @ Amazon</p>
            </Box>
        </Box>
        </Container>
    )
}

export default Page