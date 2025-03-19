import { StyleSheet } from 'react-native'

import { themeStore } from '@app/index'

export const useStyles = () => {
  const theme = themeStore.getTheme()

  return {
    styles: StyleSheet.create({
      container: {
        boxShadow: '0px 0px 10px rgba(23, 23, 23, 0.1)',
        height: 40,
        width: 240,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        color: theme.colors.background
      },
      text: {
        color: theme.colors.background,
        fontSize: 14,
        fontWeight: 'bold'
      }
    })
  }
}
