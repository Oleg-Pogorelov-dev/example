import 'styled-components';
import { Theme } from '@/utils/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
