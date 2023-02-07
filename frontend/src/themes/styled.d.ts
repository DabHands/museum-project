// Source:https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3
// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    BACKGROUND_COLOUR: string,
    FONT_FAMILY: string,

    colours: {
      MAIN: string,
      SECONDARY: string,
      TERTIARY: string,
      SHADING: string,
      LIGHT: string
    }
    BUTTON_TEXT: string;
    BUTTON_HOVER: string;

    BUTTON_SECONDARY_TEXT: string;
    BUTTON_SECONDARY_HOVER: string;

    BUTTON_TERTIARY_TEXT: string,
    BUTTON_TERTIARY_HOVER: string,

    BUTTON_BASIC: string;
    BUTTON_BASIC_TEXT: string;
    BUTTON_BASIC_HOVER: string;
    
    homepage_colours: {
      HEADING: string,
      BUTTON: string,
      TEXT: string,
      BUTTON_HOVER: string,
      TEXT_BUTTON: string,
      TEXT_BUTTON_HOVER: string,
    },

    BOX_SHADOW: string;
    ROW_DIVIDER: string;

    fonts: {
      size: {
        SMALL: string,
        MEDIUM: string,
        LARGE: string,
        TINY: string,
      },
    },
  }
}