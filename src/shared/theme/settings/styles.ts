const styles = {
  global: {
    "html, body": {
      color: "white",
      bg: "black",
      lineHeight: "tall",
    },
    'html body *:focus-visible': { 
      borderColor: "primary.800 !important",
      boxShadow: "none !important",
    },
    a: {
      color: "primary.500",
    },
    '.chakra-form-control input': {
      background: 'transparent',
      border: '1px solid',
      borderColor: 'whiteAlpha.200',
    },
  },
}

export default styles;