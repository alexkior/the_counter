import { useNavigation, useNavigationState } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { View, StyleSheet, Text, Pressable } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import { RouteList } from '../../../types'

export const BottomMenu: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RouteList>>()

  const state = useNavigationState((s) => s)
  const currentRouteName = state?.routes[state?.index || 0].name

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('CalendarPage')
          }}
        >
          <Ionicons name="calendar" size={32} color={currentRouteName !== 'CalendarPage' ? '#B5B4BC' : '#FF0000'} />

          <Text style={currentRouteName === 'CalendarPage' ? styles.activeButtonText : styles.buttonText}>
            Calendar
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('StatsPage')
          }}
        >
          <Ionicons name="stats-chart" size={32} color={currentRouteName === 'StatsPage' ? '#FF0000' : '#B5B4BC'} />
          <Text style={currentRouteName === 'StatsPage' ? styles.activeButtonText : styles.buttonText}>Statistics</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('SettingsPage')
          }}
        >
          <Ionicons
            name="settings-sharp"
            size={32}
            color={currentRouteName === 'SettingsPage' ? '#FF0000' : '#B5B4BC'}
          />
          <Text style={currentRouteName === 'SettingsPage' ? styles.activeButtonText : styles.buttonText}>
            Settings
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
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
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonText: {
    marginTop: 5,
    fontSize: 10,
    color: '#B5B4BC'
  },
  activeButtonText: {
    marginTop: 5,

    fontSize: 10,
    color: '#FF0000'
  }
})
