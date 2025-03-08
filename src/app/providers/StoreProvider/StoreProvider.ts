import { makeObservable, makeAutoObservable, observable, action } from 'mobx'
import tinycolor from 'tinycolor2'

import { Theme } from '../../../shared/utils/theme/types'

interface Calendar {
  id: string
  name: string
  iconName: string
  isPositive: boolean
  primaryColor: string
  secondaryColor: string
  days: string[]
}

class CalendarStore {
  calendars: Calendar[] = []
  currentCalendar: Calendar | null = null

  constructor() {
    makeObservable(this, {
      calendars: observable,
      fetchCalendars: action,
      setCurrentCalendar: action,
      getCurrentCalendar: action,
      createCalendar: action,
      editCalendar: action,
      deleteCalendar: action,
      addDay: action,
      removeDay: action
    })
  }

  fetchCalendars() {
    //TODO: Add actual fetching
    return this.calendars
  }

  setCurrentCalendar(calendarId: string) {
    const calendar = this.calendars.find((calendar) => calendar.id === calendarId)
    if (calendar) {
      this.currentCalendar = calendar
    }
  }

  getCurrentCalendar() {
    return this.currentCalendar
  }

  createCalendar(
    id: string,
    name: string,
    iconName: string,
    isPositive: boolean,
    primaryColor: string,
    secondaryColor: string
  ) {
    this.calendars.push({
      id,
      name,
      iconName,
      isPositive,
      primaryColor,
      secondaryColor,
      days: []
    })
  }

  editCalendar(
    id: string,
    name: string,
    iconName: string,
    isPositive: boolean,
    primaryColor: string,
    secondaryColor: string
  ) {
    console.log('editCalendar', id, name, iconName, isPositive, primaryColor, secondaryColor)

    const calendar = this.calendars.find((calendar) => calendar.id === id)
    console.log('1 calendar', calendar)

    if (calendar) {
      calendar.name = name
      calendar.iconName = iconName
      calendar.isPositive = isPositive
      calendar.primaryColor = primaryColor
      calendar.secondaryColor = secondaryColor
      console.log('2 calendar', calendar)
    }
  }

  deleteCalendar(calendarId: string) {
    const calendar = this.calendars.find((calendar) => calendar.id === calendarId)
    if (calendar) {
      const index = this.calendars.indexOf(calendar)
      this.calendars.splice(index, 1)
    }
  }

  getDays(calendarId: string) {
    const calendar = this.calendars.find((calendar) => calendar.id === calendarId)
    return calendar ? calendar.days.slice().sort((a, b) => new Date(a).getTime() - new Date(b).getTime()) : []
  }

  addDay(calendarId: string, day: string | undefined) {
    const calendar = this.calendars.find((calendar) => calendar.id === calendarId)
    if (calendar && day && !calendar.days.includes(day)) {
      calendar.days.push(day)
    } else {
      this.removeDay(calendarId, day)
    }
  }

  removeDay(calendarId: string, dayToRemove: string | undefined) {
    const calendar = this.calendars.find((calendar) => calendar.id === calendarId)
    if (calendar) {
      calendar.days = calendar.days.filter((day) => day !== dayToRemove)
    }
  }
}

class ThemeStore {
  constructor() {
    makeAutoObservable(this)
  }

  get theme(): Theme {
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

export const calendarStore = new CalendarStore()
export const themeStore = new ThemeStore()
