import { Dimensions, StyleSheet } from 'react-native'

export const useStyles = () => {
  const { width } = Dimensions.get('window')

  return {
    styles: StyleSheet.create({
      wrapper: {
        paddingTop: 120,
        paddingBottom: 220,
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column'
      },
      container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5
      },
      calendarWrapper: {
        width: (width - 20) / 3,
        marginBottom: 20
      }
    })
  }
}
