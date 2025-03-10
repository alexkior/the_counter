import { observer } from 'mobx-react-lite'
import { View, Text, Pressable } from 'react-native'

import { calendarStore, themeStore } from '@app/index'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

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
        <View style={styles.calendarNameContainer}>
          <Text style={styles.calendarNameText}>{calendarStore.currentCalendar?.name}</Text>
          <View style={styles.calendarNameIcon}>
            <FontAwesome5
              name={calendarStore.currentCalendar?.iconName}
              size={15}
              color={themeStore.getTheme().colors.background}
            />
          </View>
        </View>
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
