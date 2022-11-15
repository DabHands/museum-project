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
            SHADING: string,
            LIGHT: string
        }
        BUTTON_TEXT: string;
        BUTTON_HOVER: string;

        BUTTON_SECONDARY_TEXT: string;
        BUTTON_SECONDARY_HOVER: string;

        BUTTON_BASIC: string;
        BUTTON_BASIC_TEXT: string;
        BUTTON_BASIC_HOVER: string;

        APPBAR_TEXT: string;
        APPBAR_BACKGROUND: string;
        APPBAR_FONT_SIZE: string;
        APPBAR_BUTTON_HOVER_STATE_COLOR: string;
        APPBAR_BARS_BUTTON_COLOR: string;

        BOX_SHADOW: string;
        ROW_DIVIDER: string;
    }
}