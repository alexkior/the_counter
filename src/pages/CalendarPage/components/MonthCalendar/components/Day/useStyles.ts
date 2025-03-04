import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../../../../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

  return {
    styles: StyleSheet.create({
      disabledText: {},
      defaultText: {
        fontSize: 14,
        color: theme.colors.black,
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
        borderColor: theme.colors.green,
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'transparent'
      }
    })
  }
}
