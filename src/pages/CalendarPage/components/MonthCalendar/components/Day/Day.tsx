import { observer } from 'mobx-react-lite'
import { Pressable, Text, View } from 'react-native'
import { DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { daysStore } from '../../../../../../app'
import { useThemeContext } from '../../../../../../shared'
import { useStyles } from './useStyles'

export const Day: React.FC<DayProps & { date?: DateData }> = observer(({ date, state }) => {
  const { styles } = useStyles()
  const { theme } = useThemeContext()
  const dateString = date?.dateString
  const isDateOlderThanToday = dateString && dateString > new Date().toISOString().split('T')[0]

  const theDateIsClicked = dateString ? daysStore.getDays().includes(dateString) : false

  const iconColour = isDateOlderThanToday
    ? theme.colors.grey
    : theDateIsClicked
      ? !isDateOlderThanToday
        ? theme.colors.red
        : theme.colors.grey
      : theme.colors.green

  const onDayPress = () => {
    if (isDateOlderThanToday) {
      return
    }

    if (theDateIsClicked) {
      daysStore.removeDay(dateString)
    } else {
      daysStore.addDay(dateString)
    }
    console.log(daysStore.getDays())
  }

  return (
    <Pressable style={styles.day} onPress={onDayPress}>
      {state && state === 'today'  && <View style={styles.today }></View>}
      <Text style={[state === 'disabled' ? styles.disabledText : styles.defaultText]}>{date?.day}</Text>
      <FontAwesome5 name="wine-glass-alt" size={16} color={iconColour} />
    </Pressable>
  )
})
