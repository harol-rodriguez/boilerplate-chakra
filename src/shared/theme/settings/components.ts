import { AlertProps, AvatarProps } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';
import { buttonTheme } from "../components/button";
import { modalTheme } from "../components/modal";

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
      maxW: "container.xl",
      padding: {
        base: 0, // Padding en base
        md: 2, // Padding en md
        lg: 4, // Padding en lg
      },
    },
    sizes: {
      sm: "container.sm",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
    },
  },
  Divider: {
    baseStyle: {
      borderColor: 'whiteAlpha.500',
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