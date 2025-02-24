import { NavigationProp } from '@react-navigation/native'

export type RouteList = {
  HomePage: undefined
  StatsPage: undefined
  SettingsPage: undefined
}

export type StackNavigation = NavigationProp<RouteList>
