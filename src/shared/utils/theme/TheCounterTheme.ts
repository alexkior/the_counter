import tinycolor from 'tinycolor2'

import { calendarStore } from '../../../app'
import { Theme } from './types'

// TODO: Depricate it
const currentCalendar = calendarStore.getCurrentCalendar()
const primaryColor = currentCalendar ? currentCalendar.primaryColor : '#3CB58A'
const secondaryColor = currentCalendar ? currentCalendar.secondaryColor : '#FF0000'

function getPrimaryDark(color: string) {
  const hsl = tinycolor(color).toHsl()
  hsl.l *= 0.5
  return tinycolor(hsl).toHexString()
}

function getSecondaryDark(color: string) {
  const hsl = tinycolor(color).toHsl()
  hsl.l *= 0.7
  return tinycolor(hsl).toHexString()
}

const primaryDark = getPrimaryDark(primaryColor)
const secondaryDark = getSecondaryDark(secondaryColor)

export const TheCounterTheme: Theme = {
  colors: {
    background: '#FFF',
    key: '#000',
    secondary: secondaryColor,
    secondaryDark: secondaryDark,
    primary: primaryColor,
    primaryDark: primaryDark,
    elements: '#B5B4BC',
    elementsLight: '#F0F0F0',
    elementsDark: '#9e9e9e'
  },
  text: {
    size: {
      small: {
        xs: 12,
        s: 14,
        m: 16,
        l: 18
      },
      medium: {
        s: 20,
        m: 24,
        l: 28,
        xl: 64
      },
      large: {
        s: 30,
        m: 32,
        l: 34,
        xl: 80
      }
    }
  }
}
