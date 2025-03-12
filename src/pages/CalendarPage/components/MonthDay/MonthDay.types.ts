import { DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

export type MonthDayProps = DayProps & {
  date?: DateData
}
