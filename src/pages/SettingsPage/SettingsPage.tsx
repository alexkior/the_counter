import { View, Text } from 'react-native'

import { useStyles } from './useStyles'

export const SettingsPage: React.FC = () => {
  const { styles } = useStyles()
  return (
    <View style={styles.container}>
      <View style={styles.pageHeadingContainer}>
        <Text style={styles.pageHeadingText}>Settings</Text>
      </View>
      <View style={styles.pageHeader}></View>
    </View>
  )
}
