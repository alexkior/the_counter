import { memo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

export const Day: React.FC<DayProps & { date?: DateData }> = memo(({ date }) => {
  return (
    <View style={styles.day}>
      <Text style={styles.dayText}>{date?.day}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  day: {
    margin: 0,
    padding: 0,
    height: 8
  },
  dayText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000000'
  }
})
