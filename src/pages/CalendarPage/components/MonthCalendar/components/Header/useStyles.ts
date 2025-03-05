import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../../../../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

  return {
    styles: StyleSheet.create({
      header: {
        borderTopWidth: 1,
        borderTopColor: theme.colors.elements,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingBottom: 20
      },
      headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.key
      }
    })
  }
}
