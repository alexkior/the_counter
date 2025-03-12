import { View, Text } from 'react-native'

import XDate from 'xdate'

import { useStyles } from './useStyles'

export function MonthHeader(date?: XDate) {
  const { styles } = useStyles()
  const header = date?.toString('MMMM yyyy')
  const [month, year] = header ? header.split(' ') : ['', '']

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{`${month} ${year}`}</Text>
    </View>
  )
}
