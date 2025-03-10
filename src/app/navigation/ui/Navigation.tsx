import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Pages } from '@pages/index'
import { RouteList } from '@shared/types'
import { BottomMenu } from '@shared/ui'

const Tab = createBottomTabNavigator<RouteList>()

export const Navigation: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="CalendarPage"
        screenOptions={{
          headerShown: false,
          animation: 'none'
        }}
        tabBar={() => <BottomMenu />}
      >
        <Tab.Screen name="CalendarPage" component={Pages.CalendarPage} />
        <Tab.Screen name="StatsPage" component={Pages.StatsPage} />
        <Tab.Screen name="SettingsPage" component={Pages.SettingsPage} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}
