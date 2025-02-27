import { observer } from 'mobx-react-lite'
import { memo } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import counterStore from '../../../../../../app/providers/StoreProvider/StoreProvider'

export const Day: React.FC<DayProps & { date?: DateData }> = memo(
  observer(({ date, state }) => {
    const dateString = date?.dateString
    const isDateOlderThanToday = dateString && dateString > new Date().toISOString().split('T')[0]

    const theDateIsClicked = dateString ? counterStore.getDays().includes(dateString) : false

    const iconColour = isDateOlderThanToday
      ? '#B5B4BC'
      : theDateIsClicked
        ? !isDateOlderThanToday
          ? '#FF0000'
          : '#B5B4BC'
        : '#3CB58A'

    const onDayPress = () => {
      if (theDateIsClicked) {
        counterStore.removeDay(dateString)
      } else {
        counterStore.addDay(dateString)
      }
      console.log(counterStore.getDays())
    }

    return (
      <Pressable style={styles.day} onPress={onDayPress}>
        <Text style={[state === 'disabled' ? styles.disabledText : styles.defaultText]}>{date?.day}</Text>
        <FontAwesome5 name="wine-glass-alt" size={16} color={iconColour} />
      </Pressable>
    )
  })
)

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
