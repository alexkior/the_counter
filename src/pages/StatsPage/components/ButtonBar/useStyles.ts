import { StyleSheet } from 'react-native'

import { themeStore } from '../../../../app'

export const useStyles = () => {
  const theme = themeStore.getTheme()

  return {
    styles: StyleSheet.create({
      rangeSelectContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20
      },
      rangeSelectButton: {
        padding: 10,
        borderRadius: 16,
        marginRight: 10,
        backgroundColor: theme.colors.elementsLight
      },
      rangeSelectButtonActive: {
        padding: 10,
        borderRadius: 16,
        marginRight: 10,
        backgroundColor: theme.colors.secondary
      },
      rangeSelectButtonText: {
        color: theme.colors.key,
        fontSize: 12,
        fontWeight: 'bold'
      },
      rangeSelectButtonTextActive: {
        color: theme.colors.background,
        fontSize: 12,
        fontWeight: 'bold'
      }
    })
  }
}
