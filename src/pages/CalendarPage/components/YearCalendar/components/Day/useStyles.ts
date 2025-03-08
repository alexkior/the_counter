import { StyleSheet } from 'react-native'

import { themeStore } from '../../../../../../app'

export const useStyles = () => {
  const theme = themeStore.theme

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
