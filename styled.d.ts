import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      green_100: string;
      green_200: string;
      blue_100: string;
      blue_200: string;
      black: string;
      white: string;
      yellow: string;
      grey_100: string;
      grey_200: string;
      grey_300: string;
      red: string;
    };
  }
}