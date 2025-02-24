import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Navigation } from './navigation'

export const App = observer(() => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  )
})
