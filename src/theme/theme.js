import { createTheme } from '@mui/material/styles';

const theme = createTheme({


      palette: {
            primary: {
                  main: '#1e1e1e',
            },
            secondary: {
                  main: '#fffff',
            },
            error: {
                  main: '#ff0000',
            },
      },
      components: {
            MuiButton: {
                  styleOverrides: {
                        root: {
                        },
                        outlined: {
                              '&.whiteText': {
                                    color: '#ffffff',
                                    border: '1px solid #ffffff',
                                    '&:hover': {
                                          border: '1px solid #ffffff',
                                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                    },
                              },
                        },
                  },
            },
      },

});

export default theme;
