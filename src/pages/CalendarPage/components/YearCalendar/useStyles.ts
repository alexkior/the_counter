import { StyleSheet } from 'react-native'

export const useStyles = () => {
  return {
    styles: StyleSheet.create({
      container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5
      }
    })
  }
}
