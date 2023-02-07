//Source: https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3
// Manchester themeing: https://www.staffnet.manchester.ac.uk/brand/visual-identity/
// theme.ts
import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  BACKGROUND_COLOUR: '#ffffff',
  FONT_FAMILY: "Radio Canada",
  colours: {
    MAIN: '#e9757f',
    SECONDARY: '#95ceca',
    TERTIARY: '#5a5f9f',
    SHADING: '#040720',
    LIGHT: '#ecede8',
  },

  BUTTON_TEXT: '#FFFFFF',
  BUTTON_HOVER: '#df3a47',

  BUTTON_SECONDARY_TEXT: '#FFFFFF',
  BUTTON_SECONDARY_HOVER: '#6c989c',
  BUTTON_TERTIARY_TEXT: '#FFFFFF',
  BUTTON_TERTIARY_HOVER: '#7c80b6',

  BUTTON_BASIC: '#d8d7dc',
  BUTTON_BASIC_TEXT: '#171717',
  BUTTON_BASIC_HOVER: '#c2c1c6',

  homepage_colours: {
    HEADING: '#343a40',
    BUTTON: '#343a40',
    TEXT: '#495057',
    BUTTON_HOVER: '#495057',
    TEXT_BUTTON: '#FBC794',
    TEXT_BUTTON_HOVER: '#fad4ad',
  },

  BOX_SHADOW: '0 5px 10px rgba(0,0,0,.1)',

  ROW_DIVIDER: 'solid 1.5px rgba(0, 0,0,.1)',

  fonts: {
    size: {
      SMALL: '16pt',
      MEDIUM: '20pt',
      LARGE: '24pt',
      TINY: '12pt',
    },
  }
};