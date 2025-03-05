import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../../../../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

  return {
    styles: StyleSheet.create({
      day: {
        margin: 0,
        padding: 0,
        height: 8
      },
      dayText: {
        fontSize: 8,
        fontWeight: 'bold',
        color: theme.colors.key
      }
    })
  }
}
