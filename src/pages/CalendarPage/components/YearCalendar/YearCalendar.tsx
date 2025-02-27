import { memo } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import { Calendar } from 'react-native-calendars'

import { Day, Header } from './components'
import { useStyles } from './useStyles'

export const YearCalendar: React.FC = memo(() => {
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const year = new Date().getFullYear()
  const { width } = Dimensions.get('window')
  const { styles } = useStyles()

  return (
    <ScrollView style={{ flex: 1, paddingVertical: 120 }}>
      <View style={styles.container}>
        {months.map((month) => {
          const monthStr = month < 10 ? `0${month}` : month.toString()
          return (
            <View
              key={month}
              style={{
                width: (width - 20) / 3,
                marginBottom: 20
              }}
            >
              <Calendar
                displayLoadingIndicator
                hideDayNames
                hideArrows
                disableMonthChange
                hideExtraDays
                renderHeader={Header}
                dayComponent={Day}
                height={100}
                current={`${year}-${monthStr}-01`}
              />
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
})
