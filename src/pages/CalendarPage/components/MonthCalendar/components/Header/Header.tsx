import { StyleSheet, View, Text } from 'react-native'

import XDate from 'xdate'

export function Header(date?: XDate) {
  const header = date?.toString('MMMM yyyy')
  const [month, year] = header ? header.split(' ') : ['', '']

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{`${month} ${year}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderTopWidth: 1,
    borderTopColor: '#B5B4BC',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000'
  }
})
