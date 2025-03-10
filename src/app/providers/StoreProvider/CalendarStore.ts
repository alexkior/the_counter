import { makeObservable, observable, action } from 'mobx'

import { Calendar } from '../../../shared/types'

export class CalendarStore {
  calendars: Calendar[] = []
  currentCalendar: Calendar | null = null

  constructor() {
    makeObservable(this, {
      calendars: observable,
      currentCalendar: observable,
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
