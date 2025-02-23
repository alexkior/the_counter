import { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { CalendarList, DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

import XDate from 'xdate'

import Entypo from '@expo/vector-icons/Entypo'

export const HomePage: React.FC = () => {
  const RANGE = 12

  const CustomDay: React.FC<DayProps & { date?: DateData }> = ({ date, state }) => {
    const dateString = date?.dateString
    const [isClicked, setIsClicked] = useState(false)
    const isDateOlderThanToday = dateString && dateString > new Date().toISOString().split('T')[0]

    return (
      <Pressable style={styles.customDay} onPress={() => setIsClicked(!isClicked)}>
        <Text style={[state === 'disabled' ? styles.disabledText : styles.defaultText]}>{date?.day}</Text>
        <Entypo
          name="drink"
          size={24}
          color={isDateOlderThanToday ? 'gray' : isClicked ? (!isDateOlderThanToday ? 'red' : 'gray') : 'green'}
        />
      </Pressable>
    )
  }

  function renderCustomHeader(date?: XDate) {
    const header = date?.toString('MMMM yyyy')
    const [month, year] = header ? header.split(' ') : ['', '']

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{`${month} ${year}`}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}></View>
      <CalendarList
        style={styles.calendar}
        hideDayNames
        dayComponent={CustomDay}
        renderHeader={renderCustomHeader}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: '0px 4px 3px rgba(23, 23, 23, 0.1)'
  },
  disabledText: {},
  defaultText: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold'
  },
  customDay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    height: 60
  },
  header: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray'
  },
  calendar: {
    paddingVertical: 150
  }
})
