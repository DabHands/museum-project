//Source: https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3
// Manchester themeing: https://www.staffnet.manchester.ac.uk/brand/visual-identity/
// theme.ts
import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
    BACKGROUND_COLOUR: '#FFFFFF',
    FONT_FAMILY: "Verdana, Geneva, sans-serif",
    colours: {
        MAIN: '#660099',
        SECONDARY: '#fbba25',
        SHADING: '#999999',
        LIGHT: '#ecede8',
    },

    BUTTON_TEXT: '#FFFFFF',
    BUTTON_HOVER: '#52007a',

    BUTTON_SECONDARY_TEXT: '#171717',
    BUTTON_SECONDARY_HOVER: '#e2a721',

    BUTTON_BASIC: '#d8d7dc',
    BUTTON_BASIC_TEXT: '#171717',
    BUTTON_BASIC_HOVER: '#c2c1c6',

    APPBAR_TEXT: '#F7D69E',
    APPBAR_BACKGROUND: '#070600',
    APPBAR_FONT_SIZE: '18px',
    APPBAR_BUTTON_HOVER_STATE_COLOR: '#78756e',

    BOX_SHADOW: '0 5px 10px rgba(0,0,0,.1)',

    ROW_DIVIDER: 'solid 1.5px rgba(0, 0,0,.1)',
    
};