import { observer } from 'mobx-react-lite'
import { View, Text, Pressable } from 'react-native'

import { useStyles } from './useStyles'

interface CalendarHeaderProps {
  toggleSwitch: () => void
  isYearView: boolean
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = observer(({ toggleSwitch, isYearView }) => {
  const { styles } = useStyles()

  return (
    <View style={styles.headerContainer}>
      <View style={styles.switchContainer}>
        <Pressable style={styles.switch} onPress={toggleSwitch}>
          <Text style={styles.switchText}>{isYearView ? 'Year' : 'Month'}</Text>
        </Pressable>
        {/* <Switch
            trackColor={{ false: theme.colors.background, true: theme.colors.background }}
            thumbColor={isYearView ? theme.colors.primary : theme.colors.primary}
            ios_backgroundColor={theme.colors.background}
            onValueChange={toggleSwitch}
            value={isYearView}
            style={styles.switch}
          /> */}
      </View>
      <View style={styles.weekDaysContainer}>
        {!isYearView && (
          <>
            <View style={styles.weekDay}>
              <Text style={styles.weekDayText}>Mon</Text>
            </View>
            <View style={styles.weekDay}>
              <Text style={styles.weekDayText}>Tue</Text>
            </View>
            <View style={styles.weekDay}>
              <Text style={styles.weekDayText}>Wed</Text>
            </View>
            <View style={styles.weekDay}>
              <Text style={styles.weekDayText}>Thu</Text>
            </View>
            <View style={styles.weekDay}>
              <Text style={styles.weekDayText}>Fri</Text>
            </View>
            <View style={styles.weekDay}>
              <Text style={styles.weekDayText}>Sat</Text>
            </View>
            <View style={styles.weekDay}>
              <Text style={styles.weekDayText}>Sun</Text>
            </View>
          </>
        )}
      </View>
    </View>
  )
})
