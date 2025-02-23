import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Application } from './ui'
import { StyleSheet, View } from 'react-native'

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Application />
        <View
          style={styles.bottomContainer}
          >
          
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    // TODO: remove shadow
    boxShadow: '0px -4px 3px rgba(23, 23, 23, 0.1)'
  }
})