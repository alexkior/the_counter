import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Application } from './ui'

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Application />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
