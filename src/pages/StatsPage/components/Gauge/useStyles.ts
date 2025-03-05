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
        paddingBottom: 40
      },
      legend: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20
      },
      legendTextOne: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        width: 50,
        top: 110,
        color: theme.colors.primaryDark
      },
      legendTextTwo: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        width: 50,
        top: 45,
        color: theme.colors.primary
      },
      legendTextThree: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        width: 120,
        top: 20,
        color: theme.colors.elementsDark
      },
      legendTextFour: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        width: 50,
        top: 45,
        color: theme.colors.secondary
      },
      legendTextFive: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        width: 50,
        top: 110,
        color: theme.colors.secondaryDark
      }
    })
  }
}
