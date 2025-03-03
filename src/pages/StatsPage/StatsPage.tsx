import { observer } from 'mobx-react-lite'
import { View, Text, ScrollView } from 'react-native'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { daysStore } from '../../app'
import { useThemeContext } from '../../shared'
import { ButtonBar, Gauge, ProgressBar, CircularProgress } from './components'
import { useStyles } from './useStyles'

export const StatsPage: React.FC = observer(() => {
  const { styles } = useStyles()
  const { theme } = useThemeContext()
  const startDate = daysStore.getDays()[0]
  const today = new Date().toISOString().split('T')[0]
  const daysPassed = startDate ? Math.floor((Date.parse(today) - Date.parse(startDate)) / 86400000) + 1 : 0
  const weekDaysPassed = countWeekdaysSince(startDate)
  const selectedDates = daysStore.getDays().length
  const selectedWeekDays = daysStore.getDays().reduce(
    (acc: { [key: number]: number }, date: string) => {
      const day = new Date(date).getDay()
      acc[day] = acc[day] ? acc[day] + 1 : 1
      return acc
    },
    { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 }
  )

  const percentage = selectedDates
    ? selectedDates >= daysPassed
      ? 100
      : Math.floor((selectedDates / daysPassed) * 100)
    : 0
  console.log(percentage, daysPassed, selectedDates)

  function countWeekdaysSince(dateStr: string): Record<string, number> {
    const startDate = new Date(dateStr)
    const endDate = new Date()

    const daysArray: Date[] = []
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      daysArray.push(new Date(d))
    }

    return daysArray.reduce<Record<string, number>>(
      (acc, date) => {
        const weekday = date.getDay().toString()
        acc[weekday] = (acc[weekday] || 0) + 1
        return acc
      },
      { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 }
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pageHeadingContainer}>
        <Text style={styles.pageHeadingText}>Statistics</Text>
      </View>
      <ButtonBar />
      <Gauge value={percentage} />
      <View style={styles.box}>
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressBarHeading}>
            <View style={styles.progressBarIconWrapper}>
              <FontAwesome5 name="wine-glass-alt" size={20} color={theme.colors.green} />
            </View>
            <Text
              style={styles.progressBarHeadingText}
            >{`Without THING ${daysPassed - selectedDates} out of ${daysPassed} days`}</Text>
          </View>
          <ProgressBar value={100 - percentage} color={theme.colors.green} />
        </View>
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressBarHeading}>
            <View style={styles.progressBarIconWrapper}>
              <FontAwesome5 name="wine-glass-alt" size={20} color={theme.colors.red} />
            </View>
            <Text style={styles.progressBarHeadingText}>{`With THING ${selectedDates} out of ${daysPassed} days`}</Text>
          </View>
          <ProgressBar value={percentage} color={theme.colors.red} />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.progressCircleWrapper}>
          {Object.entries(selectedWeekDays).map((day, index) => (
            <View key={index}>
              <CircularProgress
                value={Math.floor((weekDaysPassed[index] / 100) * day[1] * 100)}
                color={theme.colors.red}
                weekDayIndex={parseInt(day[0])}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>

      <View style={styles.pageHeader}></View>
    </ScrollView>
  )
})
