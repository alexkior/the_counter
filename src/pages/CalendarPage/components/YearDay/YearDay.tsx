import { memo } from 'react'
import { View, Text } from 'react-native'

import { YearDayProps } from './YearDay.types'
import { useStyles } from './useStyles'

export const YearDay: React.FC<YearDayProps> = memo(({ date }) => {
  const { styles } = useStyles()
  return (
    <View style={styles.day}>
      <Text style={styles.dayText}>{date?.day}</Text>
    </View>
  )
})
