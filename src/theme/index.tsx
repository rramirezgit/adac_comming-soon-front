import { createTheme, ThemeProvider, useTheme } from '@mui/material'
import { ReactElement } from 'react'

interface ThemeProps {
  children?: ReactElement | ReactElement[]
}

export const getCssVar = (name: string): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
}

const ThemeADAC = ({ children }: ThemeProps): JSX.Element => {
  const theme = useTheme()
  const themenew = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            [theme.breakpoints.down('sm')]: {
              paddingTop: '10px'
            }
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Gotham Rounded Bold'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none'
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            backgroundColor: getCssVar('--blue'),
            '&:hover': {
              backgroundColor: getCssVar('--blue-hover')
            }
          }
        }
      }
    },
    palette: {
      primary: {
        light: getCssVar('--primary'),
        main: getCssVar('--primary'),
        dark: getCssVar('--primary'),
        contrastText: '#fff'
      }
    },
    typography: {
      fontFamily: 'Gotham Rounded Light'
    }
  })
  return <ThemeProvider theme={themenew}>{children}</ThemeProvider>
}

export default ThemeADAC
