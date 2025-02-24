import { useNavigation, useNavigationState } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { RouteList } from '../../../types'
import { MenuButton } from './components'

export const BottomMenu: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RouteList>>()
  const state = useNavigationState((s) => s)
  const currentRouteName = state?.routes[state?.index || 0].name
  const [activePage, setActivePage] = useState('CalendarPage')

  useEffect(() => {
    if (currentRouteName !== activePage) {
      setActivePage(currentRouteName)
    }
  }, [activePage, currentRouteName])

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonContainer}>
        <MenuButton onPress={() => navigation.navigate('CalendarPage')} isActive={activePage} />
        <MenuButton onPress={() => navigation.navigate('StatsPage')} isActive={activePage} />

        <MenuButton onPress={() => navigation.navigate('SettingsPage')} isActive={activePage} />
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
  }
})
