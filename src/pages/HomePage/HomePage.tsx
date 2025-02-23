import { StyleSheet, View } from 'react-native'

export const HomePage: React.FC = () => {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8be8f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
