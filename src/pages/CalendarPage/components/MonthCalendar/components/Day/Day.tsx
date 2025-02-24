import { memo, useState } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

export const Day: React.FC<DayProps & { date?: DateData }> = memo(({ date, state }) => {
  const dateString = date?.dateString
  const [isClicked, setIsClicked] = useState(false)
  const isDateOlderThanToday = dateString && dateString > new Date().toISOString().split('T')[0]

  return (
    <Pressable style={styles.day} onPress={() => setIsClicked(!isClicked)}>
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
})

const styles = StyleSheet.create({
  disabledText: {},
  defaultText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold'
  },
  day: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40
  }
})
