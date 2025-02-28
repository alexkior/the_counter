import { memo, useState } from 'react'
import { StyleSheet, View, Switch, Text, Dimensions } from 'react-native'

import { MonthCalendar } from './components'
import { YearCalendar } from './components/YearCalendar'

export const CalendarPage: React.FC = memo(() => {
  const [isYearView, setIsYearView] = useState(false)
  const toggleSwitch = () => setIsYearView((previousState) => !previousState)
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: '#fff', true: '#fff' }}
            thumbColor={isYearView ? '#3CB58A' : '#3CB58A'}
            ios_backgroundColor="#fff"
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

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: '0px 4px 3px rgba(23, 23, 23, 0.1)'
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 16
  },
  weekDaysContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  weekDay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 7 - 4
  },
  weekDayText: { fontSize: 12 },
  switch: { boxShadow: '0px 0px 10px rgba(23, 23, 23, 0.1)' }
})
