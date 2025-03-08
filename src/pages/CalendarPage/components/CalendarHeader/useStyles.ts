import { Dimensions, StyleSheet } from 'react-native'

import { themeStore } from '../../../../app'

export const useStyles = () => {
  const theme = themeStore.theme

  const { width } = Dimensions.get('window')

  return {
    styles: StyleSheet.create({
      headerContainer: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        boxShadow: '0px 4px 3px rgba(23, 23, 23, 0.1)'
      },
      switchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 16
      },
      weekDaysContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 30
      },
      weekDay: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 7 - 4
      },
      weekDayText: { fontSize: 12 },
      switch: {
        boxShadow: '0px 0px 10px rgba(23, 23, 23, 0.1)',
        height: 30,
        width: 100,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary
      },
      switchText: { color: theme.colors.background }
    })
  }
}
