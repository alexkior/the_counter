import { Dimensions, StyleSheet } from 'react-native'

export const useStyles = () => {
  const { width, height } = Dimensions.get('window')

  return {
    styles: StyleSheet.create({
      wrapper: {
        paddingTop: 100,
        paddingBottom: 220,
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        minHeight: height,
        flexGrow: 1
      },
      container: {
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexGrow: 1,
        paddingHorizontal: 5
      },
      calendarWrapper: {
        width: (width - 20) / 3,
        marginBottom: 20,
        display: 'flex'
      }
    })
  }
}
