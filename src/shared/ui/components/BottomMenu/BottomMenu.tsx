import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { RouteList } from '../../../types'
import { MenuButton } from './components'
import { useStyles } from './useStyles'

export const BottomMenu: React.FC = () => {
  const { styles } = useStyles()
  const navigation = useNavigation<BottomTabNavigationProp<RouteList>>()
  const state = useNavigationState((s) => s)
  const currentRouteName = state?.routes[state?.index || 0].name
  const [activePage, setActivePage] = useState('CalendarPage')

  useEffect(() => {
    if (currentRouteName !== activePage) {
      setActivePage(currentRouteName)
    }
  }, [activePage, currentRouteName])

  useEffect(() => {
    setActivePage('CalendarPage')
  }, [])

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonContainer}>
        <MenuButton
          onPress={() => navigation.navigate('CalendarPage')}
          isActive={activePage === 'CalendarPage'}
          iconName="calendar"
          title="Calendar"
        />
        <MenuButton
          onPress={() => navigation.navigate('StatsPage')}
          isActive={activePage === 'StatsPage'}
          iconName="stats-chart"
          title="Statistics"
        />
        <MenuButton
          onPress={() => navigation.navigate('SettingsPage')}
          isActive={activePage === 'SettingsPage'}
          iconName="settings-sharp"
          title="Settings"
        />
      </View>
    </View>
  )
}
