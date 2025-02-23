import { useState } from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView, Dimensions } from 'react-native'
import { CalendarList, Calendar, DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

import XDate from 'xdate'

import Entypo from '@expo/vector-icons/Entypo'

export const HomePage: React.FC = () => {
  const RANGE = 12
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const year = new Date().getFullYear()
  const some = true
  const { width } = Dimensions.get('window')

  const CustomDay: React.FC<DayProps & { date?: DateData }> = ({ date, state }) => {
    const dateString = date?.dateString
    const [isClicked, setIsClicked] = useState(false)
    const isDateOlderThanToday = dateString && dateString > new Date().toISOString().split('T')[0]

    return (
      <Pressable style={styles.customDay} onPress={() => setIsClicked(!isClicked)}>
        <Text style={[state === 'disabled' ? styles.disabledText : styles.defaultText]}>{date?.day}</Text>
        <Entypo
          name="drink"
          size={18}
          color={
            isDateOlderThanToday ? '#B5B4BC' : isClicked ? (!isDateOlderThanToday ? '#FF0000' : '#B5B4BC') : '#3CB58A'
          }
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
      {some ? (
        <ScrollView style={{ flex: 1, paddingTop: 120 }}>
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
                    hideDayNames
                    hideArrows
                    disableMonthChange
                    hideExtraDays
                    current={`${year}-${monthStr}-01`}
                    style={{
                      borderWidth: 1,
                      borderColor: '#eee'
                    }}
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
  calendar: {
    paddingVertical: 150
  }
})
