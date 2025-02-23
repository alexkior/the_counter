import { StyleSheet, View, Text } from 'react-native'
import { CalendarList, DateData } from 'react-native-calendars'
import { DayProps } from 'react-native-calendars/src/calendar/day'
import Entypo from '@expo/vector-icons/Entypo';

export const HomePage: React.FC = () => {
  const CustomDay: React.FC<DayProps & { date?: DateData }> = ({ date, state }) => {
    return (
      <View style={styles.customDay}>
        <Text style={[state === 'disabled' ? styles.disabledText : styles.defaultText]}>{date?.day}</Text>
        <Entypo name="drink" size={24} color="red" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}></View>
      <CalendarList
        // current={INITIAL_DATE}
        // style={styles.calendar}
        // theme={theme}
        // onDayPress={onDayPress}
        // onDayLongPress={onDayLongPress}
        // markingType={markingType}
        // markedDates={disableAllTouchEventsForInactiveDays ? inactiveMarks : markingForType()}
        // minDate={minAndMax ? INITIAL_DATE : undefined}
        // maxDate={minAndMax ? getDate(21) : undefined}
        // allowSelectionOutOfRange={allowSelectionOutOfRange}
        // firstDay={firstDay}
        // enableSwipeMonths={enableSwipeMonths}
        // disableMonthChange={disableMonthChange}
        // showWeekNumbers={showWeekNumbers}
        // showSixWeeks={showSixWeeks}
        // hideExtraDays={hideExtraDays}
        hideDayNames
        // hideArrows={hideArrows}
        // disabledByDefault={disabledByDefault}
        // disableAllTouchEventsForDisabledDays={disableAllTouchEventsForDisabledDays}
        // disableAllTouchEventsForInactiveDays={disableAllTouchEventsForInactiveDays}
        // displayLoadingIndicator={displayLoadingIndicator}
        // disabledDaysIndexes={disabledDaysIndexes ? [0, 6] : undefined}
        dayComponent={CustomDay}
        // customHeader={<customHeader ? CustomHeader : undefined>}
        // customHeaderTitle={customHeaderTitle ? CustomHeaderTitle : undefined}
        // onPressArrowLeft={customHeaderTitle ? onPressArrowLeft : undefined}
        // onPressArrowRight={customHeaderTitle ? onPressArrowRight : undefined}
        // renderArrow={renderArrow ? _renderArrow : undefined}
        // disableArrowLeft={disableArrowLeft}
        // disableArrowRight={disableArrowRight}
        //     pastScrollRange: PropTypes.number,
        // futureScrollRange: PropTypes.number,
        // calendarWidth: PropTypes.number,
        // calendarHeight: PropTypes.number,
        // calendarStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
        // staticHeader: PropTypes.bool,
        // showScrollIndicator: PropTypes.bool,
        // animateScroll: PropTypes.bool,
        // scrollEnabled: PropTypes.bool,
        // scrollsToTop: PropTypes.bool,
        // pagingEnabled: PropTypes.bool,
        // horizontal: PropTypes.bool,
        // keyboardShouldPersistTaps: PropTypes.oneOf(['never', 'always', 'handled']),
        // keyExtractor: PropTypes.func,
        // onEndReachedThreshold: PropTypes.number,
        // onEndReached: PropTypes.func,
        // nestedScrollEnabled: PropTypes.bool
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: '0px 4px 3px rgba(23, 23, 23, 0.1)'
  },
  disabledText: {},
  defaultText: {
    fontSize: 13,
    color: 'gray',
    fontWeight: 'bold'
  },
  customDay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    height: 60,
  }
})
