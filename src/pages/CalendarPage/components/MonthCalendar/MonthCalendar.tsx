import { memo } from 'react'
import { CalendarList } from 'react-native-calendars'

import { MonthDay, MonthHeader } from '../'
import { useStyles } from './useStyles'

export const MonthCalendar: React.FC<{ isYearView: boolean }> = memo(({ isYearView }) => {
  const RANGE = 12
  const { styles } = useStyles(isYearView)

  return (
    <CalendarList
      calendarHeight={400}
      style={styles.calendar}
      hideDayNames
      dayComponent={MonthDay}
      renderHeader={MonthHeader}
      pastScrollRange={RANGE}
      futureScrollRange={RANGE}
    />
  )
})
