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
    return this.days
  }

  addDay(day: string | undefined) {
    if (day && !this.days.includes(day)) {
      this.days.push(day)
    } else {
      this.removeDay(day)
    }
  }

  removeDay(dayToRemove: string | undefined) {
    this.days.map((day, index) => {
      if (day === dayToRemove) {
        this.days.splice(index, 1)
      }
    })
  }
}

export const daysStore = new DaysStore()
