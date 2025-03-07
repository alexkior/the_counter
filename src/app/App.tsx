import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

import { TheCounterTheme, ThemeContext } from '../shared'
import { Navigation } from './navigation'

export const App = observer(() => {
  const scheme = useColorScheme()

  const themeContextValue = useMemo(() => ({ scheme, theme: TheCounterTheme }), [scheme])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ThemeContext.Provider value={themeContextValue}>
          <NavigationContainer>
            <Navigation />
            <Toast />
          </NavigationContainer>
        </ThemeContext.Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
})
