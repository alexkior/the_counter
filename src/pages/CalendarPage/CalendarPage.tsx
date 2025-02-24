import { memo, useState } from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView, Dimensions, Switch } from 'react-native'
import { CalendarList, Calendar, DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

import XDate from 'xdate'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

export const CalendarPage: React.FC = memo(() => {
  const RANGE = 12
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const year = new Date().getFullYear()
  const [isYearView, setIsYearView] = useState(false)
  const toggleSwitch = () => setIsYearView((previousState) => !previousState)
  const { width } = Dimensions.get('window')

  const CustomDay: React.FC<DayProps & { date?: DateData }> = ({ date, state }) => {
    const dateString = date?.dateString
    const [isClicked, setIsClicked] = useState(false)
    const isDateOlderThanToday = dateString && dateString > new Date().toISOString().split('T')[0]

    return (
      <Pressable style={styles.customDay} onPress={() => setIsClicked(!isClicked)}>
        <Text style={[state === 'disabled' ? styles.disabledText : styles.defaultText]}>{date?.day}</Text>
        <FontAwesome5
          name="wine-glass-alt"
          size={16}
          color={
            isDateOlderThanToday ? '#B5B4BC' : isClicked ? (!isDateOlderThanToday ? '#FF0000' : '#B5B4BC') : '#3CB58A'
          }
        />
      </Pressable>
    )
  }

  const CustomYearDay: React.FC<DayProps & { date?: DateData }> = ({ date }) => {
    return (
      <View style={styles.customYearDay}>
        <Text style={styles.customYearDayText}>{date?.day}</Text>
      </View>
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

  function renderCustomYearHeader(date?: XDate) {
    const header = date?.toString('MMMM yyyy')
    const [month] = header ? header.split(' ') : ['', '']

    return (
      <View style={styles.yearMonthHeader}>
        <Text style={styles.yearMonthHeaderText}>{`${month}`}</Text>
      </View>
    )
  }

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
      {isYearView ? (
        <ScrollView style={{ flex: 1, paddingVertical: 120 }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 5
            }}
          >
            {months.map((month) => {
              const monthStr = month < 10 ? `0${month}` : month.toString()
              return (
                <View
                  key={month}
                  style={{
                    width: (width - 20) / 3,
                    marginBottom: 20
                  }}
                >
                  <Calendar
                    displayLoadingIndicator
                    hideDayNames
                    hideArrows
                    disableMonthChange
                    hideExtraDays
                    renderHeader={renderCustomYearHeader}
                    dayComponent={CustomYearDay}
                    height={100}
                    current={`${year}-${monthStr}-01`}
                  />
                </View>
              )
            })}
          </View>
        </ScrollView>
      ) : (
        <CalendarList
          calendarHeight={400}
          style={styles.calendar}
          hideDayNames
          dayComponent={CustomDay}
          renderHeader={renderCustomHeader}
          pastScrollRange={RANGE}
          futureScrollRange={RANGE}
        />
      )}
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
  },
  disabledText: {},
  defaultText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold'
  },
  customDay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40
  },
  header: {
    borderTopWidth: 1,
    borderTopColor: '#B5B4BC',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000'
  },
  yearMonthHeader: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  yearMonthHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000'
  },
  calendar: {
    paddingVertical: 150
  },
  customYearDay: {
    margin: 0,
    padding: 0,
    height: 8
  },
  customYearDayText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000000'
  }
})
