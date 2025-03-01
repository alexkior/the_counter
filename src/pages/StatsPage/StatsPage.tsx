import { observer } from 'mobx-react-lite'
import { View, Text, Pressable, ScrollView } from 'react-native'
import Toast from 'react-native-toast-message'

import { daysStore } from '../../app'
import { useThemeContext } from '../../shared'
import { Gauge, ProgressBar } from './components'
import { useStyles } from './useStyles'

export const StatsPage: React.FC = observer(() => {
  const { styles } = useStyles()
  const { theme } = useThemeContext()
  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Hello!',
      text2: 'This part is not ready yet'
    })
  }
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
        <Pressable style={styles.rangeSelectButton} onPress={() => showToast()}>
          <Text style={styles.rangeSelectButtonText}>30 days</Text>
        </Pressable>
        <Pressable style={styles.rangeSelectButton} onPress={showToast}>
          <Text style={styles.rangeSelectButtonText}>This month</Text>
        </Pressable>
        <Pressable style={styles.rangeSelectButton} onPress={showToast}>
          <Text style={styles.rangeSelectButtonText}>Last month</Text>
        </Pressable>
        <Pressable style={styles.rangeSelectButton} onPress={showToast}>
          <Text style={styles.rangeSelectButtonText}>This year</Text>
        </Pressable>
      </View>
      <Gauge value={percentage} />
      <View style={styles.box}>
        <ProgressBar value={100 - percentage} color={theme.colors.green} />
        <ProgressBar value={percentage} color={theme.colors.red} />
      </View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>

      <View style={styles.pageHeader}></View>
    </ScrollView>
  )
})
