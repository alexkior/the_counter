import { observer } from 'mobx-react-lite'
import { Pressable, Text, View } from 'react-native'
import { DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

import { calendarStore, themeStore } from '@app/index'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { useStyles } from './useStyles'

export const Day: React.FC<DayProps & { date?: DateData }> = observer(({ date, state }) => {
  // TODO: Replace it with actual id on creation of the calendar
  const calendar = calendarStore.getCurrentCalendar()
  const iconName = calendar ? calendar?.iconName : 'wine-glass-alt'
  const calendarId = calendar ? calendar?.id : '1'
  const { styles } = useStyles()
  const theme = themeStore.getTheme()

  const dateString = date?.dateString
  const isDateOlderThanToday =
    dateString && new Date(dateString).toISOString().split('T')[0] > new Date().toISOString().split('T')[0]
  const today = state && state === 'today'
  const theDateIsClicked = dateString ? calendarStore.getDays(calendarId).includes(dateString) : false

  const iconColour =
    isDateOlderThanToday && !today
      ? theme.colors.elements
      : theDateIsClicked
        ? !isDateOlderThanToday || today
          ? theme.colors.secondary
          : theme.colors.elements
        : theme.colors.primary

  const onDayPress = () => {
    if (isDateOlderThanToday && !today) {
      return
    }

    if (theDateIsClicked) {
      calendarStore.removeDay(calendarId, dateString)
    } else {
      calendarStore.addDay(calendarId, dateString)
    }
    console.log(calendarStore.getDays(calendarId))
  }

  return (
    <Pressable style={styles.day} onPress={onDayPress}>
      {today && <View style={theDateIsClicked ? styles.todayClicked : styles.today}></View>}
      <Text style={[state === 'disabled' ? styles.disabledText : styles.defaultText]}>{date?.day}</Text>
      <FontAwesome5 name={iconName} size={16} color={iconColour} />
    </Pressable>
  )
})
