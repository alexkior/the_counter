import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../../../../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

  return {
    styles: StyleSheet.create({
      button: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '33%'
      },
      buttonText: {
        marginTop: 5,
        fontSize: 10,
        color: theme.colors.elements
      },
      activeButtonText: {
        marginTop: 5,

        fontSize: 10,
        color: theme.colors.secondary
      }
    })
  }
}
