import { StyleSheet } from 'react-native'

import { themeStore } from '../../app'

export const useStyles = () => {
  const theme = themeStore.getTheme()

  return {
    styles: StyleSheet.create({
      container: {
        flexGrow: 1,
        backgroundColor: theme.colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 150
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
      colorPickerContainerWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
      colorPickerContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        paddingVertical: 10
      },
      textInputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10
      },
      textInput: {
        width: '80%',
        height: 50,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: theme.colors.elementsDark
      },
      iconInputWrapper: {
        height: 50,
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
      },
      submitButton: {
        boxShadow: '0px 0px 10px rgba(23, 23, 23, 0.1)',
        height: 40,
        width: 240,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        color: theme.colors.background
      },
      buttonText: {
        color: theme.colors.background,
        fontSize: 14,
        fontWeight: 'bold'
      }
    })
  }
}
