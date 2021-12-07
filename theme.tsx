import { extendTheme, ThemeConfig, useColorModeValue } from '@chakra-ui/react'
import '@fontsource/press-start-2p/400.css'
import '@fontsource/m-plus-rounded-1c'
import '@fontsource/roboto'
import '@fontsource/roboto/900.css'

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    components: {
        Heading: {
            baseStyle: {
                fontFamily: '"Roboto"'
            },
            variants: {
                'soft': {
                    fontFamily: '"M PLUS Rounded 1c"'
                },
                'oldVibe': {
                    fontFamily: '"Press Start 2P"'
                },
                'industrial': {
                    fontFamily: '"AQUIRE"'
                }
            }
        },
        Text: {
            baseStyle: {
                fontFamily: '"Roboto"'
            },
            variants: {
                'soft': {
                    fontFamily: '"M PLUS Rounded 1c"'
                },
                'oldVibe': {
                    fontFamily: '"Press Start 2P"'
                },
                'industrial': {
                    fontFamily: '"AQUIRE"'
                }
            }
        },
        Button: {
            baseStyle: {
                fontFamily: '"Roboto"'
            },
            variants: {
                'oldVibe': {
                    fontWeight: '900'
                }
            }
        }
    },
    colors: {
        bg: {
            light: '#FFFFFF',
            dark: {
                100: '#0A0410',
                200: '#171922',
                400: '#3E505F'
            },
            lightA: '#FFFFFFBB',
            darkA: '#0F0E12CC'
        },
        accent: {
            dark: {
                1: '#3A2050',
                2: '#70B1DE',
                3: '#DEB050'
            }
        },
        text: {
            dark: '#F7F8FF',
        }
    }
})


export default theme