import { StyleSheet } from 'react-native'

import { themeStore } from '../../app'

export const useStyles = () => {
  const theme = themeStore.getTheme()

  return {
    styles: StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    })
  }
}
