import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../../../../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

  return {
    styles: StyleSheet.create({
      header: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
      },
      headerText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.colors.key
      }
    })
  }
}
