import { memo } from 'react'
import { CalendarList } from 'react-native-calendars'

import { Day, Header } from './components'
import { useStyles } from './useStyles'

export const MonthCalendar: React.FC<{ isYearView: boolean }> = memo(({ isYearView }) => {
  const RANGE = 12
  const { styles } = useStyles(isYearView)

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
