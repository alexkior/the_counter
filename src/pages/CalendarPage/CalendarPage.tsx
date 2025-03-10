import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { calendarStore, themeStore } from '@app/index'

import { CalendarHeader, MonthCalendar } from './components'
import { YearCalendar } from './components/YearCalendar'
import { useStyles } from './useStyles'

export const CalendarPage: React.FC = () => {
  const theme = themeStore.getTheme()
  const { styles } = useStyles()
  const [isYearView, setIsYearView] = useState(false)
  const toggleSwitch = () => setIsYearView((previousState) => !previousState)

  useEffect(() => {
    if (calendarStore.calendars.length === 0) {
      calendarStore.createCalendar(
        '1',
        'My first calendar',
        'wine-glass-alt',
        false,
        theme.colors.primary,
        theme.colors.secondary
      )
      calendarStore.setCurrentCalendar('1')
    }

    console.log('calendarStore.calendars', calendarStore.getCurrentCalendar())
  }, [theme.colors.primary, theme.colors.secondary])

  return (
    <View style={styles.container}>
      <CalendarHeader toggleSwitch={toggleSwitch} isYearView={isYearView} />
      {isYearView && <YearCalendar />}
      <MonthCalendar isYearView={isYearView} />
    </View>
  )
}
