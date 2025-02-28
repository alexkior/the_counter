import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Pages } from '../../../pages'
import { BottomMenu, RouteList } from '../../../shared'

const Stack = createStackNavigator<RouteList>()

export const Navigation: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="CalendarPage"
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'none'
        }}
      >
        <Stack.Screen name="CalendarPage" component={Pages.CalendarPage} />
        <Stack.Screen name="StatsPage" component={Pages.StatsPage} />
        <Stack.Screen name="SettingsPage" component={Pages.SettingsPage} />
      </Stack.Navigator>
      <BottomMenu />
    </SafeAreaView>
  )
}
