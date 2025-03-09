import { observer } from 'mobx-react-lite'
import { View, Text, ScrollView } from 'react-native'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { calendarStore, themeStore } from '../../app'
import { ButtonBar, Gauge, ProgressBar, CircularProgress, BarChart } from './components'
import { useStyles } from './useStyles'

const WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const StatsPage: React.FC = observer(() => {
  const calendar = calendarStore.getCurrentCalendar()
  const calendarId = calendar ? calendar?.id : '1'

  const { styles } = useStyles()
  const theme = themeStore.getTheme()
  const startDate = calendarStore.getDays(calendarId)[0]
  const today = new Date().toISOString().split('T')[0]
  const daysPassed = startDate ? Math.floor((Date.parse(today) - Date.parse(startDate)) / 86400000) + 1 : 0
  const weekDaysPassed = countWeekdaysSince(startDate)
  const selectedDates = calendarStore.getDays(calendarId).length
  const selectedWeekDays = calendarStore.getDays(calendarId).reduce(
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

  const sampleData = [
    { month: 1, value: 25 },
    { month: 2, value: 15 },
    { month: 3, value: 2 },
    { month: 4, value: 2 },
    { month: 5, value: 2 },
    { month: 6, value: 2 },
    { month: 7, value: 2 },
    { month: 8, value: 2 },
    { month: 9, value: 2 },
    { month: 10, value: 2 },
    { month: 11, value: 2 },
    { month: 12, value: 2 }
  ]

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

  const theMostFrequentWeekDay: number = parseInt(
    Object.entries(selectedWeekDays).filter((day) => {
      return day[1] === Math.max(...Object.values(selectedWeekDays))
    })[0][0]
  )

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
              <FontAwesome5 name="wine-glass-alt" size={20} color={theme.colors.primary} />
            </View>
            <Text
              style={styles.progressBarHeadingText}
            >{`Without THING ${daysPassed - selectedDates} out of ${daysPassed} days`}</Text>
          </View>
          <ProgressBar value={100 - percentage} color={theme.colors.primary} />
        </View>
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressBarHeading}>
            <View style={styles.progressBarIconWrapper}>
              <FontAwesome5 name="wine-glass-alt" size={20} color={theme.colors.secondary} />
            </View>
            <Text style={styles.progressBarHeadingText}>{`With THING ${selectedDates} out of ${daysPassed} days`}</Text>
          </View>
          <ProgressBar value={percentage} color={theme.colors.secondary} />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.progressCircleHeading}>
          <Text
            style={styles.progressCircleHeadingText}
          >{`Most often, you DID THING on ${WeekDays[theMostFrequentWeekDay]}`}</Text>
        </View>
        <View style={styles.progressCircleWrapper}>
          {Object.entries(selectedWeekDays).map((day, index) => (
            <View key={index}>
              <CircularProgress
                value={Math.floor((weekDaysPassed[index] / 100) * day[1] * 100)}
                color={theme.colors.secondary}
                weekDayIndex={parseInt(day[0])}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.box}>
        <BarChart data={sampleData} barColor={theme.colors.secondary} />
      </View>
      <View style={styles.box}></View>

      <View style={styles.pageHeader}></View>
    </ScrollView>
  )
})
