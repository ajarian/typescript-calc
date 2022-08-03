import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string,
      lightGray: string,
      darkGray: string,
      orange: string,
      white: string,
    }
  }
}
