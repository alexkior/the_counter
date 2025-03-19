import { Pressable, Text } from 'react-native'

import { ButtonProps } from './Button.types'
import { useStyles } from './useStyles'

export const Button: React.FC<ButtonProps> = (props) => {
  const { onPress, title } = props
  const { styles } = useStyles()

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}
