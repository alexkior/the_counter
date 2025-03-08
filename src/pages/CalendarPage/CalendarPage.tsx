import { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'

import { calendarStore, themeStore } from '../../app'
import { MonthCalendar } from './components'
import { YearCalendar } from './components/YearCalendar'
import { useStyles } from './useStyles'

export const CalendarPage: React.FC = () => {
  const theme = themeStore.theme
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
      <View style={styles.headerContainer}>
        <View style={styles.switchContainer}>
          <Pressable style={styles.switch} onPress={toggleSwitch}>
            <Text style={styles.switchText}>{isYearView ? 'Year' : 'Month'}</Text>
          </Pressable>
          {/* <Switch
            trackColor={{ false: theme.colors.background, true: theme.colors.background }}
            thumbColor={isYearView ? theme.colors.primary : theme.colors.primary}
            ios_backgroundColor={theme.colors.background}
            onValueChange={toggleSwitch}
            value={isYearView}
            style={styles.switch}
          /> */}
        </View>
        <View style={styles.weekDaysContainer}>
          {!isYearView && (
            <>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>Mon</Text>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>Tue</Text>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>Wed</Text>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>Thu</Text>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>Fri</Text>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>Sat</Text>
              </View>
              <View style={styles.weekDay}>
                <Text style={styles.weekDayText}>Sun</Text>
              </View>
            </>
          )}
        </View>
      </View>
      {isYearView && <YearCalendar />}
      <MonthCalendar isYearView={isYearView} />
    </View>
  )
}
