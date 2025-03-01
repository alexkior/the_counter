import { StyleSheet } from 'react-native'

import { useThemeContext } from '../../shared'

export const useStyles = () => {
  const { theme } = useThemeContext()

  return {
    styles: StyleSheet.create({
      container: {
        flexGrow: 1,
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 100
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
      },
      box: {
        width: '90%',
        minHeight: 100,
        borderRadius: 20,
        boxShadow: '0px 16px 30px rgba(23, 23, 23, 0.15)'
      },
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
