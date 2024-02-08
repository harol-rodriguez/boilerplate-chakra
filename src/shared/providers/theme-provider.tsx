'use client'
import '@fontsource/poppins/400.css'

import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from "@chakra-ui/next-js";
import theme from '../theme/theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}