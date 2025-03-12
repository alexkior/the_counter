import { View, Text } from 'react-native'

import XDate from 'xdate'

import { useStyles } from './useStyles'

export function YearHeader(date?: XDate) {
  const header = date?.toString('MMMM yyyy')
  const [month] = header ? header.split(' ') : ['', '']
  const { styles } = useStyles()

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{`${month}`}</Text>
    </View>
  )
}
