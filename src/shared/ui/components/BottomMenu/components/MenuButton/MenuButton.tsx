import { StyleSheet, Text, Pressable } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

interface BottomMenuProps {
  onPress: () => void
  isActive: boolean
  iconName: 'calendar' | 'stats-chart' | 'settings-sharp'
}

export const MenuButton: React.FC<BottomMenuProps> = ({ onPress, isActive, iconName }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={iconName} size={32} color={isActive ? '#FF0000' : '#B5B4BC'} />

      <Text style={isActive ? styles.activeButtonText : styles.buttonText}>Calendar</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
