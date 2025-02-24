import { StyleSheet, Text, Pressable } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

interface BottomMenuProps {
  onPress: () => void
  isActive: string
}

export const MenuButton: React.FC<BottomMenuProps> = ({ onPress, isActive }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name="calendar" size={32} color={isActive !== 'CalendarPage' ? '#B5B4BC' : '#FF0000'} />

      <Text style={isActive === 'CalendarPage' ? styles.activeButtonText : styles.buttonText}>Calendar</Text>
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
