import { makeObservable, observable, action } from 'mobx'

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

  constructor() {
    makeObservable(this, {
      calendars: observable,
      fetchCalendars: action,
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
    const calendar = this.calendars.find((calendar) => calendar.id === id)
    if (calendar) {
      calendar.name = name
      calendar.iconName = iconName
      calendar.isPositive = isPositive
      calendar.primaryColor = primaryColor
      calendar.secondaryColor = secondaryColor
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

export const calendarStore = new CalendarStore()
