import { observer } from 'mobx-react-lite'
import { View, Text, Pressable, ScrollView } from 'react-native'

import { daysStore } from '../../app'
import { Gauge } from './components'
import { useStyles } from './useStyles'

export const StatsPage: React.FC = observer(() => {
  const { styles } = useStyles()
  const startDate = daysStore.getDays()[0]
  const today = new Date().toISOString().split('T')[0]
  const daysPassed = startDate ? Math.floor((Date.parse(today) - Date.parse(startDate)) / 86400000) + 1 : 0
  const selectedDates = daysStore.getDays().length
  const percentage = selectedDates
    ? selectedDates >= daysPassed
      ? 100
      : Math.floor((selectedDates / daysPassed) * 100)
    : 0
  console.log(percentage, daysPassed, selectedDates)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pageHeadingContainer}>
        <Text style={styles.pageHeadingText}>Statistics</Text>
      </View>
      <View style={styles.rangeSelectContainer}>
        <Pressable style={styles.rangeSelectButtonActive} onPress={() => console.log('All time')}>
          <Text style={styles.rangeSelectButtonTextActive}>All time</Text>
        </Pressable>
        <Pressable style={styles.rangeSelectButton} onPress={() => console.log('30 days')}>
          <Text style={styles.rangeSelectButtonText}>30 days</Text>
        </Pressable>
        <Pressable style={styles.rangeSelectButton} onPress={() => console.log('This month')}>
          <Text style={styles.rangeSelectButtonText}>This month</Text>
        </Pressable>
        <Pressable style={styles.rangeSelectButton} onPress={() => console.log('Last month')}>
          <Text style={styles.rangeSelectButtonText}>Last month</Text>
        </Pressable>
        <Pressable style={styles.rangeSelectButton} onPress={() => console.log('This year')}>
          <Text style={styles.rangeSelectButtonText}>This year</Text>
        </Pressable>
      </View>
      <Gauge value={percentage} />
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>

      <View style={styles.pageHeader}></View>
    </ScrollView>
  )
})
