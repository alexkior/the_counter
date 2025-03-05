import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

  return {
    styles: StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      pageHeadingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
      },
      pageHeadingText: {
        fontSize: 28,
        fontWeight: 'bold'
      },
      pageHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
      }
    })
  }
}
