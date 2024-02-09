import { ButtonProps, defineStyle, defineStyleConfig } from '@chakra-ui/react'

// Default props
const defaultProps: any = {
  variant: "solid",
  colorScheme: 'primary',
  size: "md"
}

// BaseStyle
const baseStyle = {
  fontWeight: "bold",
  borderRadius: {base: 12, md: 48}
}

// Variants
const darkColorSchemes = ['gray', 'red', 'teal', 'blue', 'primary'];

const outline = defineStyle((props) =>{
  const isDarkColorScheme = darkColorSchemes.includes(props.colorScheme);

  return {
    border: "1px solid",
    borderColor: `gray.500`,
    color: isDarkColorScheme ? 'white' : `${props.colorScheme}.500`,
  }
});

const solid = defineStyle((props) =>{
  const isDarkColorScheme = darkColorSchemes.includes(props.colorScheme);

  return {
    bg: `${props.colorScheme}.600`,
    color: isDarkColorScheme ? 'white' : 'black',
    _hover: {
      bg: `${props.colorScheme}.800`,
    },
    _active: {
      bg: `${props.colorScheme}.700`,
      color: `${props.color}.400`, //no funciona
    },
    _disabled: {
      opacity: 0.3
    },
  }
});

const ghost = defineStyle((props) =>{
  const isDarkColorScheme = darkColorSchemes.includes(props.colorScheme);

  return {
    color: isDarkColorScheme ? 'white' : `${props.colorScheme}.500`,
  }
});

const link = defineStyle((props) =>{
  const isDarkColorScheme = darkColorSchemes.includes(props.colorScheme);

  return {
    color: isDarkColorScheme ? 'white' : `${props.colorScheme}.500`,
    _hover: {
      opacity: 0.5,
      _active: {
        opacity: 1
      },
      _disabled: {
        opacity: 0.4
      }
    },
    _active: {
      color: isDarkColorScheme ? 'white' : `${props.colorScheme}.400`,
      _disabled: {
        opacity: 0.4
      },
    },
  }
});

// Sizes
const sm = defineStyle({
  fontSize: "xs",
  px: 2,
  py: 2,
  minH: "32px"
});

const md = defineStyle({
  fontSize: "sm",
  px: {base: 1, sm: 3},
  py: {base: 1, sm: 3},
  minH: "40px"
});

const lg = defineStyle({
  fontSize: "md",
  px: {base: 2, md: 4},
  py: {base: 2, md: 4},
  minH: "48px"
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { outline, solid, ghost, link },
  sizes: {sm, md, lg},
  defaultProps: defaultProps,
})
