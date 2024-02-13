import { AlertProps, AvatarProps, cssVar, defineStyle } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';
import { buttonTheme } from "../components/button";
import { modalTheme } from "../components/modal";

const $startColor = cssVar('skeleton-start-color')
const $endColor = cssVar('skeleton-end-color')
const components = {
  // Avatar: {
  //   baseStyle: (props: AvatarProps) => {
  //   }
  // },
  Alert: {
    baseStyle: (props: AlertProps) => {
      return {
        container: {
          border: '1px solid',
          borderColor: `${props.colorScheme}.200` || 'gray.200',
          borderRadius: 16,
          fontSize: "14px",
        },
        description: {
          fontSize: "14px",
        },
      }
    }
  },
  Button: buttonTheme,
  Container: {
    baseStyle: {
      // maxW: "container.xl",
      // padding: {
      //   base: 0, // Padding en base
      //   md: 2, // Padding en md
      //   lg: 4, // Padding en lg
      // },
    },
    sizes: {
      sm: defineStyle({
        maxW: 'container.sm',
        p: '4',
      }),
      md: defineStyle({
        maxW: 'container.md',
        p: '6',
      }),
      lg: defineStyle({
        maxW: 'container.lg',
        p: '8',
      }),
      xl: defineStyle({
        maxW: 'container.xl',
        p: '8',
      }),
    },
    defaultProps: {
      size: "xl",
    }
  },
  Divider: {
    baseStyle: {
      borderColor: 'whiteAlpha.500',
    }
  },
  Skeleton: {
    baseStyle: {
      _light: {
        [$startColor.variable]: 'colors.primary.100', //changing startColor to red.100
        [$endColor.variable]: 'colors.primary.200', // changing endColor to red.400
      },
      _dark: {
        [$startColor.variable]: 'colors.red.800', //changing startColor to red.800
        [$endColor.variable]: 'colors.red.600', // changing endColor to red.600
      },
    }
  },
  FormLabel: {
    baseStyle: {
      fontSize: "14px"
    }
  },
  FormHelperText: {
    baseStyle: {
      fontSize: "12px"
    }
  },
  FormErrorMessage: {
    baseStyle: {
      fontSize: "12px"
    }
  },
  Heading: {
    baseStyle: {
      fontWeight: "bold",
      lineHeight: "1"
    },
    sizes: {
      h1: {
        fontSize: "5xl", 
        mt: 6,
        mb: 4,
      },
      h2: {
        fontSize: "4xl",
        mt: 5,
        mb: 3,
      },
      h3: {
        fontSize: "3xl",
        mt: 4,
        mb: 2,
      },
      h4: {
        fontSize: "2xl",
        mt: 4,
        mb: 2,
      },
      '2xl': {
        fontSize: "5xl",
        lineHeight: "1.4",
        mt: 4,
        mb: 2,
      },
    },
    defaultProps: {
      size: "h2",
    },
  },
  Input: {
    baseStyle:{
      field: {
        // fontSize: '14px',
        borderRadius: '8px',
        backgroundColor: "transparent",
        border: "solid 1px",
      },
    },
    defaultProps: {
      focusBorderColor: 'primary.500',
    },
  },
  Modal: modalTheme,
  TextArea: {
    baseStyle: {
    }
  },
  Switch: {
    baseStyle: {
      thumb: {
        bg: 'gray.300',
        _checked: {
          bg: 'white',
        },
      },
      track: {
        _checked: {
          bg: 'primary.800',
        },
      },
    }
  },
  Popover: {
    baseStyle: {
      popper: {
        boxShadow: 'lg',
      },
      content: {
        borderColor: 'transparent',
        _focusVisible: { 
          boxShadow: 'none !important',
          borderColor: 'transparent !important'
        }, // Elimina el boxShadow o cualquier otro estilo que quieras modificar
        
      }
    },
  },
}

export default components;