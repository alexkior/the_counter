import { memo } from 'react'
import { View, Text } from 'react-native'
import { DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'

import { useStyles } from './useStyles'

export const Day: React.FC<DayProps & { date?: DateData }> = memo(({ date }) => {
  const { styles } = useStyles()
  return (
    <View style={styles.day}>
      <Text style={styles.dayText}>{date?.day}</Text>
    </View>
  )
})
