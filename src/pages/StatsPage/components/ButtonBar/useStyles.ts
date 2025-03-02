import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

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
        backgroundColor: theme.colors.lightGrey
      },
      rangeSelectButtonActive: {
        padding: 10,
        borderRadius: 16,
        marginRight: 10,
        backgroundColor: theme.colors.red
      },
      rangeSelectButtonText: {
        color: theme.colors.black,
        fontSize: 12,
        fontWeight: 'bold'
      },
      rangeSelectButtonTextActive: {
        color: theme.colors.white,
        fontSize: 12,
        fontWeight: 'bold'
      }
    })
  }
}
