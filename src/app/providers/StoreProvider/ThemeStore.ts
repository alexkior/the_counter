import { makeAutoObservable } from 'mobx'
import tinycolor from 'tinycolor2'

import { Theme } from '../../../shared/types'
import { calendarStore } from './StoreProvider'

export class ThemeStore {
  constructor() {
    makeAutoObservable(this)
  }

  getTheme(): Theme {
    const currentCalendar = calendarStore.getCurrentCalendar()
    const primaryColor = currentCalendar ? currentCalendar.primaryColor : '#3CB58A'
    const secondaryColor = currentCalendar ? currentCalendar.secondaryColor : '#FF0000'

    return {
      colors: {
        background: '#FFF',
        key: '#000',
        secondary: secondaryColor,
        secondaryDark: this.getSecondaryDark(secondaryColor),
        primary: primaryColor,
        primaryDark: this.getPrimaryDark(primaryColor),
        elements: '#B5B4BC',
        elementsLight: '#F0F0F0',
        elementsDark: '#9e9e9e'
      },
      text: {
        size: {
          small: { xs: 12, s: 14, m: 16, l: 18 },
          medium: { s: 20, m: 24, l: 28, xl: 64 },
          large: { s: 30, m: 32, l: 34, xl: 80 }
        }
      }
    }
  }

  private getPrimaryDark(color: string) {
    const hsl = tinycolor(color).toHsl()
    hsl.l *= 0.5
    return tinycolor(hsl).toHexString()
  }

  private getSecondaryDark(color: string) {
    const hsl = tinycolor(color).toHsl()
    hsl.l *= 0.7
    return tinycolor(hsl).toHexString()
  }
}
