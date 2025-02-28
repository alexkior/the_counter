import { observer } from 'mobx-react-lite'
import { View, StyleSheet, Text } from 'react-native'

import { daysStore } from '../../app'
import { Gauge } from './components'

export const StatsPage: React.FC = observer(() => {
  const startDate = daysStore.getDays()[0]
  const today = new Date().toISOString().split('T')[0]
  const daysPassed = startDate ? Math.floor((Date.parse(today) - Date.parse(startDate)) / 86400000) : 0
  const selectedDates = daysStore.getDays().length
  const percentage = (daysPassed / 100) * selectedDates * 100
  console.log(percentage)

  return (
    <View style={styles.container}>
      <View style={styles.pageHeadingContainer}>
        <Text style={styles.pageHeadingText}>Statistics</Text>
      </View>
      <Gauge value={percentage} />
      <View style={styles.box}></View>
      <View style={styles.pageHeader}></View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  pageHeadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20
  },
  pageHeadingText: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  pageHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20
  },
  box: {
    width: '90%',
    minHeight: 100,
    borderRadius: 20,
    boxShadow: '0px 16px 30px rgba(23, 23, 23, 0.15)'
  }
})
