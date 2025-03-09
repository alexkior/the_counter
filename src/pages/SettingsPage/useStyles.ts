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
        paddingHorizontal: 20,
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
        borderColor: theme.colors.primary
      },
      iconInputWrapper: {
        height: 50,
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
      }
    })
  }
}
