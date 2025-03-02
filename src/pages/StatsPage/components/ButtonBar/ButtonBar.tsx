import { observer } from 'mobx-react-lite'
import { View, Text, Pressable } from 'react-native'
import Toast from 'react-native-toast-message'

import { useStyles } from './useStyles'

export const ButtonBar: React.FC = observer(() => {
  const { styles } = useStyles()
  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Hello!',
      text2: 'This part is not ready yet'
    })
  }

  return (
    <View style={styles.rangeSelectContainer}>
      <Pressable style={styles.rangeSelectButtonActive} onPress={() => console.log('All time')}>
        <Text style={styles.rangeSelectButtonTextActive}>All time</Text>
      </Pressable>
      <Pressable style={styles.rangeSelectButton} onPress={() => showToast()}>
        <Text style={styles.rangeSelectButtonText}>30 days</Text>
      </Pressable>
      <Pressable style={styles.rangeSelectButton} onPress={showToast}>
        <Text style={styles.rangeSelectButtonText}>This month</Text>
      </Pressable>
      <Pressable style={styles.rangeSelectButton} onPress={showToast}>
        <Text style={styles.rangeSelectButtonText}>Last month</Text>
      </Pressable>
      <Pressable style={styles.rangeSelectButton} onPress={showToast}>
        <Text style={styles.rangeSelectButtonText}>This year</Text>
      </Pressable>
    </View>
  )
})
