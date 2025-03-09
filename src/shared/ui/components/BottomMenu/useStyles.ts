import { StyleSheet } from 'react-native'

import { themeStore } from '../../../../app'

export const useStyles = () => {
  const theme = themeStore.getTheme()

  return {
    styles: StyleSheet.create({
      wrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        width: '100%',
        height: 100,
        // TODO: remove shadow
        boxShadow: '0px -4px 3px rgba(23, 23, 23, 0.1)'
      },
      buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      }
    })
  }
}
