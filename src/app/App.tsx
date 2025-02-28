import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { TheCounterTheme, ThemeContext } from '../shared'
import { Navigation } from './navigation'

export const App = observer(() => {
  const scheme = useColorScheme()

  const themeContextValue = useMemo(() => ({ scheme, theme: TheCounterTheme }), [scheme])

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={themeContextValue}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  )
})
