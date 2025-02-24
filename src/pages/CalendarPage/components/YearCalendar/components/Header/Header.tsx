import { StyleSheet, View, Text } from 'react-native'

import XDate from 'xdate'

export function Header(date?: XDate) {
  const header = date?.toString('MMMM yyyy')
  const [month] = header ? header.split(' ') : ['', '']

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{`${month}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000'
  }
})
