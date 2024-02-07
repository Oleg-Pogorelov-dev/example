import { colors } from '../theme';

export type Theme = {
  colors: {
    [color in Colors]: string;
  };
  breakpoints: {
    [name: string]: string;
  };
};

export type Colors = keyof typeof colors;