import { View, StyleSheet, Text } from 'react-native'

export const StatsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pageHeadingContainer}>
        <Text style={styles.pageHeadingText}>Statistics</Text>
      </View>
      <View style={styles.pageHeader}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
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
  }
})
