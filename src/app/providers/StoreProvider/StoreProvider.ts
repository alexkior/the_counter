import { makeObservable, observable, action } from 'mobx'

class DaysStore {
  days: string[] = []

  constructor() {
    makeObservable(this, {
      days: observable,
      addDay: action,
      removeDay: action
    })
  }

  getDays() {
    return this.days.slice().sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
  }

  addDay(day: string | undefined) {
    if (day && !this.days.includes(day)) {
      this.days.push(day)
    } else {
      this.removeDay(day)
    }
  }

  removeDay(dayToRemove: string | undefined) {
    this.days = this.days.filter((day) => day !== dayToRemove)
  }
}

export const daysStore = new DaysStore()
