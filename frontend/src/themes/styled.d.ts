// Source:https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3
// styled.d.ts
import 'styled-components';


declare module 'styled-components' {
    export interface DefaultTheme {
        BACKGROUND_COLOUR: string,

        colours: {
            MAIN: string,
            SECONDARY: string,
            SHADING: string
        }
    }
}