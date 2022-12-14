import { Box, Heading, Text } from "@chakra-ui/layout"
import { useColorModeValue } from '@chakra-ui/color-mode'
import { motion } from "framer-motion"

const AboutMe = () => {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 1
            }
        }
    }
    const trimGrad = useColorModeValue('linear-gradient(90deg, var(--chakra-colors-accent-light) 88%, transparent 88%, transparent 88%, transparent 94%, var(--chakra-colors-accent-light) 94%, var(--chakra-colors-accent-light))' ,
                                       'linear-gradient(90deg, var(--chakra-colors-accent-dark) 88%, transparent 88%, transparent 88%, transparent 94%, var(--chakra-colors-accent-dark) 94%, var(--chakra-colors-accent-dark))')
    const item = {
        hidden: {
            opacity: 0,
            y: '30%'
        },
        visible: {
            opacity: 1,
            y: 0,
            type: 'tween',
            transition: {
                duration: 1
            }
        }
    }
    return (
        <Box
            id='AboutMe'
            bg={useColorModeValue('bg.light.200', 'bg.dark.200')}
            px='5%'
            mt={{ base: '0', md: '2em' }}
            py='3rem'
            zIndex={4}
            overflowX='hidden'
        >
            <Heading
                display='flex'
                flexDir='column'
                pos='relative'
                variant='industrial'
                pr='2rem'
                mb='1rem'
                w='fit-content'
                fontSize='3xl'
                _before={{
                    content: '" "',
                    position: 'absolute',
                    height: '8px',
                    width: '5.7%',
                    bg: '#DDDDE0',
                    margin: 'auto',
                    transform: 'skewX(-45deg)',
                    bottom: 0,
                    right: "18.4%",
                    zIndex: 2,
                    filter: 'url(#inset-shadow)'
                }}
                _after={{
                    content: '" "',
                    bg: trimGrad,
                    display: 'block',
                    height: '8px',
                    width: '98%',
                    transform: 'skewX(-45deg)',
                    marginLeft: '3%',
                    filter: 'url(#inset-shadow)',
                }}
            >
                Who am I ?
            </Heading>
            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
                variants={container}
                initial='hidden'
                animate='visible'
            >
                <Box
                    as={motion.div}
                    variants={item}
                    mt='0.5em'
                    textAlign='justify'
                >
                    <Text
                        style={{ textIndent: '3rem' }}
                        fontSize={{ base: 'lg', md: 'xl' }}
                    >
                        Since getting my first computer at age 7 I've been fixing, breaking, and fixing(again) computers.
                        At age 17, after returning from my exchange to the USA, I started working as a CAD Drafter for Architecture/Civil Engineering.
                        In the coming years I continued to work, finished high-school, and joinned the Bachelor of Civil Engineering (Dropped) at Cat??lica de Santa Catarina.
                    </Text>
                </Box>
                <Box
                    as={motion.div}
                    variants={item}
                    mt='0.5em'
                    textAlign='justify'
                >
                    <Text
                        style={{ textIndent: '3rem' }}
                        fontSize={{ base: 'lg', md: 'xl' }}
                    >
                        At 20, I decided to take a risk and move across to the world to study Computer Engineering at Mae Fah Luang University.
                        During my internship time I returned to my hometown to work at WEG as their engineering intern refactoring C code and later, during the extended period, validating hardware readings.
                    </Text>
                </Box>
                <Box
                    as={motion.div}
                    variants={item}
                    mt='0.5em'
                    textAlign='justify'
                >
                    <Text
                        style={{ textIndent: '3rem' }}
                        fontSize={{ base: 'lg', md: 'xl' }}
                    >
                        After completing university in 2017, I moved to China where I worked as ESL Teacher, Programming Teacher, and STEAM Teacher.
                        Currently, I work as Computer Engineer and Program Leader at a STEAM / Maker Center, assisting teachers, building internal tools and dealing with minor management tasks.
                    </Text>
                </Box>
            </motion.div>
        </Box >
    )
}

export default AboutMe