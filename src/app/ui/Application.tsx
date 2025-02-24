import { useNavigation } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Pages } from '../../pages'
import { RouteList } from '../../shared'

const Stack = createStackNavigator<RouteList>()

export const Application: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RouteList>>()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="CalendarPage"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="CalendarPage" component={Pages.CalendarPage} />
        <Stack.Screen name="StatsPage" component={Pages.StatsPage} />
        <Stack.Screen name="SettingsPage" component={Pages.SettingsPage} />
      </Stack.Navigator>
      <View style={styles.bottomContainer}>
        <Button
          title="Home"
          onPress={() => {
            navigation.navigate('CalendarPage')
          }}
        />
        <Button
          title="Stats"
          onPress={() => {
            navigation.navigate('StatsPage')
          }}
        />
        <Button
          title="Settings"
          onPress={() => {
            navigation.navigate('SettingsPage')
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    // TODO: remove shadow
    boxShadow: '0px -4px 3px rgba(23, 23, 23, 0.1)'
  }
})
