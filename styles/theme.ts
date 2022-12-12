import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const MR_BLUE = '#009DD7'
export const MR_RED = '#C7043D'
export const MR_DARK_BLUE = '#023F84'
export const MR_GREEN = '#16A64A'
export const MR_PURPLE = '#641869'
export const MR_YELLOW = '#FAB800'

export const MR_GRAY_4 = '#495057'
export const MR_GRAY_3 = '#ACB5BD'
export const MR_GRAY_2 = '#DDE2E5'
export const MR_GRAY_1 = '#F8F9FA'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: MR_BLUE,
    },
    secondary: {
      main: MR_DARK_BLUE,
    },
    error: {
      main: red.A400,
    },
  },
  spacing: 4,
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.25rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1.1rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.typography.body1,
        h1: themeParam.typography.h1,
        h2: themeParam.typography.h2,
        h3: themeParam.typography.h3,
        h4: themeParam.typography.h4,
        h5: themeParam.typography.h5,
        h6: themeParam.typography.h6,
      }),
    },
  },
})

export default theme
