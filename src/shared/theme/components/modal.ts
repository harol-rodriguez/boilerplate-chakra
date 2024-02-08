import { ButtonProps, defineStyle, defineStyleConfig } from '@chakra-ui/react'

// Default props
const defaultProps: any = {
  variant: "solid",
  colorScheme: 'primary',
  size: "md"
}

// BaseStyle
const baseStyle = {
  dialog: {
    borderRadius: 'md',
    bg: `gray.900`,
  },
  body: {
    p: {
      base: 2,
      md: 6
    }
  }
}

export const modalTheme = defineStyleConfig({
  baseStyle,
})
