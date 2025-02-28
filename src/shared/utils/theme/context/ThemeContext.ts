import { createContext } from 'react'

import { TheCounterTheme } from '../TheCounterTheme'
import { ThemeContextValue } from './ThemeContextValue'

export const ThemeContext = createContext<ThemeContextValue>({
  scheme: 'light',
  theme: TheCounterTheme
})
