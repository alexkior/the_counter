import { memo } from 'react'
import { StyleSheet } from 'react-native'
import { CalendarList } from 'react-native-calendars'

import { Day, Header } from './components'

export const MonthCalendar: React.FC = memo(() => {
  const RANGE = 12

  return (
    <CalendarList
      calendarHeight={400}
      style={styles.calendar}
      hideDayNames
      dayComponent={Day}
      renderHeader={Header}
      pastScrollRange={RANGE}
      futureScrollRange={RANGE}
    />
  )
})

const styles = StyleSheet.create({
  calendar: {
    paddingVertical: 150
  }
})
