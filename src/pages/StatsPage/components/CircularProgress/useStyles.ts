import { StyleSheet } from 'react-native'

import { themeStore } from '../../../../app'

export const useStyles = () => {
  const theme = themeStore.getTheme()

  return {
    styles: StyleSheet.create({
      container: {
        backgroundColor: theme.colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 10
      },
      label: {
        fontSize: 10,
        fontWeight: 'bold',
        top: 26
      }
    })
  }
}
