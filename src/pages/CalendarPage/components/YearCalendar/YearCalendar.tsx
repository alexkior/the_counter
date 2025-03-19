import { memo } from 'react'
import { View, ScrollView } from 'react-native'
import { Calendar } from 'react-native-calendars'

import { YearDay, YearHeader } from '../'
import { useStyles } from './useStyles'

export const YearCalendar: React.FC = memo(() => {
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const year = new Date().getFullYear()
  const { styles } = useStyles()

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {months.map((month) => {
          const monthStr = month < 10 ? `0${month}` : month.toString()
          return (
            <View key={month} style={styles.calendarWrapper}>
              <Calendar
                key={month}
                displayLoadingIndicator
                hideDayNames
                hideArrows
                disableMonthChange
                hideExtraDays
                renderHeader={YearHeader}
                dayComponent={YearDay}
                height={100}
                current={`${year}-${monthStr}-01`}
              />
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
})
