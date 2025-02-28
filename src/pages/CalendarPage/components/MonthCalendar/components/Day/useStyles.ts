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
        height: 40
      }
    })
  }
}
