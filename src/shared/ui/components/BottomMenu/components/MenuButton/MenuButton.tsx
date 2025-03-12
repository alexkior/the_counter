import { Text, Pressable } from 'react-native'

import { themeStore } from '@app/index'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useStyles } from './useStyles'

interface BottomMenuProps {
  onPress: () => void
  isActive: boolean
  iconName: 'calendar' | 'stats-chart' | 'settings-sharp'
  title: string
}

export const MenuButton: React.FC<BottomMenuProps> = ({ onPress, isActive, iconName, title }) => {
  const { styles } = useStyles()
  const theme = themeStore.getTheme()

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={iconName} size={32} color={isActive ? theme.colors.secondary : theme.colors.elements} />

      <Text style={isActive ? styles.activeButtonText : styles.buttonText}>{title}</Text>
    </Pressable>
  )
}
