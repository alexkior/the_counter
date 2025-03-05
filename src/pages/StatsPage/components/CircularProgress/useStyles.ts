import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

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
