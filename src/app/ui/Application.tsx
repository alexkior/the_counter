import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RouteList } from '../../shared'
import { Pages } from '../../pages'


const Stack = createStackNavigator<RouteList>()

export const Application: React.FC = () => {
  return (
    <SafeAreaView>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerShown: true
        }}
      >
        <Stack.Screen name="HomePage" component={Pages.HomePage} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}
