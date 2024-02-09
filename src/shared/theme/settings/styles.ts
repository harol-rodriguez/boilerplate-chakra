import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {

  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('gray.500', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
  }),
}

export default styles;