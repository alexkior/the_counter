import { StyleSheet } from 'react-native'

import { themeStore } from '../../../../../../app'

export const useStyles = () => {
  const theme = themeStore.getTheme()

  return {
    styles: StyleSheet.create({
      disabledText: {},
      defaultText: {
        fontSize: 14,
        color: theme.colors.key,
        fontWeight: 'bold'
      },
      day: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        width: '100%'
      },
      today: {
        position: 'absolute',
        top: -6,
        left: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55,
        width: '60%',
        borderColor: theme.colors.primary,
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'transparent'
      },
      todayClicked: {
        position: 'absolute',
        top: -6,
        left: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55,
        width: '60%',
        borderColor: theme.colors.secondary,
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'transparent'
      }
    })
  }
}
