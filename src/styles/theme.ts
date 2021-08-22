import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme<Theme>({
  styles: {
    global: {
      'html,body': {
        backgroundColor: 'light.heading',
      },
    },
  },
  colors: {
    highlight: '#FFBA08',
    light: {
      heading: '#f5f8fa',
      info: '#DADADA',
    },
    dark: {
      heading: '#47585B',
      info: '#999999',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});
