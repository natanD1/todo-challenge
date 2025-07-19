import 'styled-components'
import type { defaultTheme } from '../styles/default-theme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
