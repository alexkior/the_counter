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
        boxShadow: '0px 16px 30px rgba(23, 23, 23, 0.15)',
        paddingVertical: 10,
        marginBottom: 30
      },
      progressBarWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingBottom: 20
      },
      progressBarHeading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20
      },
      progressBarIconWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 20,
        width: 20,
        marginRight: 10
      },
      progressBarHeadingText: {
        fontSize: 14,
        fontWeight: 'medium'
      },
      progressCircleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
      },
      progressCircleHeading: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      progressCircleHeadingText: {
        fontSize: 14,
        fontWeight: 'medium',
        textAlign: 'center'
      }
    })
  }
}
