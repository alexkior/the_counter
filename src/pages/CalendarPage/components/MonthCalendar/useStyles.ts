import { StyleSheet } from 'react-native'

export const useStyles = (isYearView: boolean) => {
  return {
    styles: StyleSheet.create({
      calendar: {
        opacity: isYearView ? 0 : 1,
        paddingVertical: 150
      }
    })
  }
}
