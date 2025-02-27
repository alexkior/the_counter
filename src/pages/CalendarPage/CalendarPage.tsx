import { memo, useState } from 'react'
import { View, Switch, Text } from 'react-native'

import { useThemeContext } from '../../shared'
import { MonthCalendar } from './components'
import { YearCalendar } from './components/YearCalendar'
import { useStyles } from './useStyles'

export const CalendarPage: React.FC = memo(() => {
  const { theme } = useThemeContext()
  const { styles } = useStyles()
  const [isYearView, setIsYearView] = useState(false)
  const toggleSwitch = () => setIsYearView((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: theme.colors.white, true: theme.colors.white }}
            thumbColor={isYearView ? theme.colors.green : theme.colors.green}
            ios_backgroundColor={theme.colors.white}
            onValueChange={toggleSwitch}
            value={isYearView}
            style={styles.switch}
          />
        </View>
        {!isYearView && (
          <View style={styles.weekDaysContainer}>
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
          </View>
        )}
      </View>
      {isYearView ? <YearCalendar /> : <MonthCalendar />}
    </View>
  )
})
