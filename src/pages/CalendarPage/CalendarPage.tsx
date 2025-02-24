import { memo, useState } from 'react'
import { StyleSheet, View, Switch } from 'react-native'

import { MonthCalendar } from './components'
import { YearCalendar } from './components/YearCalendar'

export const CalendarPage: React.FC = memo(() => {
  const [isYearView, setIsYearView] = useState(false)
  const toggleSwitch = () => setIsYearView((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Switch
          trackColor={{ false: '#fff', true: '#fff' }}
          thumbColor={isYearView ? '#3CB58A' : '#3CB58A'}
          ios_backgroundColor="#fff"
          onValueChange={toggleSwitch}
          value={isYearView}
          style={{ boxShadow: '0px 0px 10px rgba(23, 23, 23, 0.1)' }}
        />
      </View>
      {isYearView ? <YearCalendar /> : <MonthCalendar />}
    </View>
  )
})

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
  }
})
